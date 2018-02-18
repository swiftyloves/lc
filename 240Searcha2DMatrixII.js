let searchMatrixRange = function(x1, x2, y1, y2, matrix, target) {
    if (x1 < 0 || x2 < 0 || x1 > x2 || x1 >= matrix[0].length || x2 >= matrix[0].length ||
        y1 < 0 || y2 < 0 || y1 > y2 || y1 >= matrix.length || y2 >= matrix.length) {
        return false;
    }
    if (x1 === x2 && y1 === y2) {
        return matrix[y1][x1] === target;
    }
    let m = x2 - x1;
    let n = y2 - y1;
    let midM = Math.floor(m/2) + x1 ;
    let midN = Math.floor(n/2) + y1;
    
    let center = matrix[midN][midM];
    if (center === target) {
        return true;
    }
    if (center > target) {
        return (searchMatrixRange(x1, midM - 1, y1, midN - 1, matrix, target) || 
                searchMatrixRange(midM, x2, y1, midN - 1, matrix, target) || 
                searchMatrixRange(x1, midM - 1, midN, y2, matrix, target) )
    }
    if (center < target) {
        return (searchMatrixRange(midM + 1, x2, midN + 1, y2, matrix, target) || 
                searchMatrixRange(midM + 1, x2, y1, midN, matrix, target) || 
                searchMatrixRange(x1, midM, midN + 1, y2, matrix, target) )
    }
    
    
};
var searchMatrix = function(matrix, target) {
    if (matrix.length === 0) { return false; }
    return searchMatrixRange(0, matrix[0].length - 1, 0, matrix.length - 1, matrix, target);
};
