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
            while (arr[j] <= base && j > i) j--
            while (arr[i] >= base && j > i) i++


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

// 归并
function sortM(arr, left, right, temp) {

    if (left < right) {
        let mid = Math.floor((left + right)/2)

        sortM(arr, left, mid, temp)
        sortM(arr, mid+1, right, temp)
        merge(arr, left, mid, right, temp)
    }



}
function merge(arr, left, mid, right, temp) {
    let i = left
    let j = mid+1
    let index = 0

    while (i <= mid && j <=right)  {
        if (arr[i] <= arr[j]) {
            temp[index++] = arr[j++]
        } else {
            temp[index++] = arr[i++]
        }
    }

    while (i <=mid ) {
        temp[index++] = arr[i++]
    }

    while (j <= right) {
        temp[index++] = arr[j++]
    }

    index = 0

    while (left <= right) {
        arr[left++] = temp[index++]
    }
}

// 堆排
function heapSort(arr) {
    let node = Math.floor(arr.length / 2) -1

    let j = arr.length -1

    while (node >= 0) {  // 调整堆
        adjustHeap(arr, node, arr.length)
        node--
    }

    while (j > 0) {
        swapSort(arr, 0, j)
        adjustHeap(arr, 0, j)

        j--
    }

}

function adjustHeap(arr, i, length) {
    let position = 2 * i + 1

    let temp = arr[i]

    while (position < length && position + 1 < length) {
        if (arr[position] > arr[position+1]) {
            position++
        }

        if (temp > arr[position]) {
            arr[i] = arr[position]

            i = position
        }

        position = 2 * position + 1
    }

    arr[i] = temp
}

function swapSort(arr, i, j) {
    let temp = arr[i]
    arr[i] = arr[j]
    arr[j] = temp

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

    // quickSort(arr, 0, arr.length - 1)

    // sortM(arr, 0, arr.length-1, [])

    heapSort(arr)
    return arr

}
const a = 1

console.log(f(), this)
