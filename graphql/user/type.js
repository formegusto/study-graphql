const GraphQL = require('graphql');

const UserType = new GraphQL.GraphQLObjectType({
    name: "User",
    fields: {
        id: { type: GraphQL.GraphQLID },
        email: { type: GraphQL.GraphQLString },
        pwd: { type: GraphQL.GraphQLString }
    }
});

module.exports = UserType;