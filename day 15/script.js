//Classes
class Person {
	constructor(firstName, lastName, age, skills, country) {
		// console.log(this)
		this.firstName = firstName
		this.lastName = lastName
		this.age = age
		this.skills = skills
		this.country = country
	}
	getFullName () {
		let fullName = this.firstName + " " + this.lastName
		return fullName
	}
	getSkill() {
		let skill = this.skills
		return skill
	}
}

const person1 = new Person('Muhammad', 'Mubaraq', 11, ["JS","HTML","CSS"], "Nigira")
const person2 = new Person('Aisha', 'Abdulfatah', 20, ['JS', 'HTML'])
const person3 = new Person('Misqiyah', 'Badmus', 10, ['Bootstrap', 'React'] )
const person4 = new Person('Lidiya', 'Tekle', 28, 'Finland', 'Espoo')

console.log(person1.getFullName())
console.log(person4.getFullName())
console.log(person2.getSkill())
console.log(person3)

//DEFAULT VALUES WITH CONSTROCTOR

class ExPreson {
	constructor (
		firstName1 = 'Abdulfatah',
		lastName2 = 'Muhammad',
		age2 = 20,
		skills2 = ['Js', 'React'],
		city2 = 'Ilorin',
		country2 = 'Nigria'
	) {
		this.firstName1 = firstName1
		this.lastName2 = lastName2
		this.age2 = age2
		this.skills2 = skills2
		this.city2 = city2
		this.country2 = country2
	}
}

const DefaultPreson = new ExPreson()
const ExPerson1 = new ExPreson('Abdulfatah', 'Aisha', 3, 'Mango DB', 'Ilorin', 'Canada')

console.log(DefaultPreson)
console.log(ExPerson1)


// Properties with initial value

class Man {
	constructor(firstName, lastName, age, country, city) {
	  this.firstName = firstName
	  this.lastName = lastName
	  this.age = age
	  this.country = country
	  this.city = city
	  this.score = 0
	  this.skills = []
	}
	getFullName() {
	  const fullName = this.firstName + ' ' + this.lastName
	  return fullName
	}
	// get getScore() {
	// 	return this.score
	// }
	// get getSkills() {
	// 	return this.skills
	// }
	set setScore(score) {
		this.score += score
	}
	set setSkill(skill) {
		this.skills.push(skill)
	}
	getManInfo() {
		let fullNameOfMan = this.getFullName()
		let manSkills =
		this.skills.length > 0 &&
		this.skills.slice(0, this.skills.length - 1).join(',')+`and ${this.skills[this.skills.length - 1]}`
		let formattedSkills =  manSkills ? `He knows ${manSkills}` : ''

		let info = `${fullNameOfMan} is ${this.age}. He lives ${this.city}, He knoew ${formattedSkills}`
		return info
	}
}

const Man1 = new Man('Muhammad', 'Mubaraq',20, 'Nigria', 'Ilorin')
const Man2 = new Man('Mufidat', 'Abdulrazaq',25, 'Nigria', 'Ilorin')
const Man3 = new Man('Aisha', 'Abdulfatah',15, 'Nigria', 'Ilorin')

Man1.setSkill = 1
Man1.setSkill= 'Ruby'
Man1.setSkill= 'React '
Man1.setSkill= 'Js'

Man2.setSkill = 2
Man2.setSkill= 'HTML'
Man2.setSkill= 'CSS'
Man2.setSkill= 'Js'

console.log(Man1.getManInfo())

