/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function (nums) {
    let newArr = []

    for(let i =0;i < nums.length;i++) {
        if (newArr.indexOf(nums[i]) === -1) {
            newArr.push(nums[i])
        } else {
            newArr.splice(newArr.indexOf(nums[i]),1)
        }
    }

    return newArr[0]

};
console.log(singleNumber([2, 2, 1]))
