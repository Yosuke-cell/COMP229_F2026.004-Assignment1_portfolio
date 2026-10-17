let servicesModel = require('../models/services');

//post /api/service
module.exports.processAdd = async function (req, res, next) {
    try {
        let newService = servicesModel(req.body);

        let result = await servicesModel.create(newService);
        console.log(result);

        res.json({
            success: true,
            message: "Service added successfully.",
            data: result
        });
    } catch (error) {
        console.log(error);
        next(error);
    }
};

//getall 
module.exports.processList = async function(req, res, next){
    try{
        let list = await servicesModel.find({});

        res.json({
            success: true,
            message: "Service list retrieved successfully.",
            data: list
        });

    }catch(error){
        console.log(error);
        next(error);
    }
};

//getbyID
module.exports.getByID = async function(req, res, next){
    try{
        let serviceId = req.params.id;
        let service = await servicesModel.findOne({_id: serviceId});

        res.json({
            success: true,
            message: "Service get by id successfully.",
            data: service
        });
    }catch(error){
        console.log(error);
        next(error);
    }
};

//put 
module.exports.processEdit = async function(req, res, next){
    try{
        let serviceId = req.params.id;
        let updateService = servicesModel(req.body);
        updateService._id = serviceId;

        let result = await servicesModel.updateOne({_id: serviceId}, updateService);
        console.log(result);
        res.json({
            success: true,
            message: "Service updated successfully."
        });
    }catch(error){
        console.log(error);
        next(error);
    }
};

//delete
module.exports.processDelete = async function(req, res, next){
    try{
        let serviceId = req.params.id;
        let result = await servicesModel.deleteOne({_id: serviceId});
        console.log(result);

        res.json({
            success: true,
            message: "Service deleted successfully."
        })
    }catch(error){
        console.log(error);
        next(error);
    }
};