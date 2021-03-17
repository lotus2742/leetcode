/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function(s) {
    let lgt = s.length

    let half = Math.floor(lgt/2)

    for(let i =  0;i < half;i++) {
        let temp = s[i]
        s[i] = s[lgt-i-1]
        s[lgt-i-1] = temp
    }

    return s
};

let arr = ["H","a","n","n","a","h"]

console.log(reverseString(arr))
