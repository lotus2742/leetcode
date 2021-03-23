// // 声明父类
// function inheritobject (id) {
//     // 声明一个过渡函数对象
//     function pattern() {}
//
//     // 过渡对象的原型继承父类对象
//     pattern.prototype = id
//
//     // 返回过渡对象的实例，该实例原型继承了父对象
//     return new pattern()
// }
// /*
// * subclass: 子类  superclass: 父类
// * */
// function inheritprototype(subclass, superclass) {
//    // 缓存父类原型
//    var p = inheritobject(subclass.prototype)
//
//     // 修正子类的constructor
//     p.constructor = subclass
//
//     // 设置子类的原型
//
//     subclass.prototype = p
// }
//
//
// var book = {
//     name: '123'
// }
//
// function createBook(obj) {
//     // 通过原型继承方式创建新对象
//     var o = new Book(obj)
//
//     // 拓展新对象
//     o.getName = function(){}
//
//     // 返回拓展后的新对象
//     return o
//
// }
//
// //  为父类添加方法
// Book.prototype.getName = function () {
//     return this.name
// }
//
// // 声明子类
// function pattern(id) {
//     Book.call(this,id)
// }
// // 继承父类
// pattern.prototype = new Book()
//
// //为子类添加方法
// pattern.prototype.getPattern = function () {
//     return this.patternCom
// }
//
//
//
// const log = (callback) => {
//     log.count = log.count || 0
//     const count = log.count++
//
//     setTimeout(()=>{
//         console.log(count)
//         callback && callback()
//     }, Math.random()* 1000%10)
// }
//
// // let i = 0
// // log(async () => {
// //     for (let i = 0; i < 100; i++) {
// //         // console.log(i, 'count')
// //         await log()
// //     }
// //
// // })
//
// let count = 0
//
// async function f() {
//     if (count > 100) return
//
//     // await log()
//
//     count++
//
//     return log(f)
// }
//
// f()

//  统计某一字符或字符串在另一个字符串中出现的次数
//
// let count = 0
//
// function statics(str1, str2) {
//     if (str2.indexOf(str1) > -1) {
//         count++
//         let length = str2.indexOf(str1) + str1.length
//         statics(str1, str2.substring(length))
//     }
//
//     return count
//
// }
//
// console.log(statics('12', '123456129899921121212222112'))
//
// var codeStr = (method, str) => {
//     var hit = method == 'encodeStr' ? '*' : '/';
//     return [...str].map((item) => {
//         return String.fromCharCode(eval(item.charCodeAt() + hit + 10));
//     }).join('');
// }
// console.log(codeStr('decodeStr', 'ጤᎈᏬᏬጤᎈᎈጤᏬ'));
// 写一个判断数据类型的方法

// function type(v) {
//     let t = ''
//     if (typeof v === 'object') {
//         t = Array.isArray(v) ? 'array' : (v ? 'object' : 'null')
//     } else {
//         t = typeof v
//     }
//
//     return t
// }
//
//
// console.log(type(111))
//
//
// function myType(v){
//     return Object.prototype.toString.call(v).replace(/^.{8}(.+)]$/,(m,$1)=> $1.toLowerCase());
// }
//
// console.log(myType({}))

//写一个获取当前url查询字符串中的参数的方法

// function f(url) {
//     let params = {}
//     let idx = url.indexOf('?')
//     let pStr = ''
//
//     if (idx > -1) {
//         pStr = url.substring(idx+1)
//         pStr.split('&').map(i=>{
//             params[i.substring(0, i.indexOf('='))] = i.substring(i.indexOf('=')+1)
//         })
//     }
//
//     return params
// }
//
// console.log(f('http://localhost:9081/#/redLine/whitelist?from=bread'))
// 快速排序 [6 1 2 7 9 3 4 5 10 8]

function f(a) {

    quickSort(0, a.length - 1)

    function quickSort(left, right) {
        let i = left  // 左哨兵
        let j = right
        let temp = a[left]  // 用temp将基准数存起来

        if (i > j) return


        while (i !== j) {
            while (temp <= a[j] && i < j) j--
            while (temp >= a[i] && i < j) i++

            if (i < j) {
                let t = a[i]

                a[i] = a[j]

                a[j] = t
            }

        }
        // 左右哨兵走到一起 将当前数和基准数交换

        a[left] = a[i]

        a[i] = temp

        quickSort(left, i - 1)
        quickSort(i + 1, right)
    }

    return a
}

console.log(f([6, 1, 2, 7, 9, 3, 4, 5, 10, 8]))

// 归并

function sortMerge(arr, left, right, temp) {
    if (left < right) {
        const mid = Math.floor((right + left) / 2)

        sortMerge(arr, left, mid, temp)
        sortMerge(arr, mid + 1, right, temp)

        merge(arr, left, mid, right, temp)
    }
}

function merge(arr, left, mid, right, temp) {
    let index = 0

    let i = left

    let j = mid + 1


    while (i <= mid && j <= right) {
        if (arr[i] <= arr[j]) {
            temp[index++] = arr[i++]
        } else {
            temp[index++] = arr[j++]
        }
    }

    while (i <= mid) {
        temp[index++] = arr[i++]
    }

    while (j <= right) {
        temp[index++] = arr[j++]
    }

    // console.log(temp)

    index = 0

    while (left <= right) {
        arr[left++] = temp[index++]
    }

}

function ff3() {
    let a = [6, 1, 2, 7, 9, 3, 4, 5, 10, 8]
    sortMerge(a, 0, 9, [])
    return a
}

console.log(ff3())


// heapSort  升大降小

function heapSort(arr) {
    // 调整堆
    let i = Math.floor(arr.length / 2) - 1

    let j = arr.length - 1

    while (i >= 0) {
        adjustHeap(arr, i, arr.length)

        i--
    }

    // 调换

    while (j > 0) {
        swap(arr, 0, j)
        adjustHeap(arr, 0, j)
        j--
    }
}

function adjustHeap(arr, i, length) {
    let temp = arr[i]  // 先把最后一个非叶子节点保存
    let position = 2 * i + 1  // 该非叶子节点的左子节点

    while (position < length && position + 1 < length) {
        if (arr[position] < arr[position + 1]) {
            position++
        }
        if (arr[position] > temp) {
            arr[i] = arr[position]
            i = position
        } else {
            break
        }

        position = 2 * position + 1
    }

    arr[i] = temp

}

function swap(arr, a, b) {
    let temp = arr[b]
    arr[b] = arr[a]
    arr[a] = temp
}

function f1() {
    let a = [6, 1, 2, 7, 9, 3, 4, 5, 10,8, 8]
    heapSort(a)
    return a
}

console.log(f1())



