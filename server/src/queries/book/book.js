const graphql = require('graphql')
const { GraphQLID } = graphql
const BookType = require('../../types/book')
const Book = require('../../models/book')

module.exports = {
    type: BookType,
    args: { 
        id: { 
            type: GraphQLID 
        } 
    },
    resolve: (parent, args) => {
        
        return Book.findById(args.id)
    }
}