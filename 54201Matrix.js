ram {number[][]} matrix
 * @return {number[][]}
 */

var updateMatrix = function(matrix) {
    let resultMatrix = [];
    for (let j = 0; j < matrix.length; j++) {
        resultMatrix.push( Array(matrix[0].length).fill(0) );
    }
    let visited = [];
    for (let j = 0; j < matrix.length; j++) {
        visited.push( Array(matrix[0].length).fill(false) );
    }

    let queue = [];
    for (let j = 0; j < matrix.length; j++) {
        for (let i = 0; i < matrix[0].length; i++) {
            if (matrix[j][i] === 1) { continue; }
            queue.push([j,i]);
            visited[j][i] = true;
            resultMatrix[j][i] = 0;
        }
    }
    let steps = [[-1, 0], [1, 0], [0, -1], [0, 1]];
    while (queue.length > 0) {
        let cur_pos = queue.shift();
        let cur_j = cur_pos[0];
        let cur_i = cur_pos[1];
        for (let ind = 0; ind < steps.length; ind++) {
            let next_j = cur_j + steps[ind][0];
            let next_i = cur_i + steps[ind][1];            
            if (next_j < 0 || next_j >= matrix.length || next_i < 0 || next_i >= matrix[0].length || visited[next_j][next_i] === true) { continue; }
            visited[next_j][next_i] = true;
            resultMatrix[next_j][next_i] = resultMatrix[cur_j][cur_i] + 1;
            queue.push([next_j, next_i]);
        }
    }
    
    return resultMatrix;
};
