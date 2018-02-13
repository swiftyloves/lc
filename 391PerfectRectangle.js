/**
 * @param {number[][]} rectangles
 * @return {boolean}
 */
var calculateArea = function(arr) {
    return (arr[2] - arr[0]) * (arr[3] - arr[1]);
}

var isRectangleCover = function(rectangles) {
    
    // Check the 4 coorinates of each rectangle
    let sumArea = 0;
    let left = Number.POSITIVE_INFINITY;
    let right = Number.NEGATIVE_INFINITY;
    let up = Number.POSITIVE_INFINITY;
    let bottom = Number.NEGATIVE_INFINITY;
    for (let i in rectangles) {
        let rectangle = rectangles[i]
        if (rectangle[0] < left) {
            left = rectangle[0];
        }
        if (rectangle[2] > right) {
            right = rectangle[2];
        }
        if (rectangle[1] < up) {
            up = rectangle[1];
        }
        if (rectangle[3] > bottom) {
            bottom = rectangle[3];
        }
        sumArea += calculateArea(rectangle);
    }
    if (calculateArea([left, up, right, bottom]) !== sumArea) {
        return false;
    }

    // Check the 4 coorinates of each rectangle
    const posi_set = new Set()
    for (let i in rectangles) {
        let rect = rectangles[i];
        let coordinates = [rect[0] + "-" + rect[1], rect[0] + "-" + rect[3], rect[2] + "-" + rect[1], rect[2] + "-" + rect[3]];
        for (let j = 0; j < coordinates.length; j++) {
            let coor = coordinates[j];
            if (posi_set.has(coor)) {
                posi_set.delete(coor);
            } else {
                posi_set.add(coor);
            }
        }
    }
    if (posi_set.size !== 4 || !posi_set.has(left + "-" + up) || !posi_set.has(left + "-" + bottom) || !posi_set.has(right + "-" + up) || !posi_set.has(right + "-" + bottom)) {
        return false;
    }
    return true;
};
