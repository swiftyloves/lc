/**
 * @param {number[]} nums
 * @return {number}
 */
let findPeakBetween = function(nums, head, tail) {
    if (head === tail) {
        return tail;
    }
    let middle = Math.floor((head + tail) / 2);
    let candidate1 = findPeakBetween(nums, head, middle);
    let candidate2 = findPeakBetween(nums, middle + 1, tail);
    if (nums[candidate1] > nums[candidate2]) {
        return candidate1;
    } else {
        return candidate2;
    }
};
var findPeakElement = function(nums) {
    return findPeakBetween(nums, 0, nums.length - 1);
};

