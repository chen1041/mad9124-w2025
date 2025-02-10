//使用express框架来构建后端服务
const {Router} = require('express');
const router = Router();

//导入controller当中的处理方法
const studentsController = require('../controllers/students');
const validateStudent = require('../middleware/validateStudent');


// router.use((_req,_res,next)=>{
//     console.log('this only applies to the student router');
//     next();
// })


//用框架自带的方法快速管理不同路径对应的响应
router.get("/", studentsController.getAll); // return a collection of students
router.get("/:id",studentsController.getById); // return the students matching the id value
router.post('/',validateStudent(true),studentsController.create); // create a new student
router.put("/:id",validateStudent(true), studentsController.replace); 
// replace all properties of a car
router.patch("/:id",validateStudent(0), studentsController.update); 
// app.delete("/api/cars/:id", (req, res) => {}); // destroy the record for a car
router.delete('/:id', studentsController.deleteOne);

module.exports = router;