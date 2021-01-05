const { mergeSchemas } = require('@graphql-tools/merge');
const UserSchema = require('./user/index');
const PersonSchema = require('./person/index');
const { stitchSchemas } = require('@graphql-tools/stitch');

const schema = stitchSchemas({
    subschemas: [
        PersonSchema,
        UserSchema,
    ],
    mergeTypes: true,
});

console.log(schema.getQueryType().getFields());
console.log(schema.getMutationType().getFields());

module.exports = { schema: schema };