const GraphQL = require('graphql');
const { personData, personAddress } = require('../data');
const { PersonType, PersonInputType, PersonAddressType } = require('../type');

const MutationResolver = new GraphQL.GraphQLObjectType({
    name: "PersonMutation",
    fields: {
        createPerson: {
            type: GraphQL.GraphQLList(PersonType),
            args: {
                person: { type: PersonInputType }
            },
            resolve: (_, args) => {
                personData.push(args.person);
                personAddress.push(args.person.address);

                return personData;
            },
        }
    }
});

module.exports = MutationResolver;