import { gql } from 'apollo-boost'

export const getBooksQuery = gql`
    {
        books{
            name
            id
        }
    }

`

export const getAuthorsQuery = gql`
    {
        authors{
            name
            id
        }
    }

`

export const getBookQuery = gql`
    query ($id: ID) {
        book(id: $id) {
            name
            genre
            author {
                id
                name
                age
                books{
                    name
                    id
                }
            }
        }
    }
`