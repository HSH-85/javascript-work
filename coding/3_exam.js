let fs = require('fs');

let input = fs.readFileSync('./data/3_exam.txt')
            .toString().split('\n');
console.log(input);

let score = input[0];

switch (parseInt(score/10)) {
  case 10:
    console.log('A');
    break;
  case 9:
    console.log('A');    
    break;
  case 8:
    console.log('B');    
    break;
  case 7:
    console.log('C');    
    break;
  case 6:
    console.log('D');    
    break;
  default:
    console.log('F');    
    break;
}