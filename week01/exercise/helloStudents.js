const students = require('./students.json');

function say(message){
    console.log(message);
}

students.forEach(item => say(`hello ${item.firstName} ${item.lastName}`));
console.log("\n");


let targetStudents = students.filter(({lastName})=>lastName.startsWith("D"));//expression自动return，{}需要显示return否则undefined
say(`Count of last names starting with D is ${targetStudents.length}`);
console.log("\n");


let emails = students.map(({firstName})=>firstName.toLowerCase()+'@algonquincollege.com');
say(emails);


