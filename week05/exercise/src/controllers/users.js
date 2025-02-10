//创建一些方法
const usersService = require('../services/users.js');

const create = (req, res) => {
    try{
        const {name,email} = req.body;
        const newUser = usersService.create(name,email);
        res.status(201).json({
            data:newUser,
        });
    }catch(error){
        next(error);
    }
    // const newUser = {
    //     ...req.body,
    //     id: Date.now(),
    // }
    // console.log("new user",newUser);
    // users.push(newUser);
    // res.status(201).json({
    //     newUser,
    // })

};


const getAll = (req, res, next) => {
    try{
        const users = usersService.getAll();
        res.status(200).json({
            data:users,
        });
    }
    catch(error){
        next(error);
    }
};



module.exports = {
    create,
    getAll,
};