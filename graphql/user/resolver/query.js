const GraphQL = require('graphql');

module.exports = new GraphQL.GraphQLObjectType({
    name: "Query",
    fields: {
        fetchUsers : {
            type: GraphQL.GraphQLInt,
            resolve: (_) => {
                return 1;
            }
        }
    }
});