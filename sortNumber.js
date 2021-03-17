const sort = function (a,b) {
    return a-b
}

const a = [5,4,3,2,1]
a.sort()

console.log(a.sort())
var quickSort = function (arrs,l,r) {
    if(l < r) {
        let key = arrs[l]
        let low = l
        let high = r
        while (low <= high) {
            while (low <= high && arrs[high] >= key)
                high++
            arrs[low] = arrs[high]
            while (low <= high && arrs[low] <= key)
                low++
            arrs[high] = arrs[low]
                }
        quickSort(arrs,l,low)
        quickSort(arrs,low+1,r)
    }

}

// var sortArray = function(nums) {
//     if (nums.length < 2) {
//         return nums
//     }
//     let num = nums
//     let newNumber = nums.splice(num,1)
//     // let left = [], right = []
//     for (let i = 0;i < nums.length;i++) {
//        if (nums[i] < newNumber) {
//            left.push(nums[i])
//        } else {
//            right.push(nums[i])
//        }
//     }
//     return sortArray(left).concat(newNumber,sortArray(right))
// };



var sortArray = function (nums) {
    let low = 0
    let high = nums.length
    let key = nums[low]
    while (low < high) {
        while (low < high && nums[high] >= key) {
            high--;
        } if (low <high) {
            nums[low] = nums[high]
        }
        while (low < high && nums[low] <= key) {
            low++
        } if (low < high) {
            nums[high] = nums[low]
        }
    }
    nums[low] = key

    sortArray(nums)
}

console.log(quickSort([34,2,10,6,8]))


// void  quickSort(int *arrs,int l,int r) {
//     if(l < r) {
//         int key = arrs[l];
//         int low = l;
//         int high = r;
//         while (low < high) {
//             while (low < high && arrs[high] >= key)
//                 high--;
//             if(low < high)
//                 arrs[low] = arrs[high];
//             while (low < high && arrs[low] <= key)
//                 low++;
//             if(low < high)
//                 arrs[high] = arrs[low];
//         }
//         arrs[low] = key;
//
//         quickSort(arrs,l,low);
//         quickSort(arrs,low+1,r);
//     }
// }
