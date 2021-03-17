/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */

var maxSlidingWindow = function(nums, k) {
    let arr = []
    if (nums.length===0) return arr
    for (let i = 0;i <= nums.length-k;i++) {
        let max = Math.max(...nums.slice(i,i+k))
        arr.push(max)
    }
    return arr
};
let nums = [1,3,-1,-3,5,3,6,7]
let k = 3
console.log(maxSlidingWindow(nums,k))
