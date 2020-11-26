function fullName() {
    let firstName = "Muhammad"
    let lastName = "Mubaraq"
    console.log(firstName + " " + lastName)
}
fullName()

function fullName(firstName, lastName) {
    console.log(firstName + " " + lastName)
}
fullName("Muhammad", "Mubaraq")

function addNumbers(num1, num2) {
    let sum = num1 + num2
    return sum
}
addNumbers(2, 3)
5
console.log(addNumbers(5, 10))

function areaOfRectangle(length, width) {
    let area = length * width
    console.log(area)
}
areaOfRectangle(10, 5)

function perimeterOfRectangle(length, width) {
    let perimeter = 2 * (length + width)
    console.log(perimeter)
}
perimeterOfRectangle(20, 20)

function volumeOfRectPrism(length, width, height) {
    let volume = length * width * height
    console.log(volume)
}

function volumeOfRectPrism(length, width, height) {
    let volume = length * width * height
    console.log(volume)
}
volumeOfRectPrism(3, 5, 0)

function areaOfCircle(PI = Math.PI, r) {
    let areaForCircle = PI * r * r
    console.log(areaForCircle)
}
areaOfCircle(2)

function areaOfCircle(r) {
    let areaForCircle = Math.PI * r * r
    console.log(areaForCircle)
}
areaOfCircle(2)

function circumOfCircle(r) {
    let circumForCircle = 2 * Math.PI * r
    console.log(circumForCircle)
}
circumOfCircle(2)

circumOfCircle(6)

areaOfCircle(6)

function density(mass, volume) {
    let den = mass / volume
    console.log(den)
}
density(4, 2)
density(10, 2)

function speed(totalDistance, timeTaken) {
    let spd = totalDistance / timeTaken
    console.log(spd)
}
speed(20, 2)

function convertCelciusToFahrenheit(temp) {
    let fahrenheit = (temp * 9 / 5) + 32
    return fahrenheit
}

convertCelciusToFahrenheit(30)
86
convertCelciusToFahrenheit(36)
96.8

function weight(mass, gravity) {
    let wgt = mass * gravity
    console.log(wgt)
}

weight(4, 2)