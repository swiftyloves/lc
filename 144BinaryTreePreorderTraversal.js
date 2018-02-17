let preorder = function(node, arr) {
    if (node === null) { return; }
    arr.push(node.val);
    preorder(node.left, arr);
    preorder(node.right, arr);
};
var preorderTraversal = function(root) {
    let sol = [];
    preorder(root, sol);
    return sol;
};
