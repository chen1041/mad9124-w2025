const users = require('../models/users.json');

const getAll = ()=> users;

const create = (name,email) =>{
    const newUser ={
        id:Date.now(),
        name,
        email,
    }
    users.push(newUser);
    return newUser;
}

module.exports = {
    getAll,
    create,
}