module.exports = (function() {
    const mongoose = require('mongoose');
    const URI = process.env.MONGO_URI;

    mongoose
    .connect(URI, { useNewUrlParser: true, useFindAndModify: false } )
        .then(() => {
            console.log('Connect to MongoDB');
        })
        .catch((e) => {
            console.error(e);
        });

    const schema = {};
    const model = {};

    schema.User = require('./schema/user')(mongoose);

    for(let k in schema) {
        model[k] = mongoose.model(k, schema[k]);
    }

    return model;
})();