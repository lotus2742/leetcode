const tree = {
    data: 1,
    left: {
        data: 2,
        left: {
            data: 4,
            left: {
                data: 8,
            },
            right: {
                data: 9
            }
        },
        right: {
            data: 5,
            left: {
                data: 10,
            },
            right: {
                data: 11
            }
        }
    },
    right: {
        data: 3,
        left: {
            data: 6,
            left: {
                data: 12
            }
        },
        right: {
            data: 7
        }
    }
}

// 前序
function DLR(tree) {
    let output = []

    function loopTree(node) {
        if (node) {
            output.push(node.data)
            if (node.left) loopTree(node.left)
            if (node.right) loopTree(node.right)
        }
    }

    loopTree(tree)

    return output
}

// 中
function LDR(tree) {
    let output = []

    function loopTree(node) {
        if (node.left) loopTree(node.left)
        output.push(node.data)
        if (node.right) loopTree(node.right)
    }

    loopTree(tree)

    return output
}

// 后
function LRD(tree) {
    let output = []

    function loopTree(node) {
        if (node.left) loopTree(node.left)
        if (node.right) loopTree(node.right)
        output.push(node.data)
    }

    loopTree(tree)

    return output
}


// 广度优先
function BFS() {
    let output = []
    let queue = []

    function loopTree(node) {
        if (node) {
            output.push(node.data)
            if (node.left) queue.unshift(node.left)
            if (node.right) queue.unshift(node.right)

            loopTree(queue.pop())
        }
    }

    loopTree(tree)

    return output
}

// 树的深度
function getTreeDepth(tree) {

    function computed(node) {
        let leftDepth = 0
        let rightDepth = 0
        if (node) {
            if (node.left) leftDepth = computed(node.left)

            if (node.right) rightDepth = computed(node.right)

            console.log(leftDepth, rightDepth, node, node.left, node.right)

            return Math.max(leftDepth, rightDepth) + 1
        }
    }

    return computed(tree)
}


function DLRNonRes(tree) {
    let res = []
    let stack = []
    while (tree || stack.length > 0) {
        while (tree) {
            res.push(tree.data)

            stack.push(tree)

            tree = tree.left
        }
        tree = stack.pop()
        tree = tree.right
    }

    return res
}

function LDRNonRes(tree) {
    let res = []
    let stack = []

    while (tree || stack.length > 0) {
        while (tree) {
            stack.push(tree)

            tree = tree.left
        }

        tree = stack.pop()

        res.push(tree.data)

        tree = tree.right

    }

    return res
}

function LRDNonRes(tree) {
    let res = []
    let stack = []

    while (tree || stack.length > 0) {
        while (tree) {
            stack.push(tree)
            res.push(tree.data)
            tree = tree.right
        }

        tree = stack.pop()
        tree = tree.left
    }

    res = res.reverse()

    return res
}

function BFSNonRes(tree) {
    let res = []
    let queue = []

    while (tree || queue.length > 0) {

        res.push(tree.data)

        // console.log(tree.data)

        tree.left && queue.unshift(tree.left)
        tree.right && queue.unshift(tree.right)

        tree = queue.pop()
    }

    return res
}

// console.log(DLRNonRes(tree))
// console.log(LDRNonRes(tree))
// console.log(LRDNonRes(tree))
console.log(BFSNonRes(tree))


// console.log(DLR(tree))
// console.log(LDR(tree))
// console.log(LRD(tree))
console.log(BFS(tree))
//
// console.log(getTreeDepth(tree))


