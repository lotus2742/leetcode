/**
 * @param {number} n - a positive integer
 * @return {number} - a positive integer
 */
var reverseBits = function(n) {
    n = parseInt(n,2)
    console.log(n)
    n = n+''

    var arr = n.split('')

    let head = 0
    let tail = arr.length - 1
    for (head = 0; head < Math.floor(arr.length / 2); head++) {
        if (arr[head] != arr[tail]) {
            let temp = arr[head]
            arr[head] = arr[tail]
            arr[tail] = temp
        }
        tail--
    }
    n = arr.join("")
    n = +n
    return n
};


console.log(reverseBits(00000010100101000001111010011100))
