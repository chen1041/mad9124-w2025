"use strict";
const lodash = require("lodash");
let students = require("./students.json");

console.log(lodash.startCase("jackie cheng"));
console.log(lodash.snakeCase("jackie Cheng"));
console.log(lodash.camelCase("jackie_Cheng"));

console.log(students);
console.log(lodash.reverse(students));
console.log(lodash.groupBy(students));