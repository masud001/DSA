console.log("Hello, array sorting");

// random array elements
const arr = [7, 20, 300, 28, 24, 66, 2, 1, 86];

//bubble sort
const bubbleSort = (arr) => {
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = 0; j < arr.length - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  return arr;
};
console.log(bubbleSort(arr));
// time complexity explain for bubble sort
// O(n^2)
