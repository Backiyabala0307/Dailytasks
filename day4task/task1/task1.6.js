//return the median of two same length arrays using anonymous function
let array1=[1,2,3,4];
let array2=[10,12,14,16];
let Array=array1.concat(array2);

let Length= (Array.length / 2) - 1;


let median= function(item){
    let Array1=Array.slice(item,-item);
    return result=Array1.reduceRight((a,b)=>a+b)/2;
   
}

console.log(median(Length));


//return the median of two same length arrays using IIFE function
let array1 = [1, 2, 3, 4];
let array2 = [10, 12, 14, 16];
let Array = array1.concat(array2);

let Length = (Array.length / 2) - 1;
let result;

(function (item) {
    let Array1 = Array.slice(item, -item);
    return result = Array1.reduceRight((a, b) => a + b) / 2;

})((Length));

console.log(result);