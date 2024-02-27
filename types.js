// strongly type language 

// int a = 5;
// string b= 'alim halim ';
// bool c= True;
// Object student  = {name : 'noya daman', age : 30};
// int [] Number = [10,29,34];
// string [] friends = ['nayeem','sayeem'];


// javaScript dynamic type language :
// 1.primitive type
const a= 5;
const b= 'this a simple';
const c= true;
//  non-primitive type
const d ={
    name : 'nayeem',
    age : 20
}
const array = [10,4, ,56 ,57];
// console.log(typeof a, typeof b , typeof c, typeof d ,Array.isArray(array));

let x= 5;
let y= x;
console.log(x,y);
y=7;
console.log(x,y);

let p = { job : 'web developer'};
let q= p;
console.log(p,q);
// q={job : 'backend end'};
// console.log(p,q);
q.job= 'font end developer';
console.log(p,q);


