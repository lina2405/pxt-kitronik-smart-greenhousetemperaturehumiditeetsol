input.onButtonPressed(Button.A, function () {
    basic.showNumber(kitronik_smart_greenhouse.temperature(TemperatureUnitList.C))
})
input.onButtonPressed(Button.AB, function () {
    basic.showNumber(kitronik_smart_greenhouse.readIOPin(kitronik_smart_greenhouse.PinType.analog, kitronik_smart_greenhouse.IOPins.p1))
})
input.onButtonPressed(Button.B, function () {
    basic.showNumber(kitronik_smart_greenhouse.humidity())
})
let soilHue = 0
let humidHue = 0
let tempHue = 0
let zipLEDs = kitronik_smart_greenhouse.createGreenhouseZIPDisplay(8)
let statusLEDs = zipLEDs.statusLedsRange()
basic.forever(function () {
    tempHue = Math.map(kitronik_smart_greenhouse.temperature(TemperatureUnitList.C), 0, 40, 210, 0)
    humidHue = Math.map(kitronik_smart_greenhouse.humidity(), 0, 100, 35, 150)
    soilHue = Math.map(kitronik_smart_greenhouse.readIOPin(kitronik_smart_greenhouse.PinType.analog, kitronik_smart_greenhouse.IOPins.p1), 0, 1023, 35, 150)
    statusLEDs.setZipLedColor(0, kitronik_smart_greenhouse.hueToRGB(tempHue))
    statusLEDs.setZipLedColor(1, kitronik_smart_greenhouse.hueToRGB(humidHue))
    statusLEDs.setZipLedColor(2, kitronik_smart_greenhouse.hueToRGB(soilHue))
    statusLEDs.show()
})
