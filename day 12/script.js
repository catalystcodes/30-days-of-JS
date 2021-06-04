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
let words = 'The position of some particles on the horizontal x-axis -12, -4, -3 and -1 in the negative direction, 0 at origin, 4 and 8 in the positive direction. Extract these numbers and find the distance between the two furthest particles.'
let extractedNo = /-*\d+/gi
let extractedNumber = words.match(extractedNo)

console.log(extractedNumber)


let sumOfExtractedNumber = 0
for(let i = 0; i < extractedNumber.length; i++){
  sumOfExtractedNumber += parseInt(extractedNumber[i])

}

console.log(sumOfExtractedNumber)




//Level 2

const tenMostFrequentWords = (string, wordNoOfAppearance) => {
  const toArray = string.match(/[a-z]+/ig)
  const frequent = {}
  toArray.forEach(value => {
    if (frequent[value]) frequent[value] += 1
    else frequent[value] = 1
  })
  const DividedFrequent = Object.entries(frequent)
  const frequently = DividedFrequent.map(item => {
    return { word: item[0], count: item[1] }
  })
  return frequently.sort((a, b) => b.count - a.count).splice(0, wordNoOfAppearance)
}
console.log(tenMostFrequentWords('I love teaching. If you do not love teaching what else can you love. I love Python if you do not love something which can give you all the capabilities to develop an application what else can you love.', 7))
