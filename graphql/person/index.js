const GraphQL = require('graphql');
const QueryResolver = require('./resolver/query');
const MutationResolver = require('./resolver/mutaition');

module.exports = new GraphQL.GraphQLSchema(
    {
        query: QueryResolver,
        mutation: MutationResolver
    }
);