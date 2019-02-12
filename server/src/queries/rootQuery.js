const graphql = require('graphql')
const bookQuery = require('./book/book')
const authorQuery = require('./author/author')
const booksQuery = require('./books/books')
const authorsQuery = require('./authors/authors')

const { GraphQLObjectType } = graphql

module.exports = new GraphQLObjectType({
    name: 'RootQueryType',
    fields:() => ({
        book: bookQuery,
        author: authorQuery,
        books: booksQuery,
        authors: authorsQuery
    })
})