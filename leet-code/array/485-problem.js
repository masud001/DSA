var findMaxConsecutiveOnes = function (nums) {
  let count = 0;
  let saved = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 1) {
      count++;
      if (count > saved) {
        saved = count;
      }
    } else {
      count = 0;
    }
  }
  return saved;
};
