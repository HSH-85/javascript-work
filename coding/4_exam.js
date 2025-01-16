let fs = require('fs');

let input = fs.readFileSync('./data/4_exam.txt')
            .toString().split('\n');
console.log(input);

let arr = input[1].split(' ').map(Number);
let max=arr[0];
let min=arr[0];

for(let i = 0;i<input[0];i++){
  
  if(arr[i]<min){
    min=arr[i];
  }
  if(arr[i]>max){
    max=arr[i];
  }
}
console.log(`${min}, ${max}`);
