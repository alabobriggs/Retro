const graphql = require('graphql')
const Book = require('../../models/book')
const BookType = require('../../types/book')

const { GraphQLString, GraphQLID, GraphQLNonNull } = graphql

module.exports = {
    type: BookType,
    args: {
        name: { type: new GraphQLNonNull(GraphQLString)},
        genre: { type: new GraphQLNonNull(GraphQLString)},
        authorId: { type: new GraphQLNonNull(GraphQLID)}
    },
    resolve: async (parent, args) => {
        try {

            const book = new Book({
                name: args.name,
                genre: args.genre,
                authorId: args.authorId
            })

            return book.save()

        }
        catch (err) {

            return err

        }
    }
}