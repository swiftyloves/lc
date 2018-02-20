// calculate digit by digit. In each digit, count how many 1 and how many 0. 
// The muliplication of these two numbers are the sum of distance 
var totalHammingDistance = function(nums) {
    let max = Math.log(Math.pow(10, 9)) / Math.log(2);
    let sol = 0;
    for (let i = 0; i <= max; i++) {
        let oneCount = 0;
        for (let j = 0; j < nums.length; j++) {
            let num = nums[j];
            oneCount += num & 1;
            nums[j] = num >> 1;
        }
        sol += oneCount * (nums.length - oneCount);
    }
    return sol;
};

// O(n^2 * k) 

var totalHammingDistance = function(nums) {
    let sol = 0;
    let max = Math.log(Math.pow(10, 9)) / Math.log(2);
    for (let i = 0; i < nums.length; i++) {
        let first = nums[i];
        for (let j = i + 1; j < nums.length; j++) {
            let second = nums[j];
            let diff = first ^ second;
            for (; diff; sol++) {
                diff &= diff - 1;
            }
        }
    }
    return sol;
};

/*
Cauculate how many 1 in x by AND x-1 each time

    int count;
    for (count=0; x; count++)
        x &= x - 1;
    return count;

*/
