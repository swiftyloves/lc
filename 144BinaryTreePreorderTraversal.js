// No need to decompression since push self first ...
var preorderTraversal = function(root) {
    let node = root;
    let sol = [];
    let stack = [];
    stack.push(root);
    while (stack.length > 0) {
        let node = stack.pop();
        if (node === null) { continue; }
        sol.push(node.val);
        stack.push(node.right);
        stack.push(node.left);
    }
    return sol;
};

// Recursion
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
