require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');
const graphqlHTTP = require('express-graphql');

const app = express();
const { PORT, MONGO_URI } = process.env;
mongoose
    .connect(MONGO_URI, { useNewUrlParser: true, useFindAndModify: false } )
        .then(() => {
            console.log('Connect to MongoDB');
        })
        .catch((e) => {
            console.error(e);
        });

const { schema, root } = require('./graphql/schema');

app.use('/graphql', graphqlHTTP.graphqlHTTP({
    schema: schema,
    rootValue: root,
    graphiql: true,
}));
app.listen(PORT, () => console.log('Now brows to localhost:4000/graphql'));