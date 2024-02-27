//  always use ===
// equal comparison doesn't work for non-primitive 

// (===)----> check value and type of check
// (==)  -----> check value 
// type coercion 


const first = [12,34];
const second = [12,34];
if( first === second){
    console.log('values are equal');
}
else{
    console.log('values are not equal');
}

// console.log(true + 1);