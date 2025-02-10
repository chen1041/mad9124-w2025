//创建一些方法
const { NotFoundError } = require('../middleware/errors');
const students = require('../models/students.json');

const create = (req, res) => {
    //find new student data
    const newStudent = {
        ...req.body,
        id: Date.now(),
    }
    console.log("new student",newStudent);
    //save in our array
    students.push(newStudent);
    //respond with new student with id
    res.status(201).json({
        data: newStudent,
    })

};

const getAll = (req, res) => {
    res.status(200).json({
        data:students,
    });
};

const getById =(req, res) => { //:id是一个动态路由参数，传入的值会对因为id的值，可以被params对象使用
    const studentsId = req.params.id;
    // res.json({studentsId:studentsId});//简写是res.json({studentsId});
    const student = students.find((s)=>s.id === parseInt(studentsId,10));
    if(!student){
        res.status(404).json({
            error:`student with id ${studentsId} is not found`
        })
        return;
    };
    res.json({
        data:student,
    });

}

const replace =(req, res) => {
    const id = parseInt(req.params.id);
    const foundStudent = students.find((stu)=>stu.id === id);
    if(!foundStudent){
        throw new NotFoundError('');
    }
    const {firstName,lastName}= req.body;

    if (!firstName || !lastName) {
        res.status(400).json({
          error: 'firstName and lastName required',
        });
      }

    foundStudent.firstName = firstName;
    foundStudent.lastName = lastName;
    res.json({data:foundStudent});
}

const update = (req, res) => {
    const id = parseInt(req.params.id);
    const foundStudent = students.find((stu)=>stu.id === id);
    if(!foundStudent){
        res.status(404).send({
            error:`car with id ${id} not found`,
        });
        return;
    }
    const {firstName,lastName}= req.body;
    if(firstName) foundStudent.firstName = firstName;
    if(lastName) foundStudent.lastName = lastName;


    res.json({data:foundStudent});
}
// update some properties of a car
//  /patch这里上课讲的另一个方法//
// app.patch('/api/v2/students/:id', (req, res) => {
//     // 1 find the student
//     // const id = req.params.id;
//     const { id } = req.params;
//     const studentIdx = students.findIndex(
//       (student) => student.id === parseInt(id, 10)
//     );
  
//     // 1a no student - respond 404
//     if (studentIdx === -1) {
//       res.status(404).json({
//         error: `student with id ${id} not found`,
//       });
//       return;
//     }
  
//     // 2 get the new data from the request
//     // 3 update the data in memory
//     const { firstName, lastName } = req.body;
//     students[studentIdx] = {
//       ...students[studentIdx],
//       ...(firstName && { firstName }),//！！！spread时会覆盖已有的重复属性
//       ...(lastName && { lastName }),
//     };
  
//     // 4 respond accordingly
//     res.json({
//       data: students[studentIdx],
//     });
//   });

const deleteOne = (req, res) => {
    const studentId = parseInt(req.params.id);
  
    const studentIdx = students.findIndex(({ id }) => id === studentId);
  
    if (studentIdx < 0) {
      res.status(404).json({
        error: `student with id ${studentId} not found`,
      });
      return;
    }
    // const deletedStudent = students[studentIdx];
    const [deletedStudent] = students.splice(studentIdx, 1);
  
    res.json({
      data: deletedStudent,
    });
  }

module.exports = {
    create,
    getAll,
    getById,
    replace,
    update,
    deleteOne,
};