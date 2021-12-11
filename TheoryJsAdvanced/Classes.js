/*
Defining Classes
(Constructor,, Properties, Accessors)

Structure for objects
Classes define:
-Data(properties, attributes)
-Actions(behavior)
One class may have many instances (objects)
Unlike functions class declarations are not hoisted


Class Body

The class body contains method definition

class Circle{
    constructor(r){
        this.r = r
    }
}

The constructor is special method for creating and initializing an
object created with a class
Instance properties are defined inside the constructor


Class Methods

A class may have methods which will be available to its instances

class Rectangle {
    constructor(height, width){
        this.height = height
        this.width = width
    }

    calcArea(){
        return this.height * this.width
    }
}

const = square = new Rectangle(10, 10)
console.log(square.calcArea()); // 100


Instance Context

this refers to the instance of the class

class Person {
    constructor(firstName, lastName){
        this.firstName = firstName;
        this.lastName = lastName;
    }

    displayName(){
        console.log(`Name: ${this.firstName} ${this.lastName}');
    }
}

const person = new Person('John', 'Doe');
person.displayName(); // Name: John Doe


Instanceof Operator

The instanceof operator returns true if the given object is an instance of the specified class

const circle = new Circle(5);
console.log(circle instanceof Circle); // true
console.log(circle instanceof Object); // true
console.log(circle instanceof String); // false
console.log(circle instanceof Number); // false


Static Methods

The static keyword defines a static method for a class

class MyClass {
    static staticMethod(){
        return 'Static call';
    }
}

Static methods are part of the class and not of its instances

console.log(MyClass.staticMethod())

They can only access other static methods via this context

    static anotherStaticMethod(){
        return this.staticMethod() + ' from another method';
    }



Accessor Properties

Accessor properties are methods that mimic values
-Keywords get and set with matching identifiers
-They can be accessed and assigned to like properties

class Circle {
    constructor(r){
        this.r = r;
    }

    get area(){
        return Math.Pi * (this.r ** 2)
    }
}

const circle = new Circle(t);
console.log(circle.area) // 78.5398..


Accessor Properties Example:

class Circle{
    constructor(radius){
        this.radius = radius
    }
    get diameter(){ // Property getter
        return 2 * this.radius
    }
    set diameter(value){ // Property setter
        this.radius = value / 2;
    }
    get area(){ // Read-only property area
        return Math.PI * (this.radius ** 2);
    }
}

let c = new Circle(2)
c.diameter = 1.6;
console.log(`Radius: ${c.radius}`) // 0.8
console.log(`Diameter: ${c.diameter}`) // 1.6
console.log(`Area: ${c.area}`) // 2.0106...


Accessor Properties Application

Accessors are often used for validation
-The setter can verify that a given value meets requirements

    set diameter(value){
        if(value <= 0){
            throw new Error('Diameter must be positive');
        }
        this.radius = value / 2;
    }

Properties without a setter are read-only (cannot be assigned)
Getter can be used for a validated or calculated property


DOM Classes
(Methods and Attributes)

Review: DOM Elements as Class Instance

All DOM objects are instances of standard DOM classes
-Always created via factory functions instead of with new

const divElement = document.createElement('div');
console.log(divElement instanceof HTMLDivElement) // true

They provide many useful methods and properties
-Already seen: addEventListener, appendChild, remove, children, parentNode, textContent, value, etc.


Additional DOM Methods

cloneNode(deep) create a duplicate of the selected element
-if deep is true a deep-copy is created

const duplicate = divElement.cloneNode(true)

-replaceWith() replaces selected element with another

const span = document.createElement('span');
divElement.replaceWith(span);

-before() insert element before selected node
-after() insert element after selected node


Manipulate Element CSS Class

classList - is a read-only property that returns a collection of the class attributes of specified element

<div id="myDiv" class="container div root"></div>

const element = document.getElementById('myDiv').classList
// DOMTokenList(3) ["container", "div", "root", value: "container div root"]


ClassList Methods

-add() - Adds the specified calss value

element.classList.add('testClass');

-remove() - Removes the specified class values

element.classList.remove('container')

<div id="myDiv" class="div root testClass"></div>


HTML Attributes and Methods

getAttributes() - returns the value of attributes of specified HTML element

<input type='text' name='username'/>
<input type='password'/>

const inputEle = document.getElementByTagName('input')[0]

inputEle = getAttributes('type') // text
inputEle = getAttributes('name') // username

setAttribute() - sets the value of an attribute on the specified HTML element

const inputElePass = document.getElementByTagName('input')[1]

inputElePass.settAttribute('name', 'password')

<input type='password' name='password'/>


removeAttributes() - removes the attribute with the specified name from an HTML element


<input type="text" name="username" placeholder="Username..."/>
<input type="password" name="password" placeholder="Password..."/>

const inputPassEle = document.getElementsByTagName('input')[1];
inputPassEle.removeAttribute('placeholder');

<input type="text" name="username" placeholder="Username..."/>
<input type="password" name="password"/>


hasAttribute() - method returns true if the specified attribute exists otherwise it return false

<input type="text" name="username" placeholder="Username..."/>
<input type="password" name="password" id="password"/>

const passwordElement = document.getElementById('password');
passwordElement.hasAttribute('name'); // true
passwordElement.hasAttribute('placeholder'); // false

dataset obtain DOMStringMap of custom data attributes


Combining Elements and Behavior

Class can be used to encapsulate elements and behavior
- Store references to DOM elements
- Provide event handlers
- Methods that manipulate the elements

This is called the Component Pattern
-Used in many JS framework such as React, Vue, Angular
-Used in the Custom Web Component API


Build-in Collections
(Set, Map, WeakSet, WeakMap)

A Map collection stores its elements in insertion order
A for-of loop returns an array if [key, value] for each iteration
Pure JavaScript objects are like Maps in that both let you:
-Assign values to keys
-Detect whether something is stored in a key
-Delete keys


Adding/Accessing Elements

.set(key, value) - adds a new key-value pair

let map = new Map();
map.set(1, "one") // Key - 1, value - one
map.set(2, "two") // Key - 2, value - two

.get(key) - returns the value of the given key

map.get(2) // two
map.get(1) // one

.size - property, holding the number of stored entries

.has(key) - checks if the map has given key

map.has(2) // true
map.has(4) .. false

.delete(key) - removes a key-value pair

map.delete(1) // Removes 1 from the map

.clear() - removes all key-value pairs


Iterators

.entries() - returns iterator - array of [key, value]
.key() - returns iterator with all the keys
.values() - returns iterator with all the values

let entries = Array.from(map.entries()); // [[1, "one"],[2, "two"]]
let keys = Array.from(map.keys()) // [1, 2]
let values = Array.from(map,values()) // ["one", "two"]

These methods return an iterator, transform it into an Array


Iterating a Map

To print a map simply use one of the iterators inside a for-of

let iterable = phonebookMap.keys();

for (let key of iterable){
    console.log(`${key} => ${phonebookMap.get(key)}`)
}

for (let [key, value] of iterable){
    console.log(`${key} => ${value}`)
}


Map Sorting

To sort a Map, first transform it into an array
Then use the sort() method

let map = new Map();

map.set("one", 1)
map.set("eight", 8)
map.set("two", 2)

let sorted = Array.from(map.entries()).sort((a, b) => a[1] - b[1]);

for(let kvp of sorted){
    console.log(`${kvp[0]} -> ${kvp[1]}`);
}


Set

Store unique values of any type whether primitive value or object references
Set objects are collections of values

let set = new Set([1,2,2,4,5]) // Set(4) {1,2,4,5}
set.add(7) // Add value
console.log(set.has(1)) // Expected output: true

Can iterate through the elements of a set in insertion order


WeakMap and WeakSet

Special variants of Map and Set
Their elements do not count as active references
-Reference type visible (in scope) in the program stack are active
-Active references remain in memory
-Out-of-scope references are removed by the garbage collector
These collections are used in memory-intensive applications

 */

