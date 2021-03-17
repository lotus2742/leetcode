/**
 * @author Renlingling
 * @date 2019-07-29
 * @Description:
*/
var sortColors = function(nums) {
    let zero = 0
    let one = 0
    let lenth = nums.length
    let arr = []
    for (let i = 0;i < nums.length;i++){
        if (nums[i] === 0){
            zero++
        } else if (nums[i] === 1) {
            one++
        }
    }
    let two = lenth-zero-one
    for (let j = 0;j < zero;j++){
        for (let z = 0;z < zero;z++){
            nums[z] = 0
        }
    }
    for (let m = 0;m < one;m++){
        for (let o = zero;o < zero+one;z++){
            nums[o] = 1
        }
    }
    for (let n = 0;n < two;n++){
        for (let t = zero+one;t < lenth;t++){
            nums[t] = 2
        }
    }
    return{}
};

// var sortColors = function(nums) {
//     let zero = 0
//     let one = 0
//     let lenth = nums.length
//     let arr = []
//     for (let i = 0;i < nums.length;i++){
//         if (nums[i] === 0){
//             zero++
//         } else if (nums[i] === 1) {
//             one++
//         }
//     }
//     let two = lenth-zero-one
//     for (let j = 0;j < zero;j++){
//         arr.push(0)
//     }
//     for (let m = 0;m < one;m++){
//         arr.push(1)
//     }
//     for (let n = 0;n < two;n++){
//         arr.push(2)
//     }
//     nums = arr
//     return{}
// };

var sortColors = function(nums) {
    let zero = 0
    let two = nums.length-1

    for (let i = 0;i <= two;i++){
        if (nums[i] === 0) {
            let temp = nums[i]
            nums[i] = nums[zero]
            nums[zero] = temp
            zero++
        }else if (nums[i] === 2) {
            let temp = nums[i]
            nums[i] = nums[two]
            nums[two] = temp

            i--
            two--
        }
    }

    return nums
}


console.log(sortColors(
    [2,0,1]))
