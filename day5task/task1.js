

let jsonstr = '{"author":"sathish","pages":300,"price":2000,"isAvailable":true,"title":"dsa"}';

let jso = JSON.parse(jsonstr);

let jsarray = Object.entries(jso);
//for loop
for (let i in jsarray) {
    console.log(jsarray[i]);
}

//for in loop
 for(let index in jsarray){
    console.log(index,jsarray[index]);
 }


//for of loop
for(let value of jsarray){
    console.log(value);
}

//forEach loop
 jsarray.forEach(print);

 function print(values,keys,entries){
   console.log(keys,values);
 }



