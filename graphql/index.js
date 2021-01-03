const { mergeSchemas } = require('@graphql-tools/merge');
const UserSchema = require('./user/index');
const PersonSchema = require('./person/index');

const schema = mergeSchemas({
    schemas: [
        PersonSchema,
        UserSchema
    ]
});

module.exports = { schema: schema };