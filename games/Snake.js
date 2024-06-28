import GameBase from './GameBase.js';
import * as c from '../constants.js';

export default class Snake extends GameBase {
    constructor() {
        super("Snake Game");
        this.direction = c.RIGHT;
        this.snake = Array.from(Array(3).fill({ x: 0, y: this.board.length - 1 }));
    }

    move() {
        switch (this.direction) {
            case c.RIGHT:
                this.snake.unshift({ x: this.snake[0].x + 1, y: this.snake[0].y });
                this.snake.pop();
                break;
        }
    }

    update() {
        this.move();
    }

    getUpdatedBoard() {
        for (let y = 0; y < 20; y++) {
            for (let x = 0; x < 10; x++) {
                this.board[y][x] = 0;
            }
        }

        for (let i = 0; i < this.snake.length; i++) {
            this.board[this.snake[i].y][this.snake[i].x] = 1;
        }

        return this.board;
    }
}