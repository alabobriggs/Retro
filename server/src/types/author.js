const graphql = require('graphql')
const BookType = require('./cyclicFix/book')
const Book = require('../models/book')

const {
    GraphQLObjectType,
    GraphQLString,
    GraphQLInt,
    GraphQLID,
    GraphQLList
} = graphql

// fields should be returned in an object to remove top to bootm reading bugs -- OPTIONAL
module.exports = new GraphQLObjectType({
    name: 'Author',
    fields: () => ({
        id: { type: GraphQLID },
        age: { type: GraphQLInt },
        name: { type: GraphQLString },
        books : {
            type: new GraphQLList(BookType),
            resolve: (parent, args) => {
                
                return Book.find({authorId: parent.id})

            }
        }
    })
})
