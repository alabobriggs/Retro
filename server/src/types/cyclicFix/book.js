const graphql = require('graphql')

const { 
    GraphQLObjectType,
    GraphQLString,
    GraphQLID
} = graphql

module.exports = new GraphQLObjectType({
    name: 'BookFix',
    fields: () => ({
        id: { type: GraphQLID },
        name: { type: GraphQLString },
        genre: { type: GraphQLString }
       
    })
})
