import createCore from './core.js';
import * as c from '../constants.js'

function preview() {
    const core = createCore('Snake Game', '', '')
    let boardIndex = 0;
    const boards = [
        [
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 1, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 1, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 1, 0, 0, 0],
            [0, 0, 1, 1, 1, 1, 1, 0, 0, 0],
            [0, 0, 1, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 1, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 1, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 1, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 1, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
        ],
        [
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 1, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 1, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 1, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 1, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 1, 0, 0, 0],
            [0, 0, 1, 1, 1, 1, 1, 0, 0, 0],
            [0, 0, 1, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 1, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 1, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
        ],
        [
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 1, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 1, 1, 1, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 1, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 1, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 1, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 1, 0, 0, 0],
            [0, 0, 1, 1, 1, 1, 1, 0, 0, 0],
            [0, 0, 1, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
        ],
        [
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 1, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 1, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 1, 1, 1, 1, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 1, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 1, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 1, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 1, 0, 0, 0],
            [0, 0, 0, 1, 1, 1, 1, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
        ]
    ]

    core.direction = c.RIGHT
    core.delay = 500

    core.update = () => {

        if (!core.next()) {
            return false
        }

        core.board = boards[boardIndex]

        if (boardIndex < boards.length) {
            boardIndex++
        }

        if(boardIndex == 4){
            boardIndex = 0
        }

        return true
    }

    return core
}

export function createGame(speed = 1, level = 1) {
    const game = createCore('Snake Game', speed, level)

    game.collision = (x, y) => {
        if (game.snake[0].x == x && game.snake[0].y == y) return true
        return false
    }

    game.randomMouse = () => {
        let pos = game.randomPosition()
        while (game.collision(pos.x, pos.y)) {
            pos = game.randomPosition()
        }
        return pos
    }

    game.direction = c.RIGHT
    game.snake = Array.from(Array(3).fill({ x: 0, y: game.board.length - 1 }))
    game.mouse = game.randomMouse()
    game.delay = 200

    game.move = () => {
        switch (game.direction) {
            case c.RIGHT:
                game.snake.unshift({ x: game.snake[0].x + 1, y: game.snake[0].y })
                game.snake.pop()
                break
            case c.DOWN:
                game.snake.unshift({ x: game.snake[0].x, y: game.snake[0].y + 1 })
                game.snake.pop()
                break
            case c.LEFT:
                game.snake.unshift({ x: game.snake[0].x - 1, y: game.snake[0].y })
                game.snake.pop()
                break
            case c.UP:
                game.snake.unshift({ x: game.snake[0].x, y: game.snake[0].y - 1 })
                game.snake.pop()
                break
        }
    }

    game.handleKeyPressed = (keyPressed) => {
        switch (keyPressed) {
            case 'ArrowUp':
                if (game.direction != c.DOWN) {
                    game.direction = c.UP
                }
                break
            case 'ArrowLeft':
                if (game.direction != c.RIGHT) {
                    game.direction = c.LEFT
                }
                break
            case 'ArrowDown':
                if (game.direction != c.UP) {
                    game.direction = c.DOWN
                }
                break
            case 'ArrowRight':
                if (game.direction != c.LEFT) {
                    game.direction = c.RIGHT
                }
                break
        }
    }

    game.selfCollision = () => {
        for (let i = 1; i < game.snake.length; i++) {
            if (game.collision(game.snake[i].x, game.snake[i].y)) {
                return true
            }
        }
        return false
    }

    game.wallCollision = () => {
        if (
            game.snake[0].y == -1 ||
            game.snake[0].y == game.board.length ||
            game.snake[0].x == -1 ||
            game.snake[0].x == game.board[0].length
        ) {
            return true
        }
        return false
    }

    game.checkMouseCatch = () => {
        if (game.collision(game.mouse.x, game.mouse.y)) {
            let tail = game.snake.length - 1
            game.snake.push({ x: game.snake[tail].x, y: game.snake[tail].y })
            game.score += 10
            game.mouse = game.randomMouse()
        }
    }

    game.update = () => {

        if (!game.next()) {
            return false
        }

        game.move()

        if (game.wallCollision()) {
            game.gameOver = true
        }

        game.checkMouseCatch()

        for (let y = 0; y < 20; y++) {
            for (let x = 0; x < 10; x++) {
                game.board[y][x] = 0
            }
        }

        game.board[game.mouse.y][game.mouse.x] = 1

        for (let i = 0; i < game.snake.length; i++) {
            if (
                game.snake[i].y == -1 || game.snake[i].y == game.board.length ||
                game.snake[i].x == -1 || game.snake[i].x == game.board[0].length
            ) {
                continue
            }
            game.board[game.snake[i].y][game.snake[i].x] = 1
        }

        return true
    }

    game.getPreview = () => {
        return preview()
    }

    return game
}