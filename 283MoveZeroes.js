var moveZeroes = function(nums) {
    let index = 0;
    for (let i = 1; i < nums.length; i++) {
        if (nums[i] !== 0) {
            nums[index] = nums[i];
            index += 1;
        }
    }
    for (; index < nums.length; index++) {
        nums[index] = 0;
    }
}
