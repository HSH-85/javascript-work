let fs = require('fs');

let input = fs.readFileSync('./data/5_exam.txt')
            .toString().split('\n');
console.log(input);


let max=input[0]
let maxIndex=0;

for(let i =0;i<input.length;i++){
  if(max<input[i]){
    max=input[i];
    maxIndex=i+1;
  }
}
console.log(max);
console.log(maxIndex);
