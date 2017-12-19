/**
 * @param {number[][]} grid
 * @return {number}
 */
let dfs = function(j, i, grid, visited) {
    if (j < 0 || j >= grid.length || i < 0 || i >= grid[0].length || grid[j][i] === 0 || visited[j][i] === true) {
        return 0;
    }
    let tempArea = 1;
    visited[j][i] = true;
    tempArea += dfs(j-1, i, grid, visited);
    tempArea += dfs(j+1, i, grid, visited);
    tempArea += dfs(j, i+1, grid, visited);
    tempArea += dfs(j, i-1, grid, visited);

    return tempArea;
}

var maxAreaOfIsland = function(grid) {
    let maxArea = 0;
    let visited = [];
    for(let i = 0; i < grid.length; i++) {
        visited.push(Array(grid[0].length).fill(false));
    }
    for(let j = 0; j < grid.length; j++) {
        for (let i = 0; i < grid[0].length; i++) {
            let tempArea = dfs(j, i, grid, visited);
            if (tempArea > maxArea) {
                maxArea = tempArea;
            }
        }
    }
    
    return maxArea;
};
