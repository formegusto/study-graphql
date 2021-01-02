var express = require('express');
var graphqlHTTP = require('express-graphql');
var Graphql = require('graphql');

const personType = new Graphql.GraphQLObjectType({
    name: "Person",
    fields: {
        id: { type: Graphql.GraphQLID },
        name: { type: Graphql.GraphQLString },
        age: { type: Graphql.GraphQLInt }
    }
});

const personData = [
    {id:1000, name: "kim", age: 20},
    {id:2000, name: "lee", age: 30},
    {id:3000, name: "park", age: 40},
];

const queryType = new Graphql.GraphQLObjectType({
    name: "Query",
    fields: {
        hello: {
            type: Graphql.GraphQLString,
            resolve: () => 'Hello world',
        },
        person: {
            type: personType,
            args: {
                id: {type: Graphql.GraphQLInt}
            },
            resolve: (_,args) => 
                personData.find((person) => person.id === args.id)
        },
        persons: {
            type: new Graphql.GraphQLList(personType),
            resolve: () => personData
        }
    }
})

const schema = new Graphql.GraphQLSchema({query: queryType});

var app = express();
app.use('/graphql', graphqlHTTP.graphqlHTTP({
    schema: schema,
    graphiql: true,
}));
app.listen(4000, () => console.log('Now brows to localhost:4000/graphql'));