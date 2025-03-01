//?  Given an binary array nums and an integer k, return true if all 1's are at least k places away from each other, otherwise return false.
//?  Example 1:
//?  Input: nums = [1,0,0,1,0,1], k = 2
//?  Output: true
//?  Explanation: Each of the 1s are at least 2 places away from each other.
//?  Example 2:
//?  Input: nums = [1,0,0,1,1,0,0,1], k = 2
//?  Output: false
//?  Explanation: The second 1 and third 1 are only one apart from each other.
//?  Example 3:
//?  Input: nums = [1,1,1,1,1], k = 0
//?  Output: true
//?  Explanation: There are 5 1s, which is more than 0 places apart.
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
