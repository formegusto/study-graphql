const GraphQL = require('graphql');
const { personData, personAddress } = require('../data');
const { PersonType, PersonInputType } = require('../type');

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
                personAddress.push({
                    personId: args.person.id,
                    address : args.person.address
                });

                return personData;
            },
        },
        updatePerson: {
            type: GraphQL.GraphQLList(PersonType),
            args: {
                id: { type: GraphQL.GraphQLID },
                name: { type: GraphQL.GraphQLString }
            },
            resolve: (_, args) => {
                return personData.map((person) => 
                   (person.id === args.id) ? 
                        {
                            ...person,
                            name: args.name
                        }
                        :
                        person
                );
            }
        },
        deletePerson: {
            type: GraphQL.GraphQLList(PersonType),
            args: {
                id: { type: GraphQL.GraphQLID }
            },
            resolve: (_,args) => {
                return personData.filter((person) => 
                    person.id != args.id);
            }
        }
    }
});

module.exports = MutationResolver;