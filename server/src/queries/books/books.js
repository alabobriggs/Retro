const graphql = require('graphql')
const BookType = require('../../types/book')
const Book = require('../../models/book')

const { GraphQLList } = graphql

module.exports = {
    type: new GraphQLList(BookType),
    resolve: () => {

        return Book.find()
        
    }
}