let referencesModel = require('../models/references');

//post /api/references
module.exports.processAdd = async function (req, res, next) {
    try {
        let newReference = referencesModel(req.body);

        let result = await referencesModel.create(newReference);
        console.log(result)

        res.json({
            success: true,
            message: "Reference added successfully.",
            data: result
        });
    } catch (error) {
        console.log(error);
        next(error);
    }
};

//getall /api/references
module.exports.referencesList = async function (req, res, next) {
    try {
        let list = await referencesModel.find({});

        res.json({
            success: true,
            message: "Reference list retrieved successfully.",
            data: list
        });
    } catch (error) {
        console.log(error);
        next(error);
    }
};

//getbyid api/references
module.exports.getByID = async function (req, res, next) {
    try {
        let referenceId = req.params.id;
        let reference = await referencesModel.findOne({ _id: referenceId });

        res.json({
            success: true,
            message: "Reference get by id successfully.",
            data: reference
        });
    } catch (error) {
        console.log(error);
        next(error);
    }
};


//put api/references
module.exports.processEdit = async function (req, res, next) {
    try {
        let referenceId = req.params.id;
        let updatedReference = referencesModel(req.body);
        updatedReference._id = referenceId;

        let result = await referencesModel.updateOne({ _id: referenceId }, updatedReference);
        console.log(result);

        res.json({
            success: true,
            message: "Reference updated successfully."
        });
    } catch (error){
        console.log(error);
        next(error);
    }
};

//delete api/references
module.exports.processDelete = async function (req, res, next) {
    try {
        let referenceId = req.params.id;
        let result = await referencesModel.deleteOne({ _id: referenceId });
        console.log(result)

        res.json({
            success: true,
            message: "Reference deleted successfully."
        });
    } catch (error) {
        console.log(error);
        next(error);
    }
};