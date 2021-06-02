//Level 1
//Question 1

let text = "He earns 4000 euro from salary per month, 10000 euro annual bonus, 5500 euro online courses per month."
let digit = /\d+/gi
let extractedDigit = text.match(digit)
let listOfIncome = extractedDigit
console.log(listOfIncome)

let sum = 0
for(let i = 0; i < listOfIncome.length; i++){
  sum += parseInt(listOfIncome[i])

}

console.log(sum)


//Question 2
let points = '-1,2,-4,-3,-1,0,4,8'
let sortedPoint = /-4|-3|-1|-1|0|2|4|8/g
let extractedNumber = points.match(sortedPoint)

console.log(extractedNumber)


let sumOfExtractedNumber = 0
for(let i = 0; i < extractedNumber.length; i++){
  sumOfExtractedNumber += parseInt(extractedNumber[i])

}

console.log(sumOfExtractedNumber)

