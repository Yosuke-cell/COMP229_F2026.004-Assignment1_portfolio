let mongoose = require('mongoose');

let servicesModle = mongoose.Schema(
    {
        title: String,
        description: String
    },
    {
        collection: "services"
    }
);

//ensure virsal fields are serialised
servicesModle.set('toJSON',{
    virtuals: true,
    versionKey: false,
    transform: function(doc, ret){
        delete ret._id
    }
});

module.exports = mongoose.model("services", servicesModle);