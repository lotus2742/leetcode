/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function(nums1, nums2) {
    let newArr = []

    if (nums1.length <= nums2.length ) {
        newArr = computedNums(nums1, nums2)
    } else {
        newArr = computedNums(nums2, nums1)
    }



    return newArr

};

var computedNums = function(nums1, nums2) {
    let arr = []
    let obj1 = {}


    nums1.map(v=>{
        obj1[v] = obj1[v] ? obj1[v] + 1 : 1
    })

    nums2.map(v=>{
        if (obj1[v] && obj1[v]>0) {
            obj1[v]--
            arr.push(v)
        }
    })


    return arr
}

console.log(intersect([1,2,3,1,89,9,5],[2,2]))
