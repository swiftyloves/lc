/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    let head = 0;
    let tail = nums.length - 1;
    
    while (head <= tail && head >= 0 && tail < nums.length) {
        let middle = Math.floor((head + tail) / 2);
        if (nums[middle] > target) {
            tail = middle - 1;
        } else if (nums[middle] < target) {
            head = middle + 1;
        } else if (nums[middle] === target) {
            return middle;
        }
        if (nums[head] > target) {
            return head;
        }
        if (nums[tail] < target) {
            return tail + 1;
        }
    }
};
