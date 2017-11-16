/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {TreeNode}
 */
let _composeBST = function(head, end_node) {
    if (head == null || head == end_node) {return null;}
    if (head.next == null || head.next == end_node) {
        return new TreeNode(head.val);
    }

    let node = head;
    let count = 1;
    while (node.next !== null && node.next !== end_node) {
        count += 1;
        node = node.next;
    }

    let mid = Math.floor((count) / 2) + 1;
    node = head;
    let mid_node = node
    count = 1
    while (node.next !== null) {
        node = node.next;
        if (node == end_node) {break;}
        count += 1;
        if (count == mid) {
            mid_node = node
            break;
        }
        
    }
    let root = new TreeNode(mid_node.val);
    root.right = composeBST(mid_node.next, end_node);
    root.left = composeBST(head, mid_node);
    
    return root;
}

// num: 5
// head: 12345
// leftSize: 2
// left_obj
//      1 
// null   2
//  345

// root => 3

//       4
// null    5
// null

//   3
// 2   5
//1   4

let __composeBST = function(head, num) {
    if (num == 0) {
        return {"treeRoot": null, "linkedList": head};
    }
    if (num == 1) {
        return {"treeRoot": new TreeNode(head.val), "linkedList": head.next};
    }
    let leftSize = Math.floor((num - 1)/2);

    let left_obj = composeBST(head, leftSize);
    let root = new TreeNode(left_obj.linkedList.val);
    let right_obj = composeBST(left_obj.linkedList.next, num - 1 - leftSize);
    
    root.left = left_obj.treeRoot;
    root.right = right_obj.treeRoot;
    
    return {"treeRoot": root, "linkedList": right_obj.linkedList};
};


let composeBST = function(headObj, num) {
    if (num == 0) {
        return null;
    }
    if (num == 1) {
        let head = headObj.linkedList;
        headObj.linkedList = headObj.linkedList.next;
        return new TreeNode(head.val);
    }
    let leftSize = Math.floor((num - 1)/2);

    let leftTree = composeBST(headObj, leftSize);
    let root = new TreeNode(headObj.linkedList.val);
    headObj.linkedList = headObj.linkedList.next;
    let rightTree = composeBST(headObj, num - 1 - leftSize);
    
    root.left = leftTree;
    root.right = rightTree;

    return root;
};


var sortedListToBST = function(head) {
    let node = head;
    let count = 0;
    while (node !== null) {
        count += 1;
        node = node.next;
    }
    // return composeBST(head, count).treeRoot;
    return composeBST({"linkedList": head}, count);
};