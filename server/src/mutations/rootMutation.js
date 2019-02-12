const graphql = require('graphql')
const bookMutation = require('./book/book')
const authorMutation = require('./author/author')

const { GraphQLObjectType } = graphql

module.exports = new GraphQLObjectType({
    name: 'RootMutationType',
    fields: () => ({
        addAuthor: authorMutation,
        addBook: bookMutation
    })
})