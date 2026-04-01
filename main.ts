controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (hopes_and_pause.vy == 0) {
        hopes_and_pause.vy = -250
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile4`, function (sprite, location) {
    game.gameOver(true)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile3`, function (sprite, location) {
    game.gameOver(false)
    game.setGameOverEffect(false, effects.melt)
})
let hopes_and_pause: Sprite = null
scene.setBackgroundColor(9)
hopes_and_pause = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . f f . . . 
    . . . . . . . . . . . f f f . . 
    . . . . . . . . . . . f f f f f 
    f f f f f f f f f f f f f . . . 
    . . f . . . . . . f . f . . . . 
    . . f f f f f f f f f f . . . . 
    . . f . . . . . . f . f . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
controller.moveSprite(hopes_and_pause, 100, 0)
tiles.setCurrentTilemap(tilemap`level1`)
hopes_and_pause.ay = 350
scene.cameraFollowSprite(hopes_and_pause)
