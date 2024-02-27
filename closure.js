function watch(){
    let count = 0;
    return function(){
        count++;
        return count;
    }
}
const result = watch();
console.log(result());
console.log(result());
console.log(result());


// second ------------------------------------>
function kitchen(){
    let roast = 0;
    return function(){
        roast++;
        return roast;
    }
}

const firstServer= kitchen();
console.log(firstServer());
console.log(firstServer());
console.log(firstServer());
console.log(firstServer());
console.log(firstServer());



