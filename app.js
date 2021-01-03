require('dotenv').config();

const express = require('express');
const graphqlHTTP = require('express-graphql');

const app = express();
const PORT = process.env.PORT;

const { schema, root } = require('./graphql/schema');

app.use('/graphql', graphqlHTTP.graphqlHTTP({
    schema: schema,
    rootValue: root,
    graphiql: true,
}));
app.listen(PORT, () => console.log('Now brows to localhost:4000/graphql'));