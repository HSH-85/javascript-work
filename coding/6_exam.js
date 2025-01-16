let fs = require('fs');

let input = fs.readFileSync('./data/6_exam.txt')
            .toString().split('\n');

let array=[];
let avr;
let aver=[];

array = input.split(' ').map(Number);

for (let i = 1; i < input.length; i++) {
    for (let j = 1; j < array.length; j++){
      avr = avr +array[j];
    }
    aver[i]=avr/array[i][0];
}
console.log(aver[1])