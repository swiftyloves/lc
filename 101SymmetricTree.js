/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
let isMirrow = function(a, b) {
    if (a == null && b == null) {
        return true;
    }
    if (a == null || b == null) {
        return false;
    }
    return (a.val == b.val) && isMirrow(a.left, b.right) && isMirrow(a.right, b.left);
};
var isSymmetric = function(root) {
    if (root == null) {
        return true;
    }
    
    return isMirrow(root.left, root.right);
    
};
