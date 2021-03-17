/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
    let arr = s.split('')
    let count = 0
    arr = switchNum(arr)
    for (let index = 0;index< arr.length;index++) {
        if (arr.length > 1 && index < arr.length-1) {
            if ( arr[index+1] > arr[index]) {
                count += (arr[index+1]-arr[index])
                index++
            } else {
                count += arr[index]
            }
        } else if (index === arr.length-1 && arr[index-1] >= arr[index]) {
            count += arr[index]
        } else if (arr.length === 1) {
            count = arr[0]
        }
    }
    return count
};

function switchNum(arr) {
    arr = arr.map(item => {
        let number = null
        switch (item) {
            case 'I':
                number = 1
                break;
            case 'V':
                number = 5
                break;
            case "X":
                number = 10
                break;
            case "L":
                number = 50
                break;
            case "C":
                number = 100
                break;
            case "D":
                number = 500
                break;
            case "M":
                number = 1000
                break;
        }
        return number
    })
    return arr
}

let str = "D"
// let str = "MDCXCV"
console.log(romanToInt(str))
