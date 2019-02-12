const graphql = require('graphql')
const AuthorType = require('../../types/author')
const { GraphQLList } = graphql
const Author = require('../../models/author')

module.exports = {
    type: new GraphQLList(AuthorType),
    resolve: () => {
        return Author.find()
    }
}