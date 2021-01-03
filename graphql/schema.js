const GraphQL = require('graphql');
const { personData } = require('./data');

const personType = new GraphQL.GraphQLObjectType({
    name: "Person",
    fields: {
        id: { type: GraphQL.GraphQLID },
        name: { type: GraphQL.GraphQLString },
        age: { type: GraphQL.GraphQLInt }
    }
});

const resolver = new GraphQL.GraphQLObjectType({
    name: "Query",
    fields: {
        hello: {
            type: GraphQL.GraphQLString,
            resolve: () => 'Hello world',
        },
        person: {
            type: personType,
            args: {
                id: {type: GraphQL.GraphQLInt}
            },
            resolve: (_,args) => 
                personData.find((person) => person.id === args.id)
        },
        persons: {
            type: new GraphQL.GraphQLList(personType),
            resolve: () => personData
        }
    }
});

const schema = new GraphQL.GraphQLSchema({query: resolver});

module.exports = { schema: schema, root: resolver };

