const validateStudent =(requireAll) =>(req,res,next)=>{
    const {firstName, lastName} =req.body;
    const errors = [];
    if (requireAll&&!firstName) errors.push('fn required');
    if (requireAll&&!lastName) errors.push('ln required');
    if (firstName?.length<3) errors.push('fn short');
    if (lastName?.length<3) errors.push('ln short');

    if(errors.length){
        res.status(400).json({
            errors,
        });
        return;
    }
    next();
}

module.exports = validateStudent;