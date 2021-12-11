/*
Objects in JavaScript

An object is a collection of fields called properties
A property is an association between a name (or key) and a value
Objects are a reference data type
In JavaScript they are created with an object literal

const person = {
    firstName: "John",
    lastName: "Doe",
    age: 50
};


Object Properties

A property of an object can be explained as a variable that is attached
to the object
Object properties are the same as ordinary variables, and can hold any
data type and be reassigned

Property Name |  Property Value
---------------------------------
firstName     | John
lastName      | Doe
age           | 50


Assigning and Accessing Properties

Simple dot-notation
const person = {name : "Peter"};
console.log(person.name); // Peter

Bracket-notation (indexing operator)
-Required if the key contains a special character
person['job-title'] = 'Trainer';
console.log(person['job-title']) // Trainer
console.log(person.job-title)  // ReferenceError

Brackets can be used with keys as string variables

Properties can be added during run-time
const person = {name: 'Peter'};
person.age = 21; // {name: 'Peter', age: 21}
console.log(person.age) // 21

Unassigned properties of an object are undefined
console.log(person.lastName) // undefined


Destructuring Syntax

Dive into an object and extract properties by name
Can be used to get multiple property values

const department = {
    name: 'Engineering',
    director: 'Ted Thompson',
    employeeCount: 25
};

const {name, employeeCount} = department;
console.log(name, employeeCount); // Engineering 25


Deleting Properties

const person = {
    name: 'Peter',
    age: 21,
    ['job-title']: 'Trainer'
};

delete person.age

console.log(person.age) // undefined


Object References

Variable holding reference data types contain the memory address (reference)
of the data
Copies of the reference point to the same data

let x = {
    name: 'John',
}
let y = x;

y.name = 'Steve'
console.log(x.name); // Steve


Comparing Objects

Two variables, two distinct objects with the same properties

const fruit = {name: 'apple'};
const fruitBear = {name: 'apple'};

fruit == fruitBear // false
fruit === fruitBear // false

Two variables a single object
const fruit = {name: 'apple'};
const fruitBear = fruit

fruit == fruitBear // true
fruit === fruitBear // true


Objects as Associative Arrays
(Property Lookup and Iteration)

Associative Arrays

Objects can serve the role of associative arrays in JavaScript
The key (property names) are string indexes
Values are associated to a key
All values should be of the same type

For ... in Loop

for ...in - iterates over all enumerable properties

const obj = {a: 1, b: 1, c: 3}
for(const key in obj){
    console.log(`obj.${key} = ${obj[key]}`);
}

// obj.a = 1
...
...


Object an array of all keys or values in an object:

const phonebook = {
    'Tim': '555-111',
    'Bill': '555-333',
    'Peter': '555-777'
}

const keys = Object.keys(phonebook);
console.log(keys)
['Tim', 'Bill', 'Peter']

const values = Object.values(phonebook);
console.log(values)
// ['555-111', '555-333', '555-777']


Object Entries

Get an array of tuples (array of two element), representing each key and value pair
- First tuple element is the key the second is the value

const entries = Object.entries(phonebook)
console.log(entries)
// [['Tim', 555-111], ['Bill', '555-333'], ['Peter', 555-777]]

This method is often used if we want to sort the contents


Methods and Context
(Combine Data with Behavior)

Object Methods

Object can also have methods
Methods are actions that can be performed on objects
Methods are stored in properties as function definitions

let person = {
    firstName: 'John',
    lastName: 'Doe',
    age: function(myAge){
        return `My age is ${myAge}!`
    }
};
console.log(person.age(21)); // My age is 21!


Objects are Function Libraries

Related functions may be grouped in an object
THe object serves as a function library
-Similar to built-in libraries like Math, Object, Number, etc.

//sorting helper
const compareNumbers = {
    ascending: (a,b) => a-b;
    descending: (a, b) => b - a;
};

This technique is often used to expose public API in a module

Objects as switch replacement

You will almost never see switch used in JS code
Named methods are used instead

let count = 5;
switch (command){
    case 'increment':
        count ++;
        break;
    case 'decrement':
        count --;
        break:
    case 'reset':
        count = 0;
        break;
}

Is shorter syntax for object methods:
let count = 5;
const parser = {
    increment() {count++;},
    decrement() {count--;},
    reset() {count = 0;}
}
parser[command]();


Accessing Object Context

Functions in JavaScript have execution context
-Accessed with keyword this
-When executed as an object method the context is a reference to the parent object

const person = {
    firstName: 'Peter',
    lastName: 'Johnson',
    fullName(){
        return this.firstName + ' ' + this.lastName;
    }
};
console.log(person.fullName()); // Peter Johnson

Function Execution Context

Execution context can be changed at runtime
If a function is executed outside of its parent object it will no longer have access
to the object's content

const getFullName = person.fullName;
console.log(getFullName()); // undefined undefined

const anotherPerson = {
    firstName: 'Bob',
    lastName: 'Smith'
};

anotherPerson.fullName = getFullName;
console.log(anotherPerson.fullName()); // Bob Smith


Object Composition
(Creating Complex Objects from Simple Pieces)

Composition

Combining simple objects into more complex ones

let student = {
    firstName: 'Maria',
    lastName: 'Lopez',
    age: 22,
    location: {
        lat: 42.698, lng: 23.32
    }
}

console.log(student);
console.log(student.location.lat)

Composition is a powerful technique for code reuse
It can be considered superior to OOP inheritance

Composing Objects
(Combine variables into object)

let name = "Sofia";
let population = 1325744;
let country = 'Bulgaria'
let town = {name, population, country}

console.log(town);
// Object {name: 'Sofia', population: 1325744, country: 'Bulgaria'}

town.location = {lat: 42.698, lng: 23.322}
console.log(town); // Object {..., location: Obj etc}


Nested Destructuring

Destructuring can work beyond the top level

const department = {
    name: 'Engineering',
    data: {
        director:{
            name: 'John',
            position: 'Engineering Director'
        },
        employees: [],
        company: 'Quick Build'
    }
};

const {data: {director}} department;
// director is {name: 'John', position: 'Engineering Director'}


Object and Array Destructuring

const employees = [
    {name: 'John', position: 'worker'}, // first element
    {name: 'Jane', position: 'secretary'}
];

const [{name}] = employees; // name of first element is 'John'

const company = {
    employees: ['John', 'Jane', 'Sam', 'Suzanne'],
    name: 'Quick Build',
};
const {employees: [empName]} = company; // empName is 'John'


Composing Objects with Behavior

We can compose behavior at run-time and reuse functionality
Describe objects in terms of what they do, not what they are
This solves a deeply rooted problem with OOP inheritance

          Impossible
      |----[Device]----|
      |                |
   [Printer]        [Scanner]
      |                |
      |---->[Copier]<--|


         Easy and Practical
       [Can print]   [Can scan]
            |            |
            |            |
      |-----|-----|  |---|---|
      |           |  |       |
 [Printer]     [Copier]    [Scanner]


Composing Objects with Behavior

function print() {
  console.log(`${this.name} is printing a page`);
}
function scan() {
  console.log(`${this.name} is scanning a document`);
}
const printer = { name: 'ACME Printer', print };
const scanner = { name: 'Initech Scanner', scan };
const copier = { name: 'ComTron Copier', print, scan };


Factory Functions

Functions that compose and return objects

function createRect(width, height){
    const rect = {width, height};
    rect.getArea = () => {
        return rect.width * rect.height;
    };
    return rect;
}

Creating objects with factory functions can avoid the
pitfalls of using this


Decorator Functions

Functions that add new data and behavior to objects

function canPrint(device){
    device.print = () => {
        console.log(`${device.name} is printing a page`);
    }
}

const printer = {name: 'ACME Printer'};
canPrint(printer)
printer.print();
// ACME Printer is printing a page

The object reference is embedded - using this is not required


JSON
(JavaScript Object Notation)

It's a data interchange format
It's language independent - syntax is like JavaScript object syntax, but the JSON
format is text only
Is self-describing and easy to understand

{
    "employees": [
        {"firstName": "John", "lastName": "Doe"},
        {"firstName": "Anna", "LastName": "Smith"}
    ]
}


Syntax Rules

In JSON:
-Data is in names/value pairs
-Data is separated by commas
-Curly braces hold objects
-Square brackets hold arrays
-JSON only takes double quotes ""

{
    "employees": [ { "firstName": "John", "lastName": "Doe" } ]
}


Parsing from String

A common use of JSON is to read data from a web server and display the data
on a web page
Use tha JavaScript built-in function JSON.parse() to convert the JSON format
into a JavaScript object

let data = {"manager": [{"firstName": "John", "lastName": "Doe"}]}
let obj = JSON.parse(data)
console.log(obj.manager.lastName) // Doe


Converting to String

Use Json.stringify() to concert objects into a string:

let obj = {name: "John", age: 30, city: "New York"};
let myJSON = JSON.stringify(obj);
console.log(myJSON) // {"name": "John", "age": 30, "city": "New York"}

You can do the same for arrays:

let arr = ["John", "Peter", "Sally", "Jane"];
let myJSON = JSON.stringify(arr)
console.log(myJSON); // ["John", "Peter", "Sally", "Jane"]

Format the string with indentation for readability

let myJSON = JSON.stringify(arr, null, 2);
*/


