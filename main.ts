input.onButtonPressed(Button.A, function () {
    for (let index = 0; index < 20; index++) {
        music.playSoundEffect(music.createSoundEffect(WaveShape.Square, 200, 1, 255, 0, 100, SoundExpressionEffect.None, InterpolationCurve.Curve), SoundExpressionPlayMode.UntilDone)
    }
})
basic.showIcon(IconNames.Heart)
