/**
 * @param {character[][]} grid
 * @return {number}
 */
let dfs = function(j, i, row, column, grid) {
    if (j < 0 || i < 0 || j >= row || i >= column || grid[j][i] !== "1") {
        // console.log('return');
        return;
    }
    grid[j][i] = "0";
    dfs(j, i + 1, row, column, grid);
    dfs(j, i - 1, row, column, grid);
    dfs(j - 1, i, row, column, grid);
    dfs(j + 1, i, row, column, grid);
    
};
var numIslands = function(grid) {
    if (grid.length == 0) { return 0}
    let count = 0;
    let row = grid.length;
    let column = grid[0].length;
    for (let j = 0 ; j < grid.length; j++) {
        for (let i = 0; i < grid[j].length; i++) {
            if (grid[j][i] === "1") {
                count += 1;
                dfs(j, i, row, column, grid);
            }
        }
    }
    return count;
};