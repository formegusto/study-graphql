const GraphQL = require('graphql');
const dao = require('../../../business/index');
const UserType = require('../type');

module.exports = new GraphQL.GraphQLObjectType({
    name: "Mutations",
    fields: {
        createUser: {
            type: UserType,
            args: {
                email: {type: GraphQL.GraphQLString},
                pwd: {type: GraphQL.GraphQLString},
            },
            resolve: async (_, args, context) => {
                const { email, pwd } = args;
                console.log(context);
                
                return await dao.user.joinUser(email,pwd);
            }
        }
    }
});;