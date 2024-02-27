// primitive type are passed by value
let num1 = 5;
let num2= 4;
function multiply (a, b){
    a= 20;
    const result = a * b;
    return result;
}
// console.log(num1);
const output = multiply(num1, num2);
console.log(num1);
console.log(output);


//  objects and array passed by reference 
const student1= {name: 'Rayhan', partner: 'koli'};
const student2= { name : 'raj', partner: 'min  '};
function movies (couple1, couple2){
    student1.name= 'jalal';
    student2.partner= 'salma';

}
// console.log(student1, student2);
movies(student1,student2);
// console.log(student1, student2);
