/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * Encodes a tree to a single string.
 *
 * @param {TreeNode} root
 * @return {string}
 */

const symmetricalTree = {
    val: 8,
    left: {
        val: 6,
        left: { val: 5, left: null, right: null },
        right: { val: 7, left: null, right: null }
    },
    right: {
        val: 6,
        left: { val: 7, left: null, right: null },
        right: { val: 5, left: null, right: null }
    }
}
var arr = [ 8, 6, 5, '#', '#', 7, '#', '#', 6, 7, '#', '#', 5, '#', '#' ]
console.log(arr.join(',').split(',').shift())

var serialize = function(root,arr=[]) {
    let rootNode = root
    let left = rootNode.left
    let right = rootNode.right
    if (!root) {
        arr.push('#')
    } else {
        arr.push(root.val)
        serialize(left,arr)
        serialize(right,arr)
    }
    return arr
};
let aaa = ('1','#','2')
aaa.split(',').map(it => {
    if (it !== '#') {
        it = +it
        console.log(it,'aaa')
    }
})

console.log(parseInt(('1,2,3').split(',')))
/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */
//
//

var Deser = function (arr) {
    let node = null;
    const current = arr.shift();
    if (current !== null) {
        node = {val: current};
        arr.push(node.val)
        node.left = deserialize(arr);
        node.right = deserialize(arr);
    } else {
        arr.push(null)
    }
    return arr;
}

var deserialize = function(data) {
    if (!data) {
        return null
    } else {
        return Deser(data.split(','))
    }

};

console.log(deserialize(serialize(arr)))

/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */
