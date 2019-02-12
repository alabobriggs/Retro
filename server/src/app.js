// IMPORTS ====================================================
const express = require('express')
const graphqlHTTP = require('express-graphql')
const schema = require('./schema/schema')
const mongoose = require('mongoose')

// INITIALIZATIONS ============================================
const app = express()

// SETUPS =====================================================

// graphql
app.use('/graphql', graphqlHTTP({
    schema,
    graphiql: true,
    formatError(err) {
        if (!err.originalError) {
            console.log(err)
            return err
        }
        const data = err.originalError.data || []
        const message = err.message || 'An error occured.'
        const status = err.originalError.status || 500
        
        return {
            message,
            status,
            data
        }
    }
}) )


mongoose
    .connect("mongodb://localhost:27017/graphql-tutorial", {
        useNewUrlParser: true
    })
    .then(() => {
        app.listen(
            process.env.PORT || 8080,
            () => console.log('server started at port 8080')
        );
    })
    .catch(err => console.log(err))
