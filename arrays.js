"use strict"; // enable modern Javascript modifications

/**********************************************************
 * Arrays
 **********************************************************/

// create an empty array
let fruits = [];

// create an array with elements
fruits = ["apple", "banana", "cherry"];

// arrays are zero-indexed
console.log(fruits[1]); // banana

// elements can be added to arrays (unlike Java)
fruits[4] = "date";
console.log(fruits);

// use .length to get the number of elements
console.log(fruits.length); // 4

//console.log(fruits[3]);

// elements can be of any type
const arr = [1, "two", true, { name: "Callaghan" }, fruits];
console.log(arr);

// arrays have methods like stacks and queues

// use .push and .pop to treat an array like a stack (fast)
console.log(fruits.pop()); // removes last element and returns it
fruits.push("elderberry"); // add the element to end
console.log(fruits);

// we can treat an array like a queue
//  use .pop, to remove from the head of the queue,
//  and .unshift (slow), to add to the tail of the queue
fruits.unshift("apricot"); // add the element to the tail of the queue
fruits.pop(); // remove element from the head of the queue
console.log(fruits);

// for .. of
for (const fruit of fruits) {
  console.log(fruit);
}

// map invokes the specified function for each element and returns the
//  resulting array.
//  very useful for creating an array of objects from an array of values

const fruitObjects = fruits.map((item) => ({
  name: item,
}));
console.log(fruitObjects);

const capFruits = fruits.map((item) => item.toUpperCase());
console.log(capFruits);

// or the other way around...
console.log(fruitObjects.map((item) => item.name));

/**
 * there are other array methods such as:
 *    splice, slice, and concat;
 *    indexOf, includes, find, and filter;
 *    sort, split, join, and reduce
 */

let x = ["a", "b", "c"];
let y = x.map(
  (item) => ({ letter: item }) // item is a parameter we make up to represent items in array
); // property of new objects is letter

console.log(x);
console.log(y);
