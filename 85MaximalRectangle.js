var isRectangle = function(x1, x2, y1, y2, matrix) {
    for (var j = y1; j <= y2; j++) {
        for (var i = x1; i <= x2; i++) {
            if (matrix[j][i] !== '1') {
                // console.log('j:',j);
                // console.log('i:',i);
                return false;
            }
        }
    }
    
    
    return true;
}
var checkNewLine = function(j1, j2, x, matrix) {
    for (var j = j1; j <= j2; j++) {
        if(matrix[j][x] !== '1') {
            return false;
        }
    }
    return true;
}
var maximalRectangle = function(matrix) {
    var row = matrix.length;
    var column = row ? matrix[0].length : 0;
    if (row === 0 || column === 0) {
        return 0;
    }
    var sol = 0;
    // brute force
    /*for (var x1 = 0; x1 < column; x1++) {
        for (var x2 = x1; x2 < column; x2++) {
            for (var y1 = 0; y1 < row; y1++) {
                for (var y2 = y1; y2 < row; y2++) {
                    if (isRectangle(x1, x2, y1, y2, matrix)) {
                        if ((x2 - x1 + 1) * (y2 - y1 + 1) > sol){
                            sol = (x2 - x1 + 1) * (y2 - y1 + 1);
                            console.log('sol:',sol)
                        }
                    }
                }
            }
        }
    }*/
    /*
    1 1 1 1 1 0
    1 1 1 1 0
    1 1 1 1 0
    1 1 0
    1 1 1 1 
    1 0
    */
    /*for (var x1 = 0; x1 < column; x1++) {
        for (var y1 = 0; y1 < row; y1++) {
            var preColumnAmount = column - x1;
            for (var y2 = y1; y2 < row; y2++) {
                var count = 0;
                for (var x2 = x1; x2 < x1 + preColumnAmount; x2++) {
                    if (matrix[y2][x2] === '1') {
                        count = count + 1;
                    } else {
                        break;
                    }
                }
                if (((y2 - y1 + 1) * count) > sol) {
                    sol = (y2 - y1 + 1) * count;
                }
                preColumnAmount = count;
            }
        }
    }*/
    
    // var columnArr = new Array(column).fill(-1);
    var sumMatrix = new Array(row);
    for (var i = 0; i < sumMatrix.length; i++) {
        sumMatrix[i] = Array(column);
    }
    for (var j = 0; j < row; j++) {
        var count = 0;
        console.log(matrix[j])
        for (var i = column - 1; i >= 0; i--) {
            if (matrix[j][i] === '1') {
                count = count + 1;
                sumMatrix[j][i] = count;
            } else {
                sumMatrix[j][i] = 0;
                count = 0;
            }
            
        }
        
        
    }
    console.log(sumMatrix);
    for (var i = 0; i < column; i++) {
        for (var j = 0; j < row; j++) {
            var height = 1;
            if (sumMatrix[j][i] === 0) {
                continue;
            }
            console.log(height * sumMatrix[j][i]);
            if (height * sumMatrix[j][i] > sol){
                sol = height * sumMatrix[j][i];
                console.log(height * sumMatrix[j][i]);
            }
            for (var k = j + 1; k < row; k++) {
                if (sumMatrix[k][i] === 0) { break; }
                height = height + 1;
                if (sumMatrix[k][i] >= sumMatrix[j][i]) {
                    if (height * sumMatrix[j][i] > sol){
                        sol = height * sumMatrix[j][i];
                    }
                } else if (sumMatrix[k][i] < sumMatrix[j][i]){
                    break;
                }
            }
        }
    }
    
    
    
    return sol;
};
