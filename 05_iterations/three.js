//for of is a modern JavaScript loop used to iterate over the values of an iterable (arrays, strings, maps, sets, etc.)

// //const numbers = [1, 2, 3, 4, 5];
// const string = "hello world";

// for (const char of string){
//     if (char === " "){
//         break;//
//         //continue; //skip the space character
//     }
//     console.log(char);
//}

// //maps obj holds unique key-value pairs and can be iterated over using for of loop
//map=var, Map-fn
const map = new Map();
map.set("IN", "India");
map.set("US", "United States");
map.set("UK", "United Kingdom");
map.set("IN", "India");//dont repeat keys, it will overwrite the previous value


// console.log(map);

// for (const [key, value] of map) {//destructuring the key-value pair
//     console.log(key, ":-", value);
// }

const myobject = {
    game1 : "cricket",
    game2 : "football",
    game3 : "hockey"
};
// for (const [key, value] of myobject) {//this will throw an error because objects are not iterable
// }

for (const key in myobject) {//for in loop is used to iterate over the keys of an object
    //console.log(`${key} shortcut is for ${myobject[key]}`);
}

const coding = ["javascript", "python", "java", "c++", "c#", "php", "ruby"];
coding.forEach((item) => {
    console.log(item);
});