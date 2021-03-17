/**
 * @param {number[]} nums
 * @return {number[]}
 */
var countSmaller = function (nums) {
    var counts = []
    var index = 0
    var times = 0
    if (nums.length == 0) {
        return counts
    }
    for (let i = index + 1; i < nums.length; i++) {
        if (nums[index] > nums[i]) {
            times++
        }
        if (i == nums.length - 1) {
            index++
            i = index
            counts.push(times)
            times = 0
        }
    }
    counts[counts.length](0)
    return counts
};

console.log(countSmaller([5, 2, 6, 1]))
