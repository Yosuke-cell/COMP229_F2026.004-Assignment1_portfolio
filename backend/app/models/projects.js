let mongoose = require('mongoose');

let projectsModel = mongoose.Schema(
    {
        title: String,
        completion: Date,
        description: String,
        image: String
    },
    {
        collection: "projects"
    }
);

//ensure virtual fiels are serialised 
projectsModel.set('toJSON', {
    virtuals: true,
    versionKey: false,
    transform: function(doc, ret) {
        
    }
}
);

module.exports = mongoose.model("projects", projectsModel);