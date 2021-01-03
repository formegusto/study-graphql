module.exports = (function() {
    const model = require('../mongoose/model');

    async function joinUser(email, pwd) {
        const newUser = new model.User({email, pwd: pwd});
        const result = await newUser.save();

        return result;
    }

    return {
        joinUser: joinUser,
    };
})();