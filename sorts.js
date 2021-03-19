// 从大到小排列
// 1、冒泡
 function bubbleSort(a, length) {
    let i = 0
     while (i < length - 1) {
        if (a[i] < a[i+1])  {
            let temp = a[i]
            a[i] = a[i+1]
            a[i+1] = temp
        }
        i++
     }
 }

 function f() {
     let arr = [3,2,62,3,435,4]
     let length = arr.length

     while (length > 1) {
         bubbleSort(arr, length)

         length--
     }

     return arr

 }


 console.log(f())

// 快排
function quickSort(arr, left, right) {
   let base = arr[left]  // 基准数

    let i = left
    let j = right





}
