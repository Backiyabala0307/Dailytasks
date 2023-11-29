//return all the palindromes in an array using anonymous function
let a=["amma","appa","23","99"];
reverse_a=[];
result=[];

function reverse(x){
      
   reverse_a.push( x.split('').reverse().join(''));
}

let palindrome=function(x,y){ 
    

    if(x==y){
        result.push(x);
    }

}

for(let i in a){
    reverse(a[i]);
    palindrome(a[i],reverse_a[i]);
}

console.log(result);


//return all the palindromes in an array using IIFE function
let a=["amma","appa","23","99"];
reverse_a=[];
result=[];


function reverse(x){
      
   reverse_a.push( x.split('').reverse().join(''));
}

for(let i in a){
    reverse(a[i]);

    (function(x,y){
    

         if(x==y){
            result.push(x);
         }
    })(a[i],reverse_a[i]);

}

console.log(result);

