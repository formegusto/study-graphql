const GraphQL = require('graphql');
const { personAddress } = require('./data');

const PersonAddressInputType = new GraphQL.GraphQLInputObjectType({
    name: "AddressInput",
    fields: {
        personId: { type: GraphQL.GraphQLID },
        address: { type: GraphQL.GraphQLString }
    }
});

const PersonAddressType = new GraphQL.GraphQLObjectType({
    name: "Address",
    fields: {
        personId: { type: GraphQL.GraphQLID },
        address: { type: GraphQL.GraphQLString }
    }
});

const PersonInputType = new GraphQL.GraphQLInputObjectType({
    name: "PersonInput",
    fields: {
        id: { type: GraphQL.GraphQLID },
        name: { type: GraphQL.GraphQLString },
        age: { type: GraphQL.GraphQLInt },
        address: { type: GraphQL.GraphQLString },
    }
})

const PersonType = new GraphQL.GraphQLObjectType({
    name: "Person",
    fields: {
        id: { type: GraphQL.GraphQLID },
        name: { type: GraphQL.GraphQLString },
        age: { type: GraphQL.GraphQLInt },
        address: { 
            type: PersonAddressType,
            resolve: (_, args, context) => personAddress.find(address => address.personId === _.id)
        },
    }
});

module.exports = {
    PersonType: PersonType,
    PersonAddressType: PersonAddressType,
    PersonInputType: PersonInputType,
    PersonAddressInputType: PersonAddressInputType,
};