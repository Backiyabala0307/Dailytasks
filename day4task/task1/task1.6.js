//return the median of two same length arrays using anonymous function
let a1=[1,2,3,4];
let a2=[10,12,14,16];
let c=a1.concat(a2);

let i = (c.length / 2) - 1;


let median= function(i){
    let c1=c.slice(i,-i);
    result=c1.reduceRight((a,b)=>a+b)/2;
    return result;
}
result=median(i);
console.log(result);


//return the median of two same length arrays using IIFE function
let a1 = [1, 2, 3, 4];
let a2 = [10, 12, 14, 16];
let c = a1.concat(a2);
let i = (c.length / 2) - 1;


(function (i) {
    let c1 = c.slice(i, -i);
    result = c1.reduceRight((a, b) => a + b) / 2;
    return result;
})(i);
console.log(result);