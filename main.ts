let jogadorX = randint(0, 4)
let jogadorY = 4
let covidX = randint(0, 4)
let covidY = 0
let gameover = 0
basic.forever(function () {
    while (gameover == 0) {
        basic.clearScreen()
        led.plot(jogadorX, jogadorY)
        led.plot(covidX, covidY)
        if (covidY == 4 && covidX == jogadorX) {
            gameover = 1
        }
        if (input.buttonIsPressed(Button.A) && jogadorX > 0) {
            jogadorX = jogadorX - 1
        }
        if (input.buttonIsPressed(Button.B) && jogadorX < 4) {
            jogadorX = jogadorX + 1
        }
        covidY = covidY + 1
        if (covidY == 5) {
            covidX = randint(0, 4)
            covidY = 0
        }
        basic.pause(500)
    }
    basic.clearScreen()
    basic.showString("GAME OVER")
    gameover = 0
})
