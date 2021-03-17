/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {
    if (nums.length === 1 || nums.length === k) return nums
    if (nums.length > k) {
       this.computedNums(nums, k)
    }

    if (nums.length < k) {
       this.computedNums(nums, k-nums.length)
    }
};

var computedNums = function (nums, k) {
    let lgt = nums.length - k

    let arr = nums.slice(0, lgt)

    for(let i = nums.length-k; i < nums.length;i++) {
        nums[i-nums.length+k] = nums[i]
    }
    arr.map((v,index)=>{
        nums[index+k] = v
    })

    return nums
}

