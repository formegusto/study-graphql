const GraphQL = require('graphql');
const { personData, personAddress } = require('./data');
const { PersonType, PersonAddressType } = require('./type');


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
            resolve: (_,args) => {
                console.log(_);
                return personData.find((person) => person.id === args.id);
            }   
        },
        persons: {
            type: new GraphQL.GraphQLList(PersonType),
            resolve: (_, args, context) => {
                console.log(_);

                return personData;
            },
        }, 
    },
});
