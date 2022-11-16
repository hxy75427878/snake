let SceneEnd = (game) => {
    let s = {
        game: game,
    }
    s.draw = () => {
        game.context.fillStyle = '#FFF'
        game.context.fillText(`游戏结束`, 180, 180)
    }
    s.update = () => {

    }
    return s
}