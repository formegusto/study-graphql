require('dotenv').config();

const express = require('express');
const graphqlHTTP = require('express-graphql');

const app = express();
const PORT = process.env.PORT;

const { schema } = require('./graphql');

const session = {
    id: 1001,
    expires: 20000
}

app.use('/graphql', graphqlHTTP.graphqlHTTP({
    schema: schema,
    context: session,
    graphiql: true,
}));
app.listen(PORT, () => console.log('Now brows to localhost:4000/graphql'));