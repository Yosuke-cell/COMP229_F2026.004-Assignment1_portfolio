let ProjectsModel = require('../models/projects');

module.exports.processAdd = async function(req, res, next){
    try{
        let newProject = ProjectsModel(req.body);

        let result = await ProjectsModel.create(newProject);
        console.log(result);

        res.json(
            {
                success: true,
                message: "Project added successfully.",
                data: result
            }
        );
    }catch(error){
        next(error);
    }
};


module.exports.projectsList = async function(req, res, next){
    try{
        let list = await ProjectsModel.find({});

        res.json({
            success: true,
            message: "Projects list retrieved successfully.",
            data: list
        });
    }catch(error){
        console.log(error);
        next(error);
    }
};