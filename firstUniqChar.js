/**
 * @param {string} s
 * @return {number}
 * 给定一个字符串，找到它的第一个不重复的字符，并返回它的索引。如果不存在，则返回 -1。
 */
var firstUniqChar = function(s) {
    let arr = s.split('')

    let obj = {}

    for(let i = 0;i < arr.length;i++) {
        obj[arr[i]] = obj[arr[i]] ? {count: obj[arr[i]].count+1, index: i}: {count: 1, index: i}

    }

    for(let j = 0;j < Object.keys(obj).length;j++) {
        let v = Object.keys(obj)[j]
        if (obj[v].count === 1) {
            return obj[v].index
        }
    }

    return -1
};

let s = "cc"

console.log(firstUniqChar(s))
