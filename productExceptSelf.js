/**
 * @param {number[]} nums
 * @return {number[]}
 */
// var productExceptSelf = function (nums) {
//     var index = 0
//     var result = 1
//     var number = []
//     var temp = []
//     for (let j = 0; j < nums.length; j++) {
//         temp[j] = nums[j]
//     }
//     for (let i = 0; i < temp.length; i++) {
//         temp[index] = 1
//         result *= temp[i]
//         if (i == temp.length - 1 && index == temp.length-1) {
//             number.push(result)
//             break
//         }
//         if (i == temp.length - 1 && index < temp.length - 1) {
//             number.push(result)
//             temp[index] = nums[index]
//             result = 1
//             index++
//             i = -1
//         }
//
//     }
//     return number
// };

// var productExceptSelf = function (nums) {
//     var number = []
//     var index = 0
//     var result = 1
//     for (let i = 0;i < nums.length;i++) {
//
//         if (index == i) {
//             if (i == nums.length-1){
//                 number.push(result)
//                 break
//             } else {
//                 i++
//             }
//
//         }
//         result *= nums[i]
//         if (i == nums.length - 1 && index <= nums.length-1) {
//             number.push(result)
//             result = 1
//             index++
//             i=-1
//         }
//     }
//     return number
// };

var productExceptSelf = function (nums) {
    let result = new Array(nums.length);
    result[0] = 1;
    let tail = 1;

    for (let i = 1; i < nums.length; i++) {
        result[i] = nums[i - 1] * result[i - 1];
    }

    for (let i = nums.length - 1; i >= 0; i--) {
        result[i] = result[i] * tail;
        tail *= nums[i];
    }

    return result;
};


console.log(productExceptSelf([1,0,0]))
