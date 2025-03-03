console.log("Hello, World!");
// ! jodi array length or element  4 hoy, taile er vetore 3 ta hobe 1,2,3
// ! abong 1 ta hobe 3 , eikhane boro element ta hobe 2 bar.
//? base element ta hobe 2 bar.
//? length hobe base+1;
//? baki element gula hobe 1 bar.
const nums = [1, 3, 3, 2];
var isGood = function (nums) {
  let base = Math.max(...nums);
  // step 1
  if (nums.length !== base + 1) return false;
  // step 2
  let countMap = new Map();
  for (let num of nums) {
    countMap.set(num, (countMap.get(num) || 0) + 1);
  }
  // step 3
  for (let i = 1; i < base; i++) {
    if (countMap.get(i) !== 1) return false;
  }
  // step 4
  return countMap.get(base) === 2;
};
console.log(isGood(nums));

// ! another way
var isGoodTow = (nums) => {
  nums.sort((a, b) => a - b);
  let base = nums.length;
  let count = 1;
  if (nums[base - 1] !== nums[base - 2]) return false;

  for (let i = 0; i < base - 1; i++) {
    if (nums[i] !== count++) return false;
  }
  return true;
};
console.log(isGoodTow(nums));
