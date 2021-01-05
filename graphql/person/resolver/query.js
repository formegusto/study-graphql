const GraphQL = require('graphql');
const { personData } = require('../data');
const { PersonType } = require('../type');

const QueryResolver = new GraphQL.GraphQLObjectType({
    name: "PersonQuery",
    fields: {
        person: {
            type: PersonType,
            args: {
                id: {type: GraphQL.GraphQLInt}
            },
            resolve: (_,args) => personData.find((person) => person.id === args.id)
        },
        persons: {
            type: new GraphQL.GraphQLList(PersonType),
            resolve: () => personData
        }, 
    },
});

module.exports = QueryResolver;
