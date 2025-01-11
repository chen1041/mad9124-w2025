function say(mes){
    console.log(mes);
};

say("hell world");

const students = require('./students.json');

students.forEach(item => say(`hello ${item.firstName}`));
console.log("-----------")

// for(const student of students){
//     say(`Hello ${student.firstName}`);
// }
// console.log("-----------")


//destructuring assignment
students.forEach(({firstName})=>{say(`hello ${firstName}`)});

const targetStudent = students.find(student=>student.id ===3);
console.log(targetStudent);

const targetStudents = students.filter(student=>student.id<3);
console.log(targetStudents);