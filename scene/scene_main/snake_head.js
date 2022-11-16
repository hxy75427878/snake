const Snake_head = () => {
    let image = imageFromPath('./img/body.png')
    let o = {
        image: image,
        x: 180,
        y: 200,
        speed: 20,
        len: 1,
        body:[],
    }
    o.moveX = (x) => {
        if (x < 0) {
            x = 380
        }
        if (x > 400 - o.image.width) {
            x = 0
        }
        o.body.push({
            x: o.x,
            y: o.y,
        })
        o.x = x
        // log('o', o.body)
    }
    o.moveY = (y) => {
        if (y < 0) {
            y = 380
        }
        if (y > 400 - o.image.height) {
            y = 0
        }
        o.body.push({
            x: o.x,
            y: o.y,
        })
        o.y = y

    }
    o.moveleft = () => {
        o.moveX(o.x - o.speed)
    }
    o.moveright = () => {
        o.moveX(o.x + o.speed)
    }
    o.moveup = () => {
        o.moveY(o.y - o.speed)
    }
    o.movedown = () => {
        o.moveY(o.y + o.speed)
    }


    return o
}
