function add(a,b){
    const total = a+b;
    if(a>5){
        const sum = 10+a+b;
    }
    else{
        const sum = 5+ a+b;
        var current = sum;
    }
    console.log(current);
}
// const result =add(a,b); ------> a is local variable a is not define;   block scope
// console.log(sum); ------->  sum is local variable sum is not define;   block scope
const result =add(4,3);
// console.log(result);
