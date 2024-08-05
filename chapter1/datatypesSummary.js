//on the basis of how data is stored and accessed 
// 2 type primitive and non-primitive(reference type)

// primitive
//7 types: String, Number, Boolean, null(empty) , undefine(value not defined),symbol(used for making unique),Bigint

const score=100
const scoreValue=100.3 // decimal are treated same no float type

const isLoggedIn = false; // boolean
const outsideTemp= null; // empty 
let userEmail; // undefined // can be manually assigned too

const id=Symbol('123')
const anotherId= Symbol('123')
console.log(id)
console.log(anotherId)
console.log(id===anotherId)

const bigNumber=68**56
console.log(bigNumber)
console.log(typeof(bigNumber))
//Reference type
// array, object , function
const heros =["shaktiman","naageraj","spiderman"]

let myObj={
    name:"hitesh",
    age:22,
}
const myFunction =function(){
    console.log("hello world");
}

