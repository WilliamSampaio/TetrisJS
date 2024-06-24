function getBoard(width = 10, height = 10) {
    let board = [];
    for (y = 0; y < height; y++) {
        row = [];
        for (x = 0; x < width; x++) {
            row[x] = 0;
        }
        board[y] = row;
    }
    return board;
}