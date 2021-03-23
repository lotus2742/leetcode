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

console.log(DLR(tree))
console.log(LDR(tree))
console.log(LRD(tree))
