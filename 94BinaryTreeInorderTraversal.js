// Iterative -- single while loop
/* If node had left, push self to stack, move to left;
   After pop the node from stack, move to the right
*/
var inorderTraversal = function(root) {
    let stack = [];
    let node = root;
    let sol = [];
    while (stack.length > 0 || node !== null) {
        if (node !== null) {
            stack.push(node);
            node = node.left;
        } else {
            node = stack.pop()
            sol.push(node.val);
            node = node.right;
        }
    }
    return sol;
}
// Iterative -- two while loop
var inorderTraversal = function(root) {
    let stack = [];
    let sol = [];
    let node = root;
    while (stack.length > 0 || node !== null) {
        while (node !== null) {
            stack.push(node);
            node = node.left;
        }
        node = stack.pop();
        sol.push(node.val);
        node = node.right;
    }
    return sol;
};

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
