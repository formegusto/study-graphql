require('dotenv').config();

const express = require('express');
const graphqlHTTP = require('express-graphql');

const app = express();
const PORT = process.env.PORT;

const { schema } = require('./graphql');

app.use('/graphql', graphqlHTTP.graphqlHTTP({
    schema: schema,
    graphiql: true,
}));
app.listen(PORT, () => console.log('Now brows to localhost:4000/graphql'));