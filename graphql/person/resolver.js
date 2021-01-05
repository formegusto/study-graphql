const GraphQL = require('graphql');
const { personData, personAddress } = require('./data');
const { PersonType, PersonAddressType } = require('./type');


const RootResolver = new GraphQL.GraphQLObjectType({
    name: "PersonResolver",
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

module.exports = RootResolver;
