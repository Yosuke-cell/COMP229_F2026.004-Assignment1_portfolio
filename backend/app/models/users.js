let mongoose = require('mongoose');

let usersModel = mongoose.Schema(
    {
        firstname: String,
        lastname: String,
        email: String,
        password: String,
        created: Date,
        updated: Date
    },
    {
        collection: "users"
    }
);

//ensure virtual fields are serialised
usersModel.set('toJSON', {
    virtuals: true,
    versionKey: false,
    transform(doc, ret) {
        delete ret._id
    }
});

module.exports = mongoose.model("users", usersModel);