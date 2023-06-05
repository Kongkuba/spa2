radio.onReceivedNumber(function (receivedNumber) {
    outdoorTemp = receivedNumber
})
input.onButtonPressed(Button.A, function () {
    basic.showNumber(outdoorTemp)
    basic.showString("SPA")
})
input.onButtonPressed(Button.B, function () {
    basic.showString("Indoor")
    basic.showNumber(input.temperature())
})
let outdoorTemp = 0
radio.setGroup(23)
