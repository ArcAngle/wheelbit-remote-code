radio.onReceivedValue(function (name, value) {
    if (name == "A") {
        arm = value
    }
    if (name == "R") {
        roll = value
    }
    if (name == "T") {
        throttle = value
    }
    if (name == "P") {
        Pitch = value
    }
})
let Servo_2 = 0
let Servo_1 = 0
let Pitch = 0
let throttle = 0
let roll = 0
let arm = 0
let radiogruppe = 14
radio.setGroup(radiogruppe)
basic.showNumber(radiogruppe)
while (arm) {
    basic.showIcon(IconNames.Skull)
}
basic.showIcon(IconNames.Yes)
basic.pause(2000)
basic.clearScreen()
basic.forever(function () {
    if (arm) {
        Servo_1 = 90 + (roll + throttle)
        Servo_2 = 90 + (roll - throttle)
    } else {
        Servo_1 = 90
        Servo_2 = 90
    }
})
basic.forever(function () {
    pins.servoWritePin(AnalogPin.P1, Servo_1)
    pins.servoWritePin(AnalogPin.P2, Servo_2)
    basic.clearScreen()
    if (arm) {
        basic.showIcon(IconNames.Ghost)
    }
})
