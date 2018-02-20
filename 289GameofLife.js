let get = function(j, i, board) {
    if (j < 0 || i < 0 || j >= board.length || i >= board[0].length) {
        return 0;
    }
    return board[j][i] & 1;
}

var gameOfLife = function(board) {
    for (let j = 0; j < board.length; j++) {
        for (let i = 0; i < board[0].length; i++) {
            let count = 0;
            for (let stepy = -1; stepy <= 1; stepy++) {
                for (let stepx = -1; stepx <= 1; stepx++) {
                    if (stepx === 0 && stepy === 0) { continue; }
                    count += get(j + stepy, i + stepx, board);
                }
            }
            if (count < 2 || count > 3 ) {
                // Die
                board[j][i] &= 1;
            }
            if (count === 3) {
                // live
                board[j][i] |= 2;
            }
            if (count === 2 && board[j][i] === 1) {
                // live and live
                board[j][i] |= 2;
            }
            
        }
    }
    for (let j = 0; j < board.length; j++) {
        for (let i = 0; i < board[0].length; i++) {
            board[j][i] >>= 1;
        }
    }
};

