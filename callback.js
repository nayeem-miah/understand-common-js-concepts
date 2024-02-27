function greeting (greetingHandler,name){
    greetingHandler(name);
    
}
// const name= 'halim mama';
// const numbers = [34,44, 56, 54,36];
// const laptop= {
//     name:'lenovo',
//     price: 540003
// };
function greetingNight(name){
    console.log('good night', name);
}

function greetingEvening(name){
    console.log('good evening', name);
}

function greetingHandler(name){
    console.log('assalamulaikum ', name);
}
// console.log(laptop);
greeting(greetingHandler, 'tom hanks');
greeting(greetingHandler,'HEat Mayrs');
greeting(greetingHandler, 'muhammed');
greeting(greetingEvening,'hello everyone');
greeting(greetingEvening,'namaz porsen');
greeting(greetingEvening,'kawa dawa hoise');


greeting(greetingNight, 'ase ase vhai tumera koi aso ans dew na kn re vhai');
