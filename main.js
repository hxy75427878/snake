const __main = () => {
    let game = new Game()
    let scene = Scene(game)
    game.run()
    // 更新 球的 x 和 y
    game.update = () => {
        scene.update()
    }
    // 重置画布
    game.draw = () => {
        scene.draw()
    }
}

__main()