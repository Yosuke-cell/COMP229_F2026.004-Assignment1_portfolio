let ProjectsModel = require('../models/projects');

//post /api/projects
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

//get /api/projects
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

//get /api/projects/:id
module.exports.getByID = async function(req, res, next){
    try{
        let projectId = req.params.id;
        let project = await ProjectsModel.findOne({_id: projectId});
        
        res.json(
            {
                success: true,
                message: "Project get by id successfully.",
                data: project
            }
        );
    }catch(error){
        console.log(error);
        next(error);
    }
};


//put /api/projects/:id
module.exports.processEdit = async function(req, res, next){
    try{
        let projectId = req.params.id;
        let updatedProject = ProjectsModel(req.body);
        updatedProject._id = projectId;

        let result = await ProjectsModel.updateOne({_id: projectId}, updatedProject);
        console.log(result);

        res.json({
            success: true,
            message: "Project updated successfully."
        });
    }catch(error){
        console.log(error);
        next(error);
    }
};


//delete /api/projects/:id
module.exports.processDelete = async function(req, res, next){
    try{
        let projectId = req.params.id;
        let result = await ProjectsModel.deleteOne({_id: projectId});
        console.log(result);

        res.json({
            success: true,
            message: "Project deleted successfully."
        });
    }catch(error){
        console.log(error);
        next(error);
    }
};