console.log("Hello, array two sum");

const num = [3,3];
const target = 6;
function twoSum(nums, target) {
    for (let i=0; i<nums.length;i++){
        for (let j=i+1; j<nums.length;j++){
            if (nums[i] + nums[j] === target){
                return [i,j];
            }
        }
    }
}

console.log(twoSum(num, target));
// explain time complexity  O(n2)
// space complexity O(1)
// 2nd solution
function twoSum2(nums, target) {
    const map = new Map();
    for (let i=0; i<nums.length;i++){
        const complement = target - nums[i];
        if (map.has(complement)){
            return [map.get(complement), i];
        }
        map.set(nums[i], i);
    }
}
console.log(twoSum2(num, target));
// explain time complexity  O(n)
// space complexity O(n)
// 3rd solution
function twoSum3(nums, target) {
    const map = {};
    for (let i=0; i<nums.length;i++){
        const complement = target - nums[i];
        if (complement in map){
            return [map[complement], i];
        }
        map[nums[i]] = i;
    }
}
console.log("twoSum3 : ",twoSum3(num, target));
// explain time complexity  O(n)
// space complexity O(1)
// 4th solution
function twoSum4(nums, target) {
    const map = {};
    for (let i=0; i<nums.length;i++){
        const complement = target - nums[i];
        if (map.hasOwnProperty(complement)){
            return [map[complement], i];
        }
        map[nums[i]] = i;
    }
}
console.log(twoSum4(num, target));
// explain time complexity  O(n)
// space complexity O(1)
// 5th solution
function twoSum5(nums, target) {
    for (let i=0; i<nums.length;i++){
        const complement = target - nums[i];
        const index = nums.indexOf(complement);
        if (index !== -1 && index !== i){
            return [i, index];
        }
    }
}
console.log(twoSum5(num, target));
// explain time complexity  O(n)
// space complexity O(1)
// 6th solution
function twoSum6(nums, target) {
    for (let i=0; i<nums.length;i++){
        const complement = target - nums[i];
        const index = nums.lastIndexOf(complement);
        if (index !== -1 && index !== i){
            return [i, index];
        }
    }
}
console.log(twoSum6(num, target));
// explain time complexity  O(n)
// space complexity O(1)

