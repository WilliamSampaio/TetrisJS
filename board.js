export default function getBoard() {
    let board = [];
    for (y = 0; y < 20; y++) {
        row = [];
        for (x = 0; x < 10; x++) {
            row[x] = 0;
        }
        board[y] = row;
    }
    return board;
}