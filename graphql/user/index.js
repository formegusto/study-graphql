const GraphQL = require('graphql');
const resolver = require('./resolver/mutation');

module.exports = new GraphQL.GraphQLSchema(
    {
        mutation: resolver
    }
);