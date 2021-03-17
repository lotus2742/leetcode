/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
 var num = [...new Set(nums)]
 var len = num.length
 for (let i = 0;i < num.length;i++){
  nums[i] = num[i]
 }
 nums.splice(len,nums.length)
 var number = num.length
 return number
};


console.log(removeDuplicates([1,1,2]))
