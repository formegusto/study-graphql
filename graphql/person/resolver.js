const GraphQL = require('graphql');
const personData = require('./data');
const PersonType = require('./type');

module.exports = new GraphQL.GraphQLObjectType({
    name: "Query",
    fields: {
        hello: {
            type: GraphQL.GraphQLString,
            resolve: () => 'Hello world',
        },
        person: {
            type: PersonType,
            args: {
                id: {type: GraphQL.GraphQLInt}
            },
            resolve: (_,args) => 
                personData.find((person) => person.id === args.id)
        },
        persons: {
            type: new GraphQL.GraphQLList(PersonType),
            resolve: () => personData
        },
    },
});
