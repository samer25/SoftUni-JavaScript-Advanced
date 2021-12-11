/*
Browser API
(Browser Object Model (BOM))

Browsers expose some object like:
window, screen navigator, history, location

console.dir(window)
console.dir(navigator)
console.dir(history)
....


Global Context in the Browser

let b = 8;
console.log(this.b) // undefined

var a = 5;
console.log(this.a) // 5

function foo(){
    console.log("Simple function call");
    console.log(this === window);
}

foo(); // true


Document Object Model
(DOM)
Document with a Logical Tree

The DOM represents the document as nodes and objects
-That way the programming languages can connect to the page
The HTML DOM is an Object Model for HTML. It defines:
-HTML elements as objects
-Properties
-Methods
-Events

From Html to DOM Tree

The browser parses HTML and creates a DOM Tree

<html>
    <head>
        <title>Title</title>
    </head>
    <body>
        <h1> My Heading </h1>
        <a href="/about> Click </a>
    </body>
</html>

The elements are nested in each other and create a hierarchy
-Like the hierarchy of a street address - Country, City, Street, etc.


DOM Methods

DOM Methods - actions you can perform on HTML elements
DOM Properties - values of HTML elements that you can set or change

Example: DOM Methods
HTML DOM method is an action you can do (like add or delete an HTML elements)

<html>
    <head>
        <title>Title</title>
    </head>
    <body>
        <h1> My Heading </h1>
        <a href="/about> Click </a>
        <ul>
            <li> DOM method example </li>
            <li> DOM properties example </li>
    </body>
</html>

let h1Element = document.getElementsByTagName('h1')[0]
console.log(h1Element) // My Heading

let secondLi = document.getElementsByTagName('li')[1];
secondLi.innerHTML += "- DONE";

  <li> DOM properties example - DONE </li>


Using the DOM API

JavaScript can interact with web pages via the DOM API:
-Check the contents and structure of elements on the page
-Modify element style and properties
-Read user input and react to events
-Create and remove elements
Most actions are performed when an event occurs
-Events are fired when something of interest happens


JavaScript in Browser

Code can be executed in the page in different ways:
-Directly in developer console - when debugging
-As a page event handler - e.g. user clicks on button

<button onclick="console.log('Hello, DOM!')"> Click Me</button>

-Via inline script using <script> tags
<script>
    function sum(a, b){
        let result = a + b;
        return result
    }
</script>

-By importing from external file - most flexible method


HTML Elements
(DOM Properties and HTML Attributes)

The DOM Tree is comprised of HTML elements
Elements are JS objects with properties and methods
-They can be accessed and modified like regular objects
To change the contents of the page:
-Select an element to obtain a regerence
-Modify its properties

Attributes are defined by HTML
-Attributes initialize DOM properties
-Property values can change via the DOM API
The HTML attributes and the DOM property are technically not the same thing
Since the outcome is the same in practice you will almost never encounter a difference


DOM Manipulations

The HTML DOM allows JavaScript to change the content of HTML elements
-innerHTML
-textContent
-value
-style
And many others

Accessing Element HTML

To access raw HTML:
element.innerHTML = "<p> Welcome to the DOM" </p>"
will add whole element in site selected element in html

This will be parsed - beware of XSS attacks!
Changing textContent or innerHTML removes all child nodes

The contents of HTML elements are stored in text nodes
-To access the contents of an element:

let text = element.textContent
element.textContent = "Welcome to the DOM"

This will change the element
If the element has children returns all text concatenated

The values of input elements are string properties on them:
....
<input id="num1" type="text">
....

let num = Number(element.value)
element.value = 56;

Targeting DOM Elements
(Obtaining Element References)

There are a few ways to find a certain HTML element in the DOM:
-By ID - getElementById()
-By class name - getElementsByClassName()
-By tag name - getElementsByTagName()
-By CSS selector - querySelector(), querySelectorAll()
These methods returns a reference to the element which can be manipulated
with JavaScript

Targeting by ID

The ID attribute must be unique on the page

...
<h1 id="main"> My Header </h1>

const element = document.getElementById('main');

Targeting by Tag and Class Names

The tag name specifies the type of element - div, p, ul

const elements = document.getElementsByTagName('p');
//Select all paragraphs on the page

Class names are used for styling and easier selection

const elements = document.getElementsByClassName('list')
// Select all elements having a class named 'list'

Both methods return a live HTML-Collection
-Even if only one element is selected! This is a common mistake


CSS Selectors

CSS selectors are strings that follows CSS syntax for matching
They allow very fast and powerful element matching, e.g.:
-#main - returns the element with ID main
-#content div - selects all <div>s inside #content
-.node, .alert - all elements with class note or alert
- input[name='login'] - <input> with name login

Example:

Select the first matching element
const mainDiv = document.querySelector('#main');
// Select the element with ID main

const element = document.querySelector('p');
// Select the first paragraph on the page

Select all matching elements
-Returns a static NodeList
const element = document.querySelectorAll('article.list');
//Select all <article> elements having a class named list


NodeList vs HTMLCollection

Both interfaces are collections of DOM nodes
NodeList can contain any node type including text and whitespace
HtmlCollection contains only Element node
Both have iteration methods HTMLCollection has an extra namedItem method
HTMLCollection is live while NodeList can be either live or static


Iterating Element Collections

NodeList and HTMLCollection are NOT arrays but can be indexed and iterated

const elements = document.querySelectorAll('p');
const first = elements[0];
// Select the first paragraph on the page
for (let p of elements) { .. }
// Iterate over all entries

Both can be explicitly converted to an array

const elementArray = Array.from(elements);
const elementArr2 = [...elements]; // Spread syntax


Parents and Child Elements

Every DOM Elements has a parent
-Parents can be accessed by property parentElement or parentNode

<div>
    <p> This is paragraph </p>
    <p> This is another paragraph </p>
</div>

let firstP = document.getElementByTagName('p')[0]; // Accessing the first child
console.log(firstP.parentElement) // accessing the child's parent

When some element contains other elements that means he is parent of those elements
They are children to the parent. They can be accessed bt property children

let pElements = document.getElementByTagName('div')[0].children // returns live HTMLCollection


Using the DOM API
(Common Techniques and Scenarios)

External Page Scripts

Page scripts can be loaded from an external file
-Use the src attribute of the script element

<script src="app.js"></script>

Functions from script files are in the global scope
-Can be referenced and executed from events and inline scripts
-Multiple script files in a page can see each other
Pat attention to load order


Control Content via Visibility

Content can be hidden or revealed by changing its display style
-This is a common technique to display content dynamically

const element = document.getElementById('main');
To hide sn element:

element.style.display = 'none';

To reveal an element set display to anything that isn't 'none' (including empty string)

element.style.display = '' // can be inline, block, etc.


Match n-th Child

Sometimes we need to target an element based on its relation to other similar elements
-E.g row or column in a table list item , etc.
Can be done either by index or with a CSS selector

const list = document.getElementsByTagName('ul')[0];
// First <ul> on the page
const thirdLi = list.getElementsByTagName('li')[2];
// Third <li> inside the selected <ul>

const thirdLi = document.querySelector('ul li:nth-child(3)');
// Third <li> inside the first <ul> on the page
*/