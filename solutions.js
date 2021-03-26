// 1
// Given a list of numbers and a number k, return whether any two numbers from the list add up to k.
// For example, given [10, 15, 3, 7] and k of 17, return true since 10 + 7 is 17.

const addUp = function (arr, k) {
  let checkForK = [];
  for (let i = 1; i < arr.length; i++) {
    let initial = arr[0];
    initial += arr[i];
    checkForK.push(initial);
  }
  console.log(checkForK.includes(k));
};

addUp([10, 15, 3, 7], 17);
