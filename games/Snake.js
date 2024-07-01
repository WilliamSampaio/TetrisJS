import GameBase from './GameBase.js'
import * as c from '../constants.js'

export default class Snake extends GameBase {
    constructor() {
        super("Snake Game", 1, 1)
        this.direction = c.RIGHT
        this.snake = Array.from(Array(3).fill({ x: 0, y: this.board.length - 1 }))
        this.mouse = { x: 5, y: 19 }
    }

    move() {
        switch (this.direction) {
            case c.RIGHT:
                this.snake.unshift({ x: this.snake[0].x + 1, y: this.snake[0].y })
                this.snake.pop()
                break
            case c.DOWN:
                this.snake.unshift({ x: this.snake[0].x, y: this.snake[0].y + 1 })
                this.snake.pop()
                break
            case c.LEFT:
                this.snake.unshift({ x: this.snake[0].x - 1, y: this.snake[0].y })
                this.snake.pop()
                break
            case c.UP:
                this.snake.unshift({ x: this.snake[0].x, y: this.snake[0].y - 1 })
                this.snake.pop()
                break
        }
    }

    collision(x, y) {
        if (this.snake[0].x == x && this.snake[0].y == y) return true
        return false
    }

    checkMouseCatch() {
        if (this.collision(this.mouse.x, this.mouse.y)) {
            let tail = this.snake.length - 1
            this.snake.push({ x: this.snake[tail].x, y: this.snake[tail].y })
            this.mouse.x = 0
            this.mouse.y = 0
            this.score += 10
            this.gameOver = true
        }
    }

    update(keyPressed = null) {

        if (keyPressed !== null) {

            switch (keyPressed) {
                case 'ArrowUp':
                    if (this.direction != c.DOWN && this.direction != c.UP) {
                        this.direction = c.UP
                    }
                    break;
                case 'ArrowLeft':
                    if (this.direction != c.RIGHT && this.direction != c.LEFT) {
                        this.direction = c.LEFT
                    }
                    break;
                case 'ArrowDown':
                    if (this.direction != c.UP && this.direction != c.DOWN) {
                        this.direction = c.DOWN
                    }
                    break;
                case 'ArrowRight':
                    if (this.direction != c.LEFT && this.direction != c.RIGHT) {
                        this.direction = c.RIGHT
                    }
                    break;
            }
        }

        if (!this.next()) {
            return false
        }

        this.move()

        this.checkMouseCatch()

        for (let y = 0; y < 20; y++) {
            for (let x = 0; x < 10; x++) {
                this.board[y][x] = 0
            }
        }

        this.board[this.mouse.y][this.mouse.x] = 1

        for (let i = 0; i < this.snake.length; i++) {
            this.board[this.snake[i].y][this.snake[i].x] = 1
        }

        return true
    }
}