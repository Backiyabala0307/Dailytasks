//remove duplicates in an array using anonymous function
let array=[1,4,4,5,7,1,99,33,33,1];
let duplicate=[];

let find = function(){

 for(let i=0;i<array.length;i++){
    
    for(let j=i+1;j<array.length;j++){

        if(array[i]==array[j]){
             duplicate.push(array.splice(j,1));  
                
         } 
     }

    } return true;

} 
find();
console.log(array.filter(find));

//remove duplicates in an array using IIFE function

let array = [1, 4, 4, 5, 7, 1, 99, 33, 33,1];
let duplicate = [];
( function(){

 for(let i=0;i<=array.length-1;i++){
    
    for(let j=i+1;j<=array.length-1;j++){

        if(array[i]==array[j]){
          duplicate.push(array.splice(j,1));   
         } 
    }

    } 

}) ();
console.log(array.filter(n=> !duplicate.includes(n)));
