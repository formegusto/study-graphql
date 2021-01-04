const GraphQL = require('graphql');
const { personData, personAddress } = require('./data');

const PersonAddressType = new GraphQL.GraphQLObjectType({
    name: "Address",
    fields: {
        personId: { type: GraphQL.GraphQLID },
        address: { type: GraphQL.GraphQLString }
    }
});

const PersonType = new GraphQL.GraphQLObjectType({
    name: "Person",
    fields: {
        id: { type: GraphQL.GraphQLID },
        name: { type: GraphQL.GraphQLString },
        age: { type: GraphQL.GraphQLInt },
        address: { 
            type: PersonAddressType,
                resolve: (_, args, context) => {
                console.log(_);

                return personAddress.find(address => address.personId === _.id);
            } 
        },
    }
});

module.exports = {
    PersonType: PersonType,
    PersonAddressType: PersonAddressType,
};