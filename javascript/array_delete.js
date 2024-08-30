console.log("Hello, arrat delete");
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 5];

// reverse the array
let newArr = [];
let start = 0;
let end = arr.length - 1;
const reverseArr = (arr) => {
  while (start < end) {
    let temp = arr[start];
    arr[start] = arr[end];
    arr[end] = temp;
    start++;
    end--;
  }
  return arr;
};

// delete 4th element
const deleteElement = (arr) => {
  let position = 6;
  for (let i = position; i < arr.length - 1; i++) {
    arr[i] = arr[i + 1];
  }
  arr.length = arr.length - 1;

  return arr;
};

// search element in array
const searchElement = (arr, element) => {
  let position = -1;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === element) {
      position = i;
      break;
    }
  }
  return position;
};

// console.log(searchElement(arr, 5));
// search multiple element in array

const searchMultipleElement = (arr, element) => {
  let position = [];
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < element.length; j++) {
      if (arr[i] === element[j]) {
        position.push(i);
      }
    }
  }
  return position;
};

console.log(searchMultipleElement(arr, [5, 6]));
