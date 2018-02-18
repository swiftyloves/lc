let traverse = function(node, k) {
    if (node === null) { return [k, null]; }
    let pair = traverse(node.left, k);
    if (pair[0] === 0) {
        return pair;
    }
    pair[0] = pair[0] - 1;
    if (pair[0] === 0) {
        return [pair[0], node.val];
    }
    return traverse(node.right, pair[0]);
};
var kthSmallest = function(root, k) {
    return traverse(root, k)[1];
};
