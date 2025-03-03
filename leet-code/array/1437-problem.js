var kLengthApart = function (nums, k) {
  let count = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 1) {
      if (count < k && i !== 0) {
        return false;
      }
      count = 0;
    } else {
      count++;
    }
  }
  return true;
};

const nums = [1, 0, 0, 0, 1, 0, 0, 1],
  k = 2;
console.log(kLengthApart(nums, k)); // Output: true
