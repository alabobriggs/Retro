import React, { Component } from 'react';
import { graphql } from 'react-apollo'
import { getBookQuery } from '../graphql/queries.js'


class BookDetails extends Component {

    displayBookDetails = () => {
        const {book} = this.props.data
        if(book) {
            return(
                <div>
                    <h3>Name: {book.name}</h3>
                    <p>Genre: {book.genre}</p>
                    <p>Author: {book.author.name}</p>
                    <ul>
                        Author's books: {
                            book.author.books.map(item => {
                                return (
                                    <li key={item.id}>
                                        {item.name}
                                    </li>
                                )
                            })
                        }
                    </ul>
                </div>
            )
        }
    }

    render() {

        console.log(this.props)
        return (
            <div id='book-details'>
                <p>More book details</p>
                {this.displayBookDetails()}
            </div>
        );
    }
}

export default graphql(getBookQuery, {
    options: props => {
        return {
            variables: {
                id: props.bookId
            }

        }
    }
})(BookDetails);