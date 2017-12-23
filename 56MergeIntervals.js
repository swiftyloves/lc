/**
 * Definition for an interval.
 * function Interval(start, end) {
 *     this.start = start;
 *     this.end = end;
 * }
 */
/**
 * @param {Interval[]} intervals
 * @return {Interval[]}
 */
let sortByFirst = function(a, b) {
    if (a.start < b.start) {
        return -1;
    }
    if (a.start > b.start) {
        return 1;
    }
    return 0;
};
var merge = function(intervals) {
    if (intervals.length === 0) { return []; }
    intervals.sort(sortByFirst);
    let sol = [intervals[0]];
    for (let i = 1; i < intervals.length; i++) {
        let current = intervals[i];
        let last = sol[sol.length - 1];
        if (current.start <= last.end && current.end >= last.end) {
            sol[sol.length - 1] = new Interval(last.start, current.end);
        } else if (current.start > last.end) {
            sol.push(current);
        }
    }
    return sol;
    
};
