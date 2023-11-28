//compare two JS objects

let obj1 = { name: "person1", age: 5 };

let obj2 = { age: 5, name: "person1" };

let json1 = '{"name":"person1","age":5}';
let json2 = '{"age":5,"name":"person1"}';

let jso1 = JSON.parse(json1);
let jso2 = JSON.parse(json2);

if ((Object.keys(jso1) == Object.keys(jso2))
    && (Object.values(jso1 == Object.values(jso2)))){
    console.log("The given two objects are equal");
    
}
else {
    console.log("The given two objects are not equal");
}