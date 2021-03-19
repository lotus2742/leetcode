// 从大到小排列
// 1、冒泡
function bubbleSort(a, length) {
    let i = 0
    while (i < length - 1) {
        if (a[i] < a[i + 1]) {
            let temp = a[i]
            a[i] = a[i + 1]
            a[i + 1] = temp
        }
        i++
    }
}




// 快排
function quickSort(arr, left, right) {
    if (left < right) {
        let base = arr[left]  // 基准数

        let i = left
        let j = right

        while (i != j) {
            while (j <= base && j > i) j--
            while (i >= base && j > i) i++


            if (i < j) {
                let t = arr[i]
                arr[i] = arr[j]
                arr[j] = t
            }
        }

        arr[left] = arr[i]
        arr[i] = base

        quickSort(arr, left, i)
        quickSort(arr, i+1, right)
    }

}

function f() {
    let arr = [3, 2, 62, 3, 435, 4]
    // let length = arr.length
    //
    // while (length > 1) {
    //     bubbleSort(arr, length)
    //
    //     length--
    // }

    quickSort(arr, 0, arr.length - 1)

    return arr

}

console.log(f())
