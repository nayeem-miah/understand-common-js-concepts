/**
 * 8 ways to get undefine 
 * 1.variable is not initialized will give undefine
 * 2. function with no return .
 * 3.parameter that is not passed will be undefine
 * 4. if return has nothing on the right side will return undefine
 * 5.property that doesn't exists on an objects will give undefine
 * 6. accessing array element outside of the index range will give you undefine 
 * 7.deleting an element inside an array 
 * 8.set a value directly to undefine
 */

// 1
let num ;
// console.log(num);

// 2
function sum ( a, b){
    const total = a+b;
    
}
const result = sum();
console.log(result);

// 3.
function add(a,b,c,d){
    const result = a+b+c+d;
    console.log(result);
}
const result1= add(5,6); 
console.log(result1);


// 4
function noNegative(a,b){
    if(a<0 || b<0){
        return;
    }
    return a+b;
}
const total = noNegative(4,-5);
console.log(total);

// 5.
const fifth={
    name: 'nayeem', age : 23,
}
console.log(fifth.name,fifth.salary);


// 6 
const Number= [10,234,45,56,78];
// 7 ---> you should n't do it .instead use splice 
delete Number[1];
console.log(Number[0], Number[6],Number[200]);
console.log(Number);

// 8--->
const eight = undefined;
console.log(eight);
const nine =null;
console.log(nine);



const date = {results : [],updated : null}
console.log(typeof undefined);


console.log(typeof null);