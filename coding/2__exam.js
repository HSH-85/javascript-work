let fs = require('fs');

let input = fs.readFileSync('./data/2_exam.txt')
            .toString().split('\n');
console.log(input);

const newInput=input[1].split("");

for(let i =newInput.length-1 ; i>=0 ; i--){
  console.log(input[0]*newInput[i]);
}

console.log(input[0]*input[1]);