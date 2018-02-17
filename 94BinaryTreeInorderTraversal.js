let inorder = function (node, arr) {
    if (node.left !== null) {
        inorder(node.left, arr);
    }
    arr.push(node.val);
    if (node.right !== null) {
        inorder(node.right, arr);
    }
};
var inorderTraversal = function(root) {
    if (root === null) {
        return [];
    }
    let sol = [];
    inorder(root,sol);
    return sol;
};
