const GraphQL = require('graphql');
const resolver = require('./resolver');

module.exports = new GraphQL.GraphQLSchema(
    {
        query: resolver,
    }
);