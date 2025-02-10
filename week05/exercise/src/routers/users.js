const {Router} = require('express');
const router = Router();

const usersController = require('../controllers/users');
const validateUser = require('../middleware/validateUser');




router.get("/", usersController.getAll); 
router.post('/',validateUser(true),usersController.create); 

module.exports = router;