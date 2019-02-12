const graphql = require('graphql')
const AuthorType = require('../../types/author')
const Author = require('../../models/author')

const { GraphQLID } = graphql

module.exports = {
    type: AuthorType,
    args: {
        id: {
            type: GraphQLID
        }
    },
    resolve: (parent, args) => {
       
        return Author.findById(args.id)
        
    }
}