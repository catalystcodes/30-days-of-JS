// Set and Maps
		//SET
	// Intersection of a and b
// let a = [1, 3, 4, 7, 8, 2, 3, 8]
// let b = [2, 4, 5, 8, 8]

// let A = new Set(a)
// let B = new Set(b)

// let c = a.filter((num) => B.has(num))
// let C = new Set(c)

// console.log(C)

	// Differences of Set 
// let a1 = [1, 3, 4, 7, 8, 2, 3, 8]
// let b1 = [2, 4, 5, 8, 8]

// let A1 = new Set(a1)
// let B1 = new Set(b1)

// let c1 = a1.filter((num1) => !B1.has(num1))
// let C1 = new Set(c1)
// console.log(C1)	

		//MAP
// let countries = [
// 	['Finland', 'Helsinki'],
// 	['Sweden', 'Stockholm'],
// 	['Norway', 'Oslo'],
// ]

// const map = new Map(countries)
// console.log(map) 

// map.set('Kwara', 'Ilorin')

// console.log(map)

// console.log(map.get('Kwara'))

// console.log(map.size)



	// Exercises:Level 1
let num = []
for(let i = 0; i <= 10; i++) {
 num.push(i)
}
const setOfNum = new Set(num)
console.log	(setOfNum)

const delTwo = setOfNum.delete(num[1])

console.log(delTwo)
console.log(setOfNum.size)

countries = [
	['Finland', "Finland".length],
	['Sweden', 'Sweden'.length],
	['Norway', 'Norway'.length],
]

const mapCountries = new Map(countries)
console.log(mapCountries)

let clearedSet = setOfNum.clear()
console.log(setOfNum)

//Exercises:Level 2
const a = [4, 5, 8, 9]
const b = [3, 4, 5, 7]

// Find a union b
let A = new Set(a)
let B = new Set(b)
 let c = [...a, ...b]
let C = new Set(c)

console.log(c)

let d = a.filter((num) => B.has(num))
let D = new Set(d)

console.log(D)
