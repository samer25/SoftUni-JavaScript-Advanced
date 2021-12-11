/*
DOM Manipulation
(Modify the DOM Tree)

We can create, append and remove HTML elements dynamically
-appendChild()
-removeChild()
-replaceChild()


Creating New DOM Elements

HTML elements are created with document.createElement
-This is called a Factory Pattern
Variables holding HTMl elements are live:
-If you modify the contents of the variable the DOM is updated
-If you insert it somewhere in the DOM the original is moved
Text added to textContent will be escaped
Text added to innerHTML will be parsed and turned into actual HTML elements
(Beware of XSS attacks!)

Creating a new DOM element

let p = document.createElement("p");

let li = document.createElement("li");

Create a copy / cloning DOM element

let li = document.getElementById("my-list");
let newLi = li.cloneNode(true)

Elements are created in memory - they don't exist on the page
To become visible they must be appended to the DOM tree


Manipulating NodeHierarchy

appendChild - Adds a new child as the last child

let p = document.createElement('p');
let li = document.createElement('li');
li.appendChild(p);

prepend - Adds a new child as the first child

let ul = document.getElementById("my-list");
let li = document.createElement('li');
ul.prepend('li');


Deleting DOM elements

let redElements = document.querySelectorAll('# item li.red');
redElements.forEach(li => {
    li.parentNode.removeChild(li);
});


The DOM Event
(Event Object and Types)

Event Object

Calls its associated function
Passes a single argument to the function - a reference to the event object
Contains properties that describe the event
-Which element triggered the event
-Screen coordinates where it occurred
-What is type of the event
-And more


Event Types in DOM API

Mouse events:
-click
-mouseover
-mouseout
-mousedown
-mouseup

Touch events
-touchstart
-touchend
-touchmove
-touchcancel

DOM/UI events
-load
-unload
-resize
-dragstart/drop

Keyboard events
-keydown
-keypress
-keyup

Focus events
-focus (got focus)
-blur (lost focus)

Form events
-input
-change
-submit
-reset


Event Handling

Event registration is done by providing a callback function
Three ways to register for an event:
-With HTML Attributes
-Using DOM element properties
-Using DOM event handler - preferred method

function handler(event){
    //this --> object, html reference
    //event --> object, event configuration
}


Event Listener

addEventListener();

htmlRef.addEventListener('click', handler, false);

removeEventListener();

htmlRef.removeEventListener('click', handler);


Attaching Click Handler

const button = document.getElementsByTagName('button')[0];

button.addEventListener('click', clickMe);

function clickMe(e){
    const target = e.currentTarget;
    const targetText = target.textContent;
    target.textContent = Number(targetText) + 1;
}


Events Handler Execution Context

In event handlers this refers to the event source element

element.addEventListener('click', function(e){
    console.log(this === e.currentTarget); // Always true
});

Pay attention when using object methods as event listeners!
-this may not behave as you expect with objects


Attaching Hover Handler

const button = document.getElementsByTagName('div')[0];

button.addEventListener('mouseover', function(e){
    const style = e.currentTarget;
    const { backgroundColor } = style;

    if (backgroundColor === 'white'){
        targetStyles.backgroundColor = '#234465';
        targetStyles.color = 'white';

    }else{
        targetStyles.backgroundColor = 'white';
        targetStyles.color = '#234465';
    }
});


Attaching Input Handler

const inputField = document.getElementsByTagName('input')[0];

const button = document.getElementsByTagName('button')[0];

inputField.addEventListener('input', function(){
    button.setAttribute('disable', 'false')
});


Remove Listeners

const password = document.querySelector('input[type='password']');
const button = document.querySelector('button');
password.addEventListener('focus', focusEvent);

function focusEvent(){
    event.target.style.background = '#234465';
}

password.addEventListener('blur', (event) +> {
    event.target.style.background = ' ';
});

button.addEventListener('click', ()=>{
    password.removeEventListener('focus', focusEvent);
});


Multiple Listeners

The addEventListener() method also allows you to add many listeners to the same
element without overwriting existing ones:

element.addEventListener('click', MyFirstFunction);
element.addEventListener('click', MySecondFunction);
element.addEventListener('mouseover', MyThirdFunction);
element.addEventListener('mouseout', MyFourthFunction);

Note that you dont use the 'on' prefix for the event click instead of onclick


Event Propagation
(Handling Events Away From Their Source)

DOM Event Delegation

Allows you to avoid adding event listeners to specific nodes
Event listener is assigned to a single ancestor

<ul id="parent-list">
    <li id="post-1">Item 1</li>
    <li id="post-2">Item 2</li>
</ul>


document.getElementById("parent-list")
    .addEventListener("click", function (e) {
        if (e.target && e.target.nodeName == "li") {
            console.log(
                "List item ", e.target.id.replace("post-", ""),
                " was clicked!");
        }
});


Pros and Cons

Benefits:
-Simplifies initialization
-Saves memory
-Less code

Limitations
-Event must be bubbling
-May add CPU load


Controlling Propagation and Behavior

stopPropagation prevents further propagation of the event
-If there are multiple handlers for the same event
preventDefault stop the browser from executing default behavior, for example:
-Navigating to a new page when <a> is clicked
-Submitting HTTP requests via forms
-Opening context menus
*/