import React, { Component } from 'react';
import { graphql, compose } from 'react-apollo'
import { getAuthorsQuery, getBooksQuery } from '../graphql/queries.js'
import { addBookMutation } from '../graphql/mutations.js'


class AddBook extends Component {
    state = {
        name: '',
        genre: '',
        authorId: ''
    }

    displayAuthors = () => {
        const data = this.props.getAuthorsQuery
        if(data.loading){
            return (<option disabled>Loading Authors..</option>)
        }
        return data.authors.map(author => (
            <option key={author.id} value={author.id}>{author.name}</option>
        ))
    }

    submitFormHandler =async e => {
        e.preventDefault()
        const res = await this.props.addBookMutation({
            variables: {
                name: this.state.name,
                genre: this.state.genre,
                authorId: this.state.authorId
            },
            refetchQueries: [{
                query: getBooksQuery
            }]
        })

        console.log(res)
    }

    render() {
        // console.log(this.props)
        return (
            <form id='add-book' onSubmit={e => this.submitFormHandler(e)}>

                <div className='field'>
                    <label>Book name:</label>
                    <input 
                        type='text' 
                        value={this.state.name} 
                        onChange = {e => {
                        this.setState({name: e.target.value})
                    }}/>
                </div>

                <div className='field'>
                    <label>Genre:</label>
                    <input 
                        type='text' 
                        value={this.state.genre}
                        onChange={e => {
                            this.setState({ genre: e.target.value })
                        }}
                    />
                </div>

                <div className='field'>
                    <label>Author:</label>
                    <select 
                        value={this.state.authorId}
                        onChange={e => {
                            let value = e.target.value
                            if (e.target.value === "Select author") {
                                value = ""
                            }
                            this.setState({ authorId: value })
                        }}
                    >
                        <option>Select author</option>
                        {this.displayAuthors()}
                    </select>
                </div>
                <button>Add</button>

            </form>
        );
    }
}

export default compose(
    graphql(getAuthorsQuery, { name: 'getAuthorsQuery'}), 
    graphql(addBookMutation, { name: 'addBookMutation'}) 
)(AddBook);