const { BadRequestError } = require("../middleware/errors");

const validateUser =(requireAll) =>(req,res,next)=>{
    const {name, email} =req.body;
    if ((requireAll&&!name) ||(requireAll&&!email)) {
        throw new BadRequestError( "name and email are required");
    }
    next();
}


module.exports = validateUser;