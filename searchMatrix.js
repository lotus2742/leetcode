/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 //  */
// var searchMatrix = function (matrix, target) {
//     let maxtrixRow = matrix.length
//     if (matrix === null || maxtrixRow === 0) return false
//     for (let i = 0;i < maxtrixRow;i++) {
//         for (let j = matrix[i].length-1;j >= 0;j--) {
//             if (target === matrix[i][j]) {
//                 return true
//             }
//         }
//     }
//     return false
// };

var searchMatrix = function (matrix, target) {
    let maxtrixRow = matrix.length
    if (matrix === null || maxtrixRow === 0) return false

    let mareixCol = matrix[0].length
    let i = 0, j = mareixCol-1
    while (i < maxtrixRow && j >= 0) {
        if (target === matrix[i][j]) return true
        if (target > matrix[i][j]) {
            i++
        } else {
            j--
        }
    }

    return false
};

let matrix = [
    [1, 4, 7, 11, 15],
    [2, 5, 8, 12, 19],
    [3, 6, 9, 16, 22],
    [10, 13, 14, 17, 24]
]


// let matrix = []
// console.log(matrix.length)

console.log(searchMatrix(matrix, 18))
