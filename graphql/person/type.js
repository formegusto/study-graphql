const GraphQL = require('graphql');

const PersonType = new GraphQL.GraphQLObjectType({
    name: "Person",
    fields: {
        id: { type: GraphQL.GraphQLID },
        name: { type: GraphQL.GraphQLString },
        age: { type: GraphQL.GraphQLInt }
    }
});

module.exports = PersonType;