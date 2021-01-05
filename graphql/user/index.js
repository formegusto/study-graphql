const GraphQL = require('graphql');
const resolver = require('./resolver/mutation');
const query = require('./resolver/query');

module.exports = new GraphQL.GraphQLSchema(
    {
        query: query,
        mutation: resolver
    }
);