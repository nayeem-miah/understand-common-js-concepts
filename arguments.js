//  array like objects 
function sum( a,b,c){
    // console.log(typeof arguments);
    const args = [...arguments];
    // console.log(args);

    const result = a + b + c;
    return result;

}
// console.log(arguments);
const total = sum(12,3,5,34,56,78,89);
// console.log(total);
console.log(sum.length);