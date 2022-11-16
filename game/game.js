class Game {
    constructor() {
        this.actions = {}
        this.keydowns = {
            a: false,
            d: false,
            w: false,
            s: false,
        }
        this.records = {
            a: false,
            d: false,
            w: false,
            s: false,
        }
        this.canvas = e('#id-canvas')
        this.context = this.canvas.getContext('2d')
        let self = this
        window.addEventListener('keydown', (event) => {
            let keydown = Object.keys(self.keydowns)
            self.keydowns[event.key] = true
            self.records[event.key] = true
            for (let e of keydown) {
                log('e', e)
                if (e !== event.key) {

                    self.keydowns[e] = false
                }
            }
        })
    }
    drawImage(img, x, y) {
        this.context.drawImage(img.image, x, y)
    }
    update() {

    }
    draw() {

    }

    registerAction = (key, callback) => {
        this.actions[key] = callback
    }


    runloop() {
        let g = this
        let actions = Object.keys(g.actions)
        for (let e of actions) {
            let key = e
            if (g.keydowns[key]) {
                g.actions[key]()
            }
        }
        g.update()
        g.context.clearRect(0, 0, g.canvas.width, g.canvas.height)
        g.draw()
        let range = e('input')
        let fps = range.value
        window.fps = fps
        setTimeout(() => {
            g.runloop()
        }, 1000 / window.fps)
    }
    run() {
        setTimeout(() => {
            this.runloop()
        }, 1000 / window.fps)
    }

}
