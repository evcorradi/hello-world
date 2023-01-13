input.onButtonPressed(Button.A, function () {
    music.playMelody("G F G A - F E D ", 120)
})
input.onButtonPressed(Button.B, function () {
    basic.showString("please shake for a heart!")
})
input.onGesture(Gesture.Shake, function () {
    basic.showIcon(IconNames.Heart)
})
basic.showString(" Hi my name is zip")
