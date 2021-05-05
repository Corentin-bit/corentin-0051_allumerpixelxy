let pixelX = 0
let pixelY = 0
basic.forever(function () {
    led.plot(pixelX, pixelY)
    basic.pause(200)
    basic.clearScreen()
    while (pixelY < 5) {
        while (pixelX < 4) {
            pixelX += 1
            led.plot(pixelX, pixelY)
            basic.pause(200)
            basic.clearScreen()
        }
        pixelX = 0
        pixelY += 1
        led.plot(pixelX, pixelY)
        basic.pause(200)
        basic.clearScreen()
    }
})
