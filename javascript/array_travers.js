// Date: 2021/05/30
console.log("Hello, array travers");

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
for (let i = 0; i < arr.length; i++) {
  console.log("index: ", i, "value: ", arr[i]);
}
//access 4th element of this array
console.log("4th element: ", arr[3]);
//incert new element in this array
let newElement = 11;
let position = 3;
for (let i = arr.length - 1; i >= 0; i--) {
  if (i >= position) {
    arr[i + 1] = arr[i];
    arr[i] = newElement;
    console.log(arr);
  }
}
console.log(arr);
