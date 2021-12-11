/*
Execution Context
(Global, Methods, Events, Arrow Functions)

The function context is the object that owns the currently executed code
Function context === this object
Depends on how the function is invoked
-Global invoke func()
-Object method: object.function()
-DOM Event: element.addEventListener()
-Using call()/ apply()/ bind()


Inner Method Context

this variable is accessible only by the outer method

const obj = {
    name: 'Peter',
    outer() {
        console.log(this); // Object {name: 'Peter'}
        function inner(){
            console.log(this);
        }
    }
}

obj.outer(); // Window

Arrow Function Context

this retains the value of the enclosing lexical context

const obj = {
    name: 'Peter',
    outer() {
        console.log(this); // Object {name: 'Peter'}
        const inner = () => console.log(this);
    }
}

obj.outer(); // Object {name: 'Peter'}

Explicit Binding

Occurs when call(), apply() or bind() are used on function
Forces a function call to use a particular object for this binding

function great(){
    console.log(this.name)
}

let person = { name: 'Alex' };
great.call(person, arg1, arg2, arg3, ...); // Alex


Changing the Context: Call

Calls a function with a given this value and arguments provided individually

const sharePersonalInfo = function (...activities) {
    let info = `Hello, my name is ${this.name} and` + +`I'm a ${this.profession}.\n`;
    info += activities.reduce((acc, curr) => {
        let el = `--- ${curr}\n`;
        return acc + el;
    }, "My hobbies are:\n").trim();
    return info;
}

const firstPerson = {name: "Peter", profession: "Fisherman"};
console.log(sharePersonalInfo.call(firstPerson, 'biking', 'swimming', 'football'));
// Hello, my name is Peter.
// I'm a Fisherman.
// My hobbies are:
// --- biking
// --- swimming
// --- football


Changing the Context: Apply

Calls a function with a given this value and arguments provided as an array
apply() accepts a single array of arguments while call() accepts an argument list
If the first argument is undefined or null a similar outcome can be achieved using the array spread syntax

const firstPerson = {
    name: "Peter",
    prof: "Fisherman",
    shareInfo: function () {
        console.log(`${this.name} works as a ${this.prof}`);
    }
};
const secondPerson = {name: "George", prof: "Manager"};
firstPerson.shareInfo.apply(secondPerson);
// George works as a Manager


Changing the Context: Bind

The bind() method creates a new function
Has its this keyword set to the provided value
with a given sequence of arguments preceding any provided when the new
function is called
Calling the bound function generally results in the execution of its wrapped function

const x = 42;
const getX = function () {
    return this.x;
}
const module = {x, getX};
const unboundGetX = module.getX;
console.log(unboundGetX()); // undefined
const boundGetX = unboundGetX.bind(module);
console.log(boundGetX()); // 42


Object Methods as Browser Event Handlers

const person = {
  name: "Peter",
  respond() {
    alert(`${this.name} says hello!`);
  }
}
const boundRespond = person.respond.bind(person);
documet.getElementById('callBtn')
       .addEventListener('click', person.respond);
documet.getElementById('callBtn')
       .addEventListener('click', boundRespond);


Functional Programming in JS
(First Class, Higher-Order, Pure Functions)

First-Class Functions
First-class function are treated like any other variable
-Passed as an argument
-Returned by another function
-Assigned as a value to a variable

----------------------------------------------------------------------------------------------------
The term "first-class" means that something is just a value. A first-class function is one that can go anywhere that any other value can go - there are few to no restrictions.
Michael Fogus, Functional Javascript
----------------------------------------------------------------------------------------------------------

Can be passed as an argument to another function

function sayHello(){
    return 'Hell0, '
}

function greeting(helloMessage, name){
    return helloMessage() + name;
}

console.log(greeting(sayHello, 'JavaScript!')) // Hello, JavaScript!

Can be returned by another function
-We can do that because we treated functions in JavaScript as a value

function sayHello(){
    return function(){
        console.log('Hello!');
    }
}

Can be assigned as a value to a variable

const write = function(){
    return 'Hello, world!';
}

console.log(write()); // Hello, world!


Higher-Order Functions

Take other functions as an argument or return a function as a result

const sayHello = function() {
    return function(){
        console.log("Hello!");
    }
}

const myFunc = sayHello()
myFunc(); // Hello!


Predicates

Any function that returns a bool based on evaluation of the truth of an assertion
Predicates are often found in the form of callbacks

let found = array1.find(isFound) // isFound == predicate

function isFound(element){
    return element > 10; // True or false
}

console.log(found); // 12


Built-in Higher Order Function

Array.prototype.map
Array.prototype.filter
Array.prototype.reduce
and more

users = [ { name: 'Tim', age: 25 },
          { name: 'Sam', age: 30 },
          { name: 'Bill', age: 20 } ];

getName = (user) => user.name;
usernames = users.map(getName);
console.log(usernames) // ["Tim", "Sam", "Bill"]


Pure Functions

Returns the same result given same parameters
Execution is independent of the state of the system

// impure function:
let number = 1;
const increment = () => number += 1;
increment(); // 2

// pure function:
const increment = n => n + 1;
increment(1); // 2


Referential Transparency

An expression that can be replaced with its corresponding value
without changing the program's behavior
Expression is pure and its evaluation must have no side effects

function add(a, b) { return a + b };
function mult(a, b) { return a * b };
let x = add(2, mult(3, 4))
// mult(3, 4) can be replaced with 12


Closure
(Inner Function State)

One of the most important features in JavaScript
The scope of an inner function includes the scope of the outer function
An inner function retains variable being used from the outer function scope even after the
parent function has returned

Function Returning Function

A state is preserved in the outer function(closure)

const f = (function() {
    let counter = 0;
    return function (){
        console.log(++counter);
    }
});

f() // 1
f() // 2
f() // 3
f() // 4


Function Decoration
(Partial Application and Currying)

Partial Application

Set some of the arguments of a function, without executing it
Pass the remaining arguments when a result is needed
The partially applied function can be used multiple times

f = (x, y) => x + y  =====> g = (x) => f(1, x)

It will retain all fixed arguments regardless of context

Math.pow(x, y) ======> sqr = (x) => Math.pow(x, 2)


Currying

Currying is a technique for function decomposition

function sum(a){
    return (b) => {
        return (c) => {
            return a + b + c;
        }
    }
}

console.log(sum(5)(6)(8)); // 19

Supply arguments one at a time instead of at once
-They may come from different sources
-Execution can be delayed until it's needed

Function Composition - Building new function from old function by passing arguments
Memoization - Functions that are called repeatedly with the same set of inputs
but whose result is relatively expensive to produce
Handle Errors - Throwing functions and exiting immediately after an error


Currying vs Partial Application

Currying always produces nested unary functions
Partial application produces functions of arbitrary number of arguments
Currying is NOT partial application
-It can be implemented using partial application
*/
