'use strict';

//Create an array of numbers, 1 through 10
var testArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

//Write a function, called forLoop that takes an array as a parameter, runs the array through a for(...) loop and does a console.log() of each element.
function forLoop(arr) {
  for (let i = 0; i < testArr.length; i++) {
    console.log(arr[i]);
  }
}
forLoop(testArr);

//Write a function, called whileLoop that takes an array as a parameter, runs the array through a while(...) loop and does a console.log() of each element.
function whileLoop(arr) {
  let i = 0;
  while (arr[i]) {
    console.log(arr[i]);
    i++
  }
}
whileLoop(testArr);


//Implement .map(), .filter(), .reduce() as regular javascript functions that take in an array as a parameter, but do the same things as the real functions.

///////////////////.map()///////////////////
function map(arr, cbFunc) {
  let retArr = [];
  for (let i = 0; i < arr.length; i++) {
    let ret = cbFunc(arr[i], i);
    retArr.push(ret);
  }
  return retArr;
}

let retMapArr = map(testArr, (item, idx) => {
  return item;
});

console.log('the .map() return array: ', retMapArr);


///////////////////.filter()////////////////
function filter(arr, cbFunc) {
  let retArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (cbFunc(arr[i])) {
      retArr.push(arr[i]);
    }
  }
  return retArr;
}

let retFilArr = filter(testArr, (item) => {
  return item >= 6;
});

console.log('the .filter() return array: ', retFilArr);


////////////////////.reduce()///////////////
function reduce(arr, cbFunc, intializer) {
  let total = intializer;
  let iterations = arr.length;
  let retArr = arr;
  for (let i = 0; i < iterations; i++) {
    total = cbFunc(total, retArr[0]);
    retArr = retArr.slice(1, retArr.length);
  }
  retArr[0] = total;
  return retArr;
}

let retRedArr = reduce(testArr, (total, num) => {
  return total -= num
}, 0);

console.log('the .reduce() return array: ', retRedArr);