/**
 * 输入：A = [[0,2],[5,10],[13,23],[24,25]],
 * B = [[1,5],[8,12],[15,24],[25,26]]
 * 输出：[[1,2],[5,5],[8,10],[15,23],[24,24],[25,25]]
 */

const A = [[0,2],[5,10],[13,23],[24,25]]
const B = [[1,5],[8,12],[15,24],[25,26]]

var intervalIntersection = function(A, B) {
    var c = []
    for (let i = 0;i < A.length;i++){
        if (A[i][0] <= B[i][1] && A[i][1] >= B[i][0]){
            c.push([B[i][0],A[i][1]])
        }
    }
    return c
};

console.log(intervalIntersection(A,B))
