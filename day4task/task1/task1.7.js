//remove duplicates in an array using anonymous function
let a=[1,4,4,5,7,1,99,33,33];
let duplicate=[];

let find = function(){

 for(let i=0;i<=a.length-1;i++){
    
    for(let j=i+1;j<=a.length-1;j++){

        if(a[i]==a[j]){
         duplicate.push(a.splice(j,1));   
         } 
    }

}

} 
find();
console.log(a.filter(n=> !duplicate.includes(n)));


//remove duplicates in an array using IIFE function

let a = [1, 4, 4, 5, 7, 1, 99, 33, 33];
let duplicate = [];
( function(){

 for(let i=0;i<=a.length-1;i++){
    
    for(let j=i+1;j<=a.length-1;j++){

        if(a[i]==a[j]){
         duplicate.push(a.splice(j,1));   
         } 
    }

}

}) ();
console.log(a.filter(n=> !duplicate.includes(n)));