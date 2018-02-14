let buildTree = function(nums) {
    if (nums.length === 0) {
        return null;
    }
    let mid = Math.floor(nums.length/2); // bug here... should use floor, not ceil
    let mid_node = new TreeNode(nums[mid]) // bug here...mid is the index, not number
    mid_node.left = buildTree(nums.slice(0, mid));
    mid_node.right = buildTree(nums.slice(mid + 1));
    return mid_node;
};

var sortedArrayToBST = function(nums) {
    return buildTree(nums);
};

