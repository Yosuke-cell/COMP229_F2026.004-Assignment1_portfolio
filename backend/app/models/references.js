let mongoose = require('mongoose');

let referencesModel = mongoose.Schema(
    {
        name: String,
        testimonial: String,
        position: String,
        company: String
    },
    {
        collection: "references"
    }
);

referencesModel.set('toJSON', {
    virtuals: true,
    versionKey: false,
    transform: function(dot, ret){
        delete ret._id
    }
});

module.exports = mongoose.model('references', referencesModel);