/*
Array

Arrays are list-like objects
Arrays are a reference type the variable points to an address in memory
Elements are numbered from 0 to length - 1
Creating an array using an array literal
let numbers = [10, 20, 30, 40]

Neither the length of a javascript array nor the types of its elements are fixed
An array is length can be changed at any time
Data can be stored at non-contiguous locations in the array
JavaScript arrays are not guaranteed to be dense

Arrays of Different Types

Array can hold numbers
Array can hold strings
Array can hold mixed data


Accessing Elements

Array elements are accessed using their index

let cars = ["BMW", "Audi", "Opel"]
let firstCar = cars[0] //BMW
let lastCar = cars[cars.length - 1]

Accessing indexes that do not exist in the array returns undefined

Arrays can be iterated using for-of loop

for (let car of cars){}


Arrays Indexation

Setting value via non-integers using bracket notation(or dot notation) creates object properties
instead of array elements

let arr = [];
arr[3.4] = 'Oranges';
arr[-1] = 'Apples';
console.log(arr.length); //0
console.log(arr.hasOwnProperty(3.4)); // true
arr["1"] = 'Grapes';
console.log(arr.length); // 2
console.log(arr); // [<1 empty item>, 'Grapes',
'3.4': 'Oranges', '-1': 'Apples']


Destructuring Syntax

Expression that unpacks values from arrays or objects into distinct variables

let numbers = [10, 20, 30, 40, 50];
let [a, b, ...elements] = numbers;
console.log(a) // 10
console.log(b)  // 20
console.log(elements) // [30, 40 ,50]

The rest operator can also be used to collect function parameters into an array


Mutator Methods
(Modify the Array)

Pop:
Removes the last element from an array and returns that element
This method changes the length of the array

let nums = [10, 20, 40 , 50];
console.log(nums.pop()); // 50
console.log(nums.length); // 3

Push:
The push() method adds one or more elements to the end of an array and returns the new length of array

let nums = [10, 20, 40 , 50];
console.log(nums.push(60));
console.log(nums.length); // 5

Shift:
The shift() method removes the first element from an array and returns that removed element
This method changes the length of the array


let nums = [10, 20, 40 , 50];
console.log(nums.shift()); // removes 10
console.log(nums.length); // 3

Unshift:
The unshift() method adds one or more elements to the beginning of an array and returns the
new length of the array

let nums = [10, 20, 40 , 50];
console.log(nums.unshift(0)); // add 0 at beginning
console.log(nums.length); // 3

Slice:
Changes the contents of an array be removing or replacing existing elements and/or adding new elements

let numbers = [1, 3, 4, 5, 6]
numbers.slice(1,0,2) // inserts at index 1
console.log(numbers) // [1, 2, 3, 4, 5, 6]
numbers.slice(4,1,19) // replaces 1 element at index 4
console.log(numbers) // [1,2,3,4,19,6]
let el = numbers.slice(2, 1) // removes 1 element at index 2
console.log(numbers) // [1,2,4,19,6]
console.log(el); // [3]

Fill:
Fills all the elements of an array from a start index to an end index with a static value

let arr = [1,2,3,4]
// fill with 0 from position 2 until position 4
console.log(arr.fill(0, 2, 4))// [1,2,0,0]
// fill with 5 from position 1
console.log(arr.fill(5,1)) // [1,5,5,5]
console.log(arr.fill(6)) // [6,6,6,6]

Reverse:
Reverses the array
-The first array element becomes the last and the last array element becomes the first

let arr = [1,2,3,4]
arr.reverse(); // [4,3,2,1]

Sorting Arrays:

The sort() method sorts the items of an array
Depending on the provided compare function, sorting can be alphabetic or numeric and either
ascending (up) or descending (down)
By default the sort() function sorts the values as strings in in alphabetical and ascending order
If you want to set numbers or other values you need to provide the correct compare function

let names = ["Peter", "George", "Mary"]
names.sort(); Default behavior
console.log(names); // ["George","Mary","Peter"]

let numbers = [20,40,10,30,100,5];
numbers.sort() // Unexpected result on arrays of numbers
console.log(numbers); // [10, 100, 20, 30, 40, 5]

Compare Functions

A function receiving two parameters e.g. a and b
-Returns either a positive number, a negative number or zero
-if result < 0, a is sorted before b
-if result > 0, a is sorted after b
-if result = 0, a and be are equal (no change)

let nums = [20, 40, 10, 30, 100, 5]
nums.sort((a,b) => a-b) // Compare elements as numbers
console,log(nums.join('|')); // 5|10|20|30|40|100

Sorting String Array

The localeCompare() method is used to compare any two characters without regard
for the case used
-It's string method so it can't be used directly on an array
-Pass localeCompare() as the comparison function

let words = ["nest","Eggs","bite","Grip","jAw"]
words.sort((a, b) => a.localeCompare(b));
// ["bite","Eggs","Grip","jAw","nest"]


Accessor Methods

Join:
Creates and returns a new string by concatenating all of the elements in an array(or an array-like object),
separated be commas or a specified separator string

let elements = ["Fire", "Air", "Water"]
console.log(elements.join()); // "Fire,Air,Water"


Concat:
The concat() method is used to merge two or more arrays
This method does not change the existing arrays but instead return a new array

const num1 = [1, 2, 3];
const num2 = [4, 5, 6]
const num3 = [7, 8, 9]
const numbers = num1.concat(num2, num3)
console.log(numbers) // [1,2,3,4,5,6,7,8,9]

Slice:
The slice() method returns a shallow copy of a portion of an array into a new array object selected
from begin to end (end not included)
The original array will not be modified

let fruits = ['Banana','Orange','Lemon','Apple','Mango'];
let citrus = fruits.slice(1,3); // ['Orange','Lemon']
let fruitsCopy = fruits.slice() // copy of fruits


Includes:
Determines whether an array contains a certain element, returning true or false as appropriate

// array length is 3
// fromIndex is -100
// computed index is 3 + (-100) = -97
let arr = ['a', 'b', 'c'];
arr.includes('a', -100); // true
arr.includes('b', -100); // true
arr.includes('c', -100); // true
arr.includes('a', -2); // false


IndexOf:
The indexOf() method returns the first index at which a given element can be found in the array
-Output is -1 if element is not present

const beasts = ['ant', 'bison', 'camel', 'duck', 'bison']
console.log(beasts.indexOf('bison')); // 1
console.log(beast.indexOf('bison', 2)); start from index 2 // 4
console.log(bests.indexOf('giraffe')) // -1


Iteration Methods

ForEach:
The forEach() method executes a provided function once for each array element
Converting a for loop to forEach

const items = ['item1', 'item2', 'item3']
const copy = [];

//for loop
for (let i = 0; i < items.length; i++){
    copy.push(items[i])
}

// forEach
items.forEach(item => {
    copy,push(item);
});


Some:
The some() method tests whether at least one element in the array passes the test
implemented by the provided function
It returns a Boolean value

let array = [1, 2, 3, 4, 5]
let isEven = function(element) {
    // checks whether an elements is even
    return element % 2 === 0;

};
console.log(array.some(isEven)); // true

Find:
Returns the first found value in the array, if an element in the array satisfies the
provided testing function or undefined if not found

let array1 = [5, 12, 8, 130, 44]
let found = array1.find(function(element){
    return element > 0
});
console.log(found) // 12

Filter:
Creates a new array with filtered elements only
Calls a provided callback function once for each element in an array
Does not mutate the array on which it is called

let fruits = ['apple', 'banana', 'grapes', 'mango', 'orange']

// Filter array items based on search criteria (query)

function filterItems(arr, query){
    return arr.filter(function(el){
        return el.toLowerCase().indexOf(query.toLowerCase()) !== -1;
    })
}

console.log(filterItems(fruits, 'ap')); // ['apple', 'grapes']

Map:
Creates a new array with the results of calling a provided function on every element in the calling array

let numbers = [1,4,9]
let roots = numbers.map(function(num, i, arr){
    return Math.sqrt(num)
});
//roots is now [1, 2, 3]
//number is still same


Reducing Arrays

Reduce:
The reduce() method executes a reducer function on each element of the array, resulting in a single output value

 const array1 = [1, 2, 3, 4]
 const reducer = (accumulator, currentValue) => accumulator + currentValue;
 console.log(array.reduce(reducer)); //10
 console.log(array1.reduce(reducer, 5)) // 15

Reducer Function

The reducer function takes four arguments:
-Accumulator
-Current Value
-Current Index (Optional)
-Source Array (Optional)
Your reducer function's returned value is assigned to the accumulator
Accumulator's value - the final, single resulting value

Example:
Sum all value:

let sum = [0, 1, 2, 3].reduce(function (acc, curr){
    returns acc + curr;
}, 0); // 6

Finding an average with reduce

const numberArr = [30, 50, 40, 10, 70];
const average = numbersArr.reduce((total, number, index, array) => {

        total += number;
        if(index === array.length - 1){
            return total / array.length;
        } else {
            return total;
        }
});
console.log(average) // 40


Array of Arrays
(Nested Arrays)

Array of 4 arrays
let arr = [[4,6,3,0],
           [2,1,-2],
           [-5, 17],
           [7,3,9,12]]

Element arr[2][0] at row 2 column 0 // -5


Looping Through a Nested Array

let arr = [[4, 5, 6], [6, 5, 4], [5, 5, 5]]

arr.forEach(printRow);
function printRow(row){ // Prints each row of the array on a separate line
    console.log(row);
    row.forEach(printNumber)
}

function printNumber(num){ // element of the array on a separate line
    console.log(num);
}

*/


