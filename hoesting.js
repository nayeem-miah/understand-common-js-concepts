// 

print5();
console.log(print10);


for ( let i = 0; i< 10; i++){
    // console.log(i);
}
// console.log('outside result is :',i);  ----->i is not defined


function print5(){
    console.log('inside print5',5);
}

var print10= function (){
    console.log('inside print10',10);
}
// print10();