let {arrayCars, arrayNumbers} = require("./data.js")

let {sortArray, sortNumbers} = require("./function.js")

const sortedArray= sortArray(arrayCars);
console.log(sortedArray);

const sortedNumbers= sortNumbers(arrayNumbers);
console.log(sortedNumbers);