var summaryRanges = function(nums) {
    if (nums.length === 0) {
        return [];
    }
    let sol = [];
    let head = nums[0];
    for (let i = 1; i < nums.length; i++) {
        let current = nums[i];
        if (current !== nums[i-1] + 1) {
            let str = head.toString();
            if (nums[i-1] !== head) {
                str += "->" + nums[i-1].toString();
            }
            sol.push(str);
            head = current;
        }
    }
    let lastNum = nums[nums.length - 1];
    if (lastNum !== head) {
        sol.push(head.toString() + "->" + lastNum.toString());
    } else {
        sol.push(head.toString());
    }
    return sol;
};
