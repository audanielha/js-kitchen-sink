// My Name
var name = "Daniel";

// Number of States in US
const numOfStates = 50;

// Result of 5 + 4
let total = 5 + 4;

// Functions that called 'Hello World'
function helloWorld(){
    alert("Hello World!")
}
helloWorld()
// Check Age Function

function checkAge(name, age){
    if(age < 21){
        return alert("Sorry " + name + ", you aren't old enough to view this page!")
    }
}
checkAge("Charles", 21)
checkAge("Abby", 27)
checkAge("James", 18)
checkAge("John", 18)


let favVegetables = ["brocolli", "Tomatoes", "Cucumber"];

for(var i = 0; i < favVegetables.length; i++){
    console.log(favVegetables[i])
}

let objects = [
    {
        name:"Charlie",
        breed: "Jack Russel",
    },
    {
        name: "Connie",
        age: "34"
    },
    {
        name: "Amelia",
        age: "4"
    },
    {
        name: "Jenny",
        age: "30"
    },
    {
        name: "Ethan",
        age: "2"
    }
]

for(let i = 0; i < objects.length; i++){
   checkAge(objects[i].name, objects[i].age)
}

function getLength(x){
    console.log(x.length)
    if(x.length %2){
        console.log("The world is an odd place!")
     }else{
        console.log("The world is nice and even!")
     }
}
getLength("Hello World")