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

const userType = new GraphQL.GraphQLObjectType({
    name: "User",
    fields: {
        id: { type: GraphQL.GraphQLID },
        email: { type: GraphQL.GraphQLString },
        pwd: { type: GraphQL.GraphQLString }
    }
});

const dao = require('../business/index');

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
        },
    },
});

const resolver_2 = new GraphQL.GraphQLObjectType({
    name: "Mutations",
    fields: {
        createUser: {
            type: userType,
            args: {
                email: {type: GraphQL.GraphQLString},
                pwd: {type: GraphQL.GraphQLString},
            },
            resolve: async (_, args) => {
                const { email, pwd } = args;
                
                return await dao.user.joinUser(email,pwd);
            }
        }
    }
})

const schema = new GraphQL.GraphQLSchema(
    {
        query: resolver,
        mutation: resolver_2
    }
);

module.exports = { schema: schema, root: resolver };