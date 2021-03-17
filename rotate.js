/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function(matrix) {
    let lenth = matrix.length
    for (let i =0;i < lenth;i++) {
        for (let j =i;j < lenth;j++) {
            if (i != j) {
                let temp = matrix[i][j]
                matrix[i][j] = matrix[j][i]
                matrix[j][i] = temp
            }
        }
        for (let m = 0;m < Math.ceil((lenth-1)/2);m++) {
            let temp = matrix[i][m]
            matrix[i][m] = matrix[i][lenth-1-m]
            matrix[i][lenth-1-m] = temp
        }

    }
    return matrix
};

var matrix =
    [
        [1,2,3],
        [4,5,6],
        [7,8,9]
    ]
console.log(rotate(matrix))
