/**
 *truthy------->
 *  1.true
 *  2.any (positive or negative) number is truthy other then 0
 *  3.any string other then empty string  is truthy 
 *  4 . '0'
 *  5. {}
 *  6. []
 * 
 * 
 *falsy------------------------------------->
 *  1. 0
 *  2. '' --->(empty  string)
 *  3.undefined
 *  4. null
 */
let  x= [12,34,45];
if(x){
    console.log('value of x is truthy');
}
else{
    console.log('value of x is falsy');
}


// optional 
// check falsy 
const y = 10;
if( !y){
    console.log('value is falsy');
}

const z= {name : 'hasib'};
if (!!z){
    console.log('value is truthy')
}
