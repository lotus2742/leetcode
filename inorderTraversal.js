/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var inorderTraversal = function(root) {
    var res=[];
    inorder(root,res);
    return res;
};

function inorder(root,res){
    if(!root) return ;
    inorder(root.left,res);
    res.push(root.val);
    inorder(root.right,res);
}

console.log(inorderTraversal([1,null,3,2]))
