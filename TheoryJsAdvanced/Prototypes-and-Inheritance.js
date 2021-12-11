/*
Internal Object Properties

Every object field has four properties:
- Enumerable - can access to all of them using a for .. in loop
    -Enumerable property are returned using Object.keys
-Configurable - can modify the behavior of the property
    -You can delete only configurable properties
-Writable - can modify their values and update a property just assigning a new value to it
-Value


Object's Non-enumerable Properties

They won't be in for...in iterations
They won't appear using Object.keys function
They are not serialized when using JSON.stringify

let ob = {a:1 b:2}
ob.c = 3
Object,defineProperty(ob, 'd', {value: 4, enumerable: false});
ob.d // 4
for (let key in ob) console.log(ob[key]); // 1 2 3
Object.keys(ob); // ['a', 'b', 'c']
ob; // [a: 1, b: 2, c: 3, d: 4]
ob.d // 4


Object's Non-writable Properties

Once its value is defined it is not possible to change it using assignments
let ob = {a: 1};
Object.defineProperty(ob, 'B', {value: 2, writable: false});
ob.B // 2
ob.B = 10;
ob.B // 2

If the non-writable property contains an object the reference to the object is what is not writable
but the object itself can be modified


Object's Non-configurable Properties

Once you have defined the property as non-configurable there is only one behavior you can change
-If the property is writable you can convert it to non=writable
-Any other try of definition update will fail throwing a TypeError

let ob = {};
Object.defineProperty(ob, 'a', {configurable: false, writable: true})
Object.defineProperty(ob, 'a', {enumerable: true}) // throws a TypeError
Object.defineProperty(Ob, 'a', {value: 12}) // throws a TypeError
Object.defineProperty(ob, 'a', writable: false) // This is allowed
Object.defineProperty(ob, 'a', {writable: true}); // throws a TypeError
delete ob.a; // false


Object Freeze and Seal

let cat = {name: 'Tom', age: 5}
Object.freeze(cat);
cat.age = 10 // Error in strict mode
cat.gender = 'male' // Error in strict mode
console.log(cat); // {name: 'Tom', age: 5}

cat = {name: 'Tom', age: 5}
Object.seal(cat)
cat.age = 10 // Ok
delete cat.age // Error in strict mode
console.log(cat) // {name: 'Tom', age: 10}


Inheritance

Type of Inheritance

Single Inheritance
A ---> B

Multilevel Inheritance
A-->B-->C

Hierarchical Inheritance

A--->B
|
|-->C

Multiple Inheritance
A----|
     |---->C
B----|

Not supported in JS with classes but works composition


The Prototype
(Object Delegation)

Every object in Js has a prototype(template)
-Internally called __proto__ in browsers and NodeJS
-Properties lookup follows the prototype chain
Obtained with Object.getPrototypeOf(obj)
Reference to another objects
-Objects are not separate and disconnected but linked

Node: __proto__ is for debugging and should never be used in production code


Prototype

Objects inherit properties and methods from a prototype
The prototype property allows you to add new properties to object constructors

function Person(first, last, age) {
    this.firstName = first
    this.lastName = last
    this.age = age
}

Person.prototype.nationality = 'Bulgarian'


Object Creation

Literal creation
Constructor creation
-Have an implicit reference(prototype) to the value of their constructor's prototype property
-Gets an internal __proto__link to the object


JavaScript Objects

Literals:

let bar = {
    me: 'I am b1',
    speak: function(){
        console.log('Hello, ' + this.me + '.')
    }
}

Constructed

function Bar(name){
    this.me = 'I am '+ name;
    this.speak = function(){
        console.log('Hello, ' + this.me + '.')
    }
}

let b1 = new Bar('b1')


Object Create

The Object.create() method creates a new object using an existing object as prototype

const dog = {
    name: 'Sparky',
    printInfo: function(){
        console.log(`My name is ${this.name})
    }
}

const myDog = Object.creat(dog)
myDog.name = 'Max'; // inherited properties can be overwritten
myDog.breed = 'shepherd' // breed is a property of myDog
myDog.printInfo(); // My name is Max


__proto__ vs Prototype Property

__proto__
-Property of an objects that points at he prototype that been set
-Using __proto__ directly is deprecated

prototype
-Property of a function set if your object is created by a constructor function
-Object do not have prototype property

Prototype Chain Example:

function Foo(y){
    this.y = y
}

Foo.prototype.x = 10
Foo.prototype.calculate = function(z){
    return this.x + this.y + z;
}

let b = new Foo(20)
console.log(b.calculate(30)); // 60


Prototype Inheritance

function Foo(who){
    this.me = who
}

Foo.prototype.identify = function(){
    return 'I am ' + this.me;
}
function Bar(who){
    Foo.call(this, who)
}
Bar.prototype = Object.create(Foo.prototype)
Bar.prototype.speak = function(){
    console.log('Hello, ' + this.identify() + '.')
}

let b1 = new Bar('b1')
let b2 = new Bar('b2')
b1.speak()
b2.speak()


Class Inheritance (ES6)
(Inheriting Data and Methods)

Traditional Classes

Classes are a design pattern
Classes mean - creating copies
-When instantiated - a copy from class to instance
-When inherited - a copy from parent to child
Class inheritance is powerful tool but has many drawbacks and limitation
-Composition should be preferred whenever possible

Class Inheritance

Classes can inherit (extend) other classes
-Child cass inherits data + methods from its parent
Child class can:
-Add properties(data)
-Add / replace methods
-Add / replace access properties
Use keyword extends

Example:

class Person{
    constructor(name, email){
        this.name = name
        this.email = email
    }
}

class Teacher extends Person{
    constructor(name, email, subject){
        super(name, email);
        this.subject = subject;
    }
}

let p = new Person('Maria', 'maria@gmail.com');
console.log('Person: ' + p.name + ' (' + p.email +')');

let t = new Teacher('Ivan', 'iv@gmail.com', 'PHP');
console.log('Teacher: ' + t.name + ' (' + t.email + '), teaches ' + t.subject);


Classes in JavaScript

Prototypal inheritance instead of classical inheritance
Does not automatically create copies
Common keys and values are shared by reference
Delegates not blueprints

*/