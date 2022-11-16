const Ball = () => {
    let image = imageFromPath('./img/apple.png')
    let o = {
        image: image,
        x: 100,
        y: 100,
        alive: true,
    }
    o.kill = () => {
        o.alive = false
    }
    o.collide = (img) => {
        return o.alive && (rectIntersects(o, img) || rectIntersects(img, o))
    }
    o.randomXY = (snake, body) => {
        let randomX = Math.floor(Math.random() * 20) * 20
        let randomY = Math.floor(Math.random() * 20) * 20
        for (let i = 0; i < body.length; i++) {
            let x = body[i].x
            let y = body[i].y
            let coincide = (x === randomX && y === randomY) || (snake.x === randomX && snake.y === randomY)
            log('coincide', coincide)
            while (coincide) {
                randomX = Math.floor(Math.random() * 20) * 20
                randomY = Math.floor(Math.random() * 20) * 20
                // log('x, y', randomX, randomY)
                coincide = (x === randomX && y === randomY)
            }
        }
        o.alive = true
        o.x = randomX
        o.y = randomY
    }
    return o
}