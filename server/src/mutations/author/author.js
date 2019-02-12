const graphql = require('graphql')
const AuthorType = require('../../types/author')
const Author = require('../../models/author')

const {GraphQLString, GraphQLInt, GraphQLNonNull} = graphql

module.exports = {
    type: AuthorType,
    args: {
        name: { type: new GraphQLNonNull(GraphQLString) },
        age: { type: new GraphQLNonNull(GraphQLInt) }
    },
    resolve: async (parent, args) => {
        try {
            const author = new Author({
                name: args.name,
                age: args.age
            })

            return author.save()
        } 
        catch(err){
            let error = new Error('Something went wrong')
            error.status = 500

            throw error
        }

    }
}