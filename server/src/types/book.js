const graphql = require('graphql')
const AuthorType = require('./author')
const Author = require('../models/author')

const { 
    GraphQLObjectType,
    GraphQLString,
    GraphQLID
} = graphql

module.exports = new GraphQLObjectType({
    name: 'Book',
    fields: () => ({
        id: { type: GraphQLID },
        name: { type: GraphQLString },
        genre: { type: GraphQLString },
        author: {
            type: AuthorType,
            resolve: (parent,args) => {

                return Author.findById(parent.authorId)
                
            }
        }
       
    })
})
