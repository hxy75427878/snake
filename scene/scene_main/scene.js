let Scene = (game) => {
    let s = {
        game: game,
    }
    // 初始化
    let snake = Snake_head()
    let ball = Ball()
    let background = scene_background()
    let score = 0
    game.registerAction('a', () => {
        if (game.records['d']) {
            game.records['a'] = false
            game.records['w'] = false
            game.records['s'] = false
            snake.moveright()
        } else {
            game.records['w'] = false
            game.records['s'] = false
            snake.moveleft()
        }
    })
    game.registerAction('d', () => {
        if (game.records['a']) {
            game.records['w'] = false
            game.records['s'] = false
            game.records['d'] = false
            snake.moveleft()
        } else {
            game.records['w'] = false
            game.records['s'] = false
            snake.moveright()
        }
    })
    game.registerAction('w', () => {
        if (game.records['s']) {
            game.records['w'] = false
            game.records['a'] = false
            game.records['d'] = false
            snake.movedown()
        } else {
            game.records['a'] = false
            game.records['d'] = false
            snake.moveup()
        }
    })
    game.registerAction('s', () => {
        if (game.records['w']) {
            game.records['s'] = false
            game.records['a'] = false
            game.records['d'] = false
            snake.moveup()
        } else {
            game.records['a'] = false
            game.records['d'] = false
            snake.movedown()
        }
    })
    s.draw = () => {
        game.drawImage(background, 0, 0)
        game.drawImage(snake, snake.x, snake.y)
        if (snake.body.length >= snake.len) {
            let one = snake.body.shift()
        }
        for (let i = 0; i < snake.len - 1; i++) {
            game.drawImage(snake, snake.body[i].x, snake.body[i].y)
        }
        if (ball.alive === true) {
            game.drawImage(ball, ball.x, ball.y)

        }
        game.context.fillStyle = '#FFF'
        game.context.fillText(`分数:${score}`, 0, 20)
    }

    s.update = () => {
        if (bodyIntersects(snake, snake.body)) {
            alert('gameover')
            snake.len = 1
            snake.x = 180
            snake.y = 200
            snake.body = []
            score = 0
        }
        if (ball.collide(snake)) {
            ball.kill()
            ball.randomXY(snake, snake.body)
            snake.len += 1
            score += 10
        }
    }
    return s
}