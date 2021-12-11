/*
JavaScript

JavaScript is a high-level programming language
-One of the core technologies of the World Wide Web
-Enables interactive we pages and applications
-Can be executed on the server and on the client

Features
-C-like syntax (curly-brackets, identifiers, operator)
-Multi-paradigm (imperative, functional, OOP)
-Dynamic typing


Dynamic Programming Language

JavaScript is a dynamic programming language
-Operations otherwise done at compile-time can be done at run-time
It is possible to change the type of a variable or add new properties or methods
to an object while the program is running
In static programming languages, such changes are normally not possible


Node.js

What is Node.js
-Server-side JavaScript runtime
Chromium V8 manager
NPM (Node Package Manager)


Data Types

Seven data types that are primitives
-String
-Number
-Boolean
-Undefined
-Null
-BigInt - represent integers with arbitrary precision
-Symbol - Unique and immutable primitive value
Reference type - Object


Identifiers (names)

An identifier is a sequence of characters in the code that identifies a
variable, function or property
In JavaScript identifiers are case-sensitive and can contain
unicode letters, $, _ , and digits (0-9), but not start with a digits

let _name = "John"
function $sum(x, y){
    return x + y
}

Variable Values

Used to store data values
Variables that are assigned a non-primitive value are given a reference to
that value

Undefined 0 a variable that has been declared with a keyword, but not given a
value

let a;
console.log(a) // undefined

Undeclared - a variable that hasn't been declared at all

console.log(undeclaredVariable) // ReferenceError: undeclaredVariable is not defined

let, const and var are user to declare variables

let - allows reassignment

let name = "Maria"
name = "Teddy"

const - once assigned it cannot be modified

const a = "Maria"
a = 'Teddy' // TypeError

var - defines a variable in the function scope regardless ogf block scope

var name = "George"

Legacy Variable Declaration

You will see var used in old examples
Using var to declare variables is a legacy technique
Since ES2015 let and const are available
var introduces function scope hoisting
-Will be discussed later in the lesson
There is no good reason to ever use var!


Variable Scopes

Global scope - Any variable that's Not inside any function or block
(a pair of curly braces);

Functional scope - Variable declared inside a function is inside the local scope

Block scope - let and const declares block scoped variavles


Dynamic Typing

Variables in JavaScript are not directly associated (and re-assigned) values of all types

let foo = 42;
foo = 'bar';
foo = true
NOTE: The use of dynamic typing is considered a bad practice!


Functions (Declaring and Invoking)

Function - name list of instructions (statements and expressions)
Can take parameters and return result
-Function names and parameters use camel case
-The { stays at the same line

function printStars(count){
    console.log("*".repeat(count));
}

Invoke the function
printStars(10);

Declaring Functions

Function declaration
function walk(){
    console.log("walking");
}

Function expression
const walk = function(){
    console.log("walking")
}

Arrow functions
const walk = () => {
    console.log("walking")
}

Parameters and Returned Value

You can receive parameters with no value
The unused parameters are ignored

function foo (a,b,c){
    console.log(a);
    console.log(b);
    console.log(c);

}

function foo (a,b,c){
    console.log(a);
    console.log(b);
    console.log(c);

}

foo (1,2,3,4,5,6,7);




Functions can yield a value with the return operator

function identify(param){
    return param;
}
console.log(identify(5))


Object Methods and Standard library

Any object may have methods
-Functions that operate from the context of the object
-Accessed as a property using the dot-notation
let myString = "Hello, JavaScript"
console.log(myString.toLowerCase());
JavaScript has a large standard library
-Math, Number, Date, RegExp, JSON and more
-For more information, visit MDN


Default Function Parameter Value

Function can have default parameter value

function printStars(count=5){
    console.log('*'.repeat(count))
}

Comparison Operators

EQUAL value   ==
EQUAL value and type  ===
NOT EQUAL value  !=
NOT EQUAL value or type !==
GREATER than   >
GREATER than OR EQUAL  >=
LESS than   <
LESS than OR EQUAL <=


Logical Operators

&& (logical AND) -  returns the leftmost "false" value or the last truthy value, if all are true.
|| (logical OR) - returns the leftmost "true" value or the last falsy value, if all are false.
! (logical NOT) - Returns false if its single operand can be converted to true; otherwise, returns true
The "typeof" operator returns a string indicating the type of an operand
const val = 5;
console.log(typeof val); // number

Some Interesting Examples

Data Types
console.log(typeof NaN); //number
console.log(NaN === NaN); //false
console.log(typeof null); //object(legacy reasons)
console.log(new Array() == false); //true
console.log(0.1 + 0.2);              //0.30000000000000004
console.log((0.2*10+0.1*10)/10); //0.3

Truthy and Falsy values
const variable = []; //empty array
console.log(variable == false); //evaluates true
if (variable) { console.log('True!') }; //'True!'

Loops

The for / while loops work as in C++, C# and Java
Classical for-loop

for (let i=0; i<=5; i++){
    console.log(i)
}

JavaScript supports two more variants of the for-loop:
-for-of – used with arrays and iterators
-for-in – used with objects and associative arrays
-Both will be reviewed in upcoming lessons


Debugging Techniques

Strict Mode

Strict mode limits certain "sloppy" language features
-Silent errors will throw Exception instead

use strict'; // File-level
mistypeVariable = 17; //ReferenceError

function strict() {
    'use strict';
    mistypeVariable = 17;
}

Enabled by default in modules

Language Specifics
(Type Coercion, Functions and Scope)

First-class Functions

First-class functions – a function can be passed as an argument to other functions
Can be returned by another function and can be assigned as a value to a variable

function running(){
    return "Running";
}
function category(run, type) {
    console.log(run() + " " + type);
}
category(running, "sprint"); // Running sprint

Nested Functions

Functions can be nested - nested - hold other function
Inner functions have access to variables from their parent

function hypotenuse(m, n){ // outer func
    function square(num){  // inner func
        return num * num;
    }
    return Math.sqrt(square(m) + square(n)); // 3, 4 -> 5
}


Hosting

Variable and function declarations are put into memory during the compile
phase, but stay exactly where you typed them in your code
Only declarations are hoisted

Hoisting Variables

console.log(num); // Returns undefined
var num;
num = 6;

num = 6;
console.log(num); // returns 6
var num;

num = 6;
console.log(num); // ReferenceError: num is not defined
let num;

console.log(num); // ReferenceError: num is not defined
num = 6;

Hoisting Functions

run(); // running
function run() {
    console.log("running");
};

walk(); // ReferenceError: walk is not defined
let walk = function () {
    console.log("walking");
};

console.log(walk); //undefined
walk(); // TypeError: walk is not a function
var walk = function () {
    console.log("walking");
};
*/