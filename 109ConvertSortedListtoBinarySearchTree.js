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
let composeBST = function(head, end_node) {
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

var sortedListToBST = function(head) {
    if (head == null) {return null;}
    return composeBST(head, null)
};
