/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
let composeArr = function(node, sequence) {
    let left = "";
    let right = "";
    if (node.left !== null) {
        left = composeArr(node.left, (sequence + 1) % 2);
    }
    if (node.right !== null) {
        right = composeArr(node.right, (sequence + 1) % 2);
    }
    let arr = [[node.val]];
    
    let len = Math.min(left.length, right.length);
    for (let i = 0; i < len; i++, sequence++) {
        if ((sequence + 1) % 2 == 0) {
            arr.push(left[i].concat(right[i]));
        } else {
            arr.push(right[i].concat(left[i]));
        }
    }
    if (left.length > len) {
        for (let j = len; j < left.length; j++) {
            arr.push(left[j]);
        }
    } else if (right.length > len) {
        for (let j = len; j < right.length; j++) {
            arr.push(right[j]);
        }
    }

    return arr;
};
var zigzagLevelOrder = function(root) {
    if (root == null) {return [];}
    
    return composeArr(root, 0);
    
};
