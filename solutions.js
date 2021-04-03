// **************************1
// Given a list of numbers and a number k, return whether any two numbers from the list add up to k.
// For example, given [10, 15, 3, 7] and k of 17, return true since 10 + 7 is 17.

// const addUp = function (arr, k) {
//   let checkForK = [],
//     total,
//     initial;
//   for (let i = 0; i <= arr.length; i++) {
//     initial = arr[0];
//     for (let m = 1; m < arr.length; m++) {
//       total = initial + arr[m];
//       checkForK.push(total);
//     }
//     arr.shift();
//   }
//   console.log(checkForK.includes(k));
// };

// addUp([10, 15, 3, 7], 17);
// addUp([10, 15, 3, 7], 10);
// addUp([10, 20, 10, 40, 50, 60, 70, 30], 50);

//****************************2
// Given an array of integers, return a new array such that each element at index i of the new array is the product of all the numbers in the original array except the one at i.
// For example, if our input was [1, 2, 3, 4, 5], the expected output would be [120, 60, 40, 30, 24]. If our input was [3, 2, 1], the expected output would be [2, 3, 6].

// const noRepeat = function (arr) {
//   let newArr = [];
//   for (let i = 0; i < arr.length; i++) {
//     const removed = arr.splice(i, 1);
//     const result = arr.reduce((acc, curr) => acc * curr);
//     newArr.push(result);
//     arr.splice(i, 0, removed);
//   }
//   console.log(newArr);
// };

//**************************external challenge
// noRepeat([1, 2, 3, 4, 5]);
// noRepeat([3, 2, 1]);
// function inventoryList() {
//   // write your code here
//   const inventory = {
//     items: [],
//     add(item) {
//       item !== null && this.items.push(item);
//     },
//     remove(item) {
//       this.items.includes(item) && this.items.splice(item, 1);
//     },
//     getList() {
//       return this.items;
//     },
//   };
//   return inventory;
// }

//***********************3
// Given an array of integers, find the first missing positive integer in linear time and constant space. In other words, find the lowest positive integer that does not exist in the array. The array can contain duplicates and negative numbers as well.
// For example, the input [3, 4, -1, 1] should give 2. The input [1, 2, 0] should give 3.
// You can modify the input array in-place.

const returnPositiveInteger = (...arr) => {
  let maxInt = Math.max(...arr);
  let minInt = Math.min(...arr);
  let minLowestInt;

  for (let i = minInt; i <= maxInt; i++) {
    if (i > 0 && !arr.includes(i)) {
      minLowestInt = i;
      break;
    }
    minLowestInt = maxInt + 1;
  }
  console.log(minLowestInt);
};

returnPositiveInteger(3, 4, -1, 1); // 2
returnPositiveInteger(1, 2, 0); // 3
returnPositiveInteger(-3, -5, 1, 9, 22, 0, -15); // 2
returnPositiveInteger(3, 6, 7, 9); // 4
