let usersModel = require('../models/users');

//post 
module.exports.processAdd = async function (req, res, next) {
    try {
        let newUser = usersModel(req.body);

        let result = await usersModel.create(newUser);
        console.log(result);
        res.json({
            success: true,
            message: "User added successfully.",
            data: result
        });
    } catch (error) {
        console.log(error);
        next(error);
    }
};

//getall 
module.exports.usersList = async function(req, res, next){
    try{
        let list = await usersModel.find({});

        res.json({
            success: true,
            message: "User list retrieved successfully.",
            data: list
        });
    }catch(error){
        console.log(error);
        next(error);
    }
};

//getbyid
module.exports.getByID = async function(req, res, next){
    try{
        let userId = req.params.id;
        let user = await usersModel.findOne({_id: userId});

        res.json({
            success: true,
                message: "User get by id successfully.",
                data: user
        });
    }catch(error){
        console.log(error);
        next(error);
    }
};

//put
module.exports.processEdit = async function(req, res, next){
    try{
        let userId = req.params.id;
        let updateduser = usersModel(req.body);
        updateduser._id = userId;

        let result = await usersModel.updateOne({_id:userId}, updateduser);
        console.log(result);

        res.json({
            success: true,
            message: "User updated successfully."
        });
    }catch(error){
        console.log(error);
        next(error);
    }
};

//delete
module.exports.processDelete = async function(req, res, next){
    try{
        let userId = req.params.id;
        let result = await usersModel.deleteOne({_id: userId});

        console.log(result);

        res.json({
            success: true,
            message: "User deleted successfully."
        });
    }catch(error){
        console.log(error);
        next(error);
    }
};