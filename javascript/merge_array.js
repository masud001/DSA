const arr1 = [1, 2, 3, 4, 5, 6];
const arr2 = [7, 8, 9, 10, 11, 12];
const arr3 = [];

const mergeArray = (arr1, arr2) => {
  for (let i = 0; i < arr1.length; i++) {
    arr3[i] = arr1[i];
  }
  for (let i = 0; i < arr2.length; i++) {
    arr3[arr1.length + i] = arr2[i];
  }
  return arr3;
};
mergeArray(arr1, arr2);
