var getRow = function(rowIndex) {
    rowIndex = rowIndex+1
    let arr = new Array(rowIndex)
    for (let i = 0;i < rowIndex;i++) {
        arr[i] = new Array(i)
        for (let j = 0;j < i+1; j++) {
            if (i == 0 || j == 0 || j == i) {
                arr[i][j] = 1
            } else {
                arr[i][j] = arr[i - 1][j - 1] + arr[i - 1][j]
            }
        }
    }
    let row = arr[rowIndex-1]
    return row
};

console.log(getRow(3))
