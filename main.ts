input.onButtonPressed(Button.A, function () {
    if (pos >= 15) {
        pos += -15
        pins.servoWritePin(AnalogPin.P1, pos)
    }
})
input.onButtonPressed(Button.AB, function () {
    pos = 90
    pins.servoWritePin(AnalogPin.P1, pos)
})
input.onButtonPressed(Button.B, function () {
    if (pos <= 165) {
        pos += 15
        pins.servoWritePin(AnalogPin.P1, pos)
    }
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    pos = 90
    pins.servoWritePin(AnalogPin.P1, pos)
})
let pos = 0
pos = 90
basic.forever(function () {
    basic.showString("" + (pos))
})
