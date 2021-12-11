/*
Unit Testing and Error Handling
(Error Types, Modules, Unit Testing, Mocha & Chai)

Error Handling
(Concepts, Examples, Exceptions)

The fundamental principle of error handling says that a function (method)
should either:
-Do what its name suggests
-Indicate a problem
-Any other behavior is incorrect

A function failed to do what its name suggest should:
-Return a special value(e.g. undefined/false/-1)
-Throw an exception / error
-Exceptions are the object-oriented way for errors

let str = "Hello, SoftUni";
console.log(str.indexOf("Sofia")) // -1
//Special case returns a special value to indicate "Not found"


Types of Errors

There are three types of errors in programing:
-Syntax Error - during parsing
-Runtime Error - occur during execution
    -After compilation when the application is running
-Logical Errors - occur when a mistake has been made in the logic of the script
    and the expected result is incorrect
    - Also known as bugs

Exception - a function is unable to do its work (fatal error)

let arr = new Array(-1) // Uncaught RangeError
let bigArr = new Array(9999999999) // RangeError
let index = undefined.indexOf("hi") // TypeError
console.log(George) // Uncaught ReferenceError
console.print('hi') // Uncaught Error


let sqrt = Math.sqrt(-1) // NaN (special value)

let sub = "hello".substring(2, 1000); // llo
let sub = "hello".substring(-100, 100) // hello
// soft error - substring still does its job: takes all available chars

let invalid = new Date("Christmas") // Invalid Date
let date = invalid.getDate(); // NaN


Throwing Errors
(Exceptions)

The throw statement lets you create custom errors
-General Error - throw new Error("Invalid state")
-Range Error - throw new RangeError("Invalid index")
-Type Error - throw new TypeError("String expected")
-Reference Error - throw new ReferenceError("Missing age")

throw new Error("Required")
// generates an error object with the message


Try - Catch

The try statement tests a block of code for errors
The catch statement handles the error
Try and catch come in pairs

try{
    //Code that can throw an exception
    //Some other code - not executed in case of error!

}catch{
    //This code is executed in case of exception
    //Ex holds the info about the exception
}


Exception Properties

An Error object with properties is created

try{
    throw new RangeError("Invalid range")
    console.log("This will not be executed")
}catch(ex){
    console.log("Exception object: '' + ex)
    console.log("Type" + ex.name)
    console.log("Message: " + ex.message)
    console.log("Stack: " + ex.stack)
}


Unit Testing
(Definition Structure Examples Frameworks)

A unit test is a piece of code that checks whether certain functionality works as expected
Allows developers to see where & why errors occur

function sortNum(arr){
    arr.sort((a, b) => a - b);
}

let nums = [2, 15, -2, 4]
sortNums(nums)

if(JSON.stringify(nums) === "[-2,2,4,15]"){
    console.log("There are equal");
}


Testing enables the following:
-Easier maintenance of the code base
    - Bugs are found ASAP
-Faster development
    -The so called "Test-drive development"
    -Test before code
-Automated way to find code wrongness
    -If most of the features have tests running them shows their correctness


Unit Tests Structure

The AAA Pattern: Arrange, Act, Assert

//Arrange all necessary preconditions and inputs
let nums = [2, 15, -2, 4];

//Act on the object or method under test
sortNums(nums);

//Assert that the obtained result are what we expect
if(JSON.stringify(nums) === "[-2,2,4,15]"){
    console.error("They are equal")
}


Unit Testing Frameworks

JS Unit Testing:
-Mocha, QUnit, Unit.js, Jasmine, Jest(All in one)

Assertion frameworks(perform checks):
-Chai, Assert.js, Should.js
Mocking frameworks(mocks and stubs):
-Sinon, Jmock, Mockito, Moq


Modules
(Definition, Import, Export)

A set of functions to be included in applications
Group related behavior
Resolve naming collisions
-http.get(url) and students.get()
Expose only public behavior
-They do not populate the global scope with unnecessary objects

const loading = {
    show(){}.
    hide(){}
}


Node.js Modules

require() is used to import modules

const = http = require('http')
// For NPM packages

const myModule = require('./myModule.js')
// For internal modules

Internal modules need to be exported before being required
In Node.js each file has its own scope

Whatever value has module.exports will be the value when using require

const myModule = () => {....};

module.exports = myModule:

To export more than one function the value of module.exports will be an object


module.exports = {
    toCamelCase: convertToCamelCase,
    toLowerCase: convertToLowerCase
};


Unit Testing with Mocha and Chai
(Installation, Configuration, Approaches)

Mocha?

Feature-rich JS test framework
Provides common testing functions including it, describe and the main function that runs test

describe("title", function(){
    it("title", function(){
        ....
    });
});

Usually used together with Chai


Chai?

A library with many assertions
Allows the usage of a lot of different assertions such as assert.equal

let assert = required("chai").assert;
describe("pow", function(){
    it("2 raised to power 3 is 8", function(){
        assert.equal(pow(2, 3), 8)
    });
});


To install frameworks and libraries use the CMD
-Installing Mocha and Chai through npm

npm init -y        |           npm init - y
npm install chai   | ---->     npm i chai mocha
npm install mocha  |

Usage and Examples

To load a library we need to require it

const expect - require("chai").expect;

describe("Test group #1", function(){
    it("should... when..", function(){
    expect(actual).to.be.equal(expected)
    });
    it("should... when..", function(){
        .....
    });
});

describe("Test group #2", function(){
    it("should... when...", function(){
        expect(actual).to.be.equal(expected);
    });
});


Unit Test Approaches

Code First (code and test) approach
-Classical approach
Test First approach
-Test-driven development(TDD)

The Code and Test Approach

Write code
    |
    |
Write unit test
    |
    |
Run and succeed


The Test-Driven Development Approach

Add Tests ---> See Test Fail ---> Write Code ---> Run Test ---> Refactor --> |
    |                                                                        |
    |<------<------<-----<-----<----<------<----<-----<-----<-----<----<-----|
It is like a curricle


        Create a test list           |
 | ------> Pick a test               |
 |          Write test               |
 |        Compile and fail           |
 |   Write enough code to compile    |
 |        Run test and fail          |
 |       Write code to pass test     |
 |------- Remove duplication         |  Time flow


Why TDD?

TDD helps find design issues early
-Avoids reworking
Writing code to satisfy a test is a focused activity
-Less chance of error
Tests will be more comprehensive that if they are written after the code
*/
