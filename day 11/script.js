 //jotting

 const nums = [1,2,3,4,5,6,7,8,9,10]
 let [num1, num2, num3, ...rest] = nums

 console.log(num1, num2, num3, rest)

 const countries = [['Finland', 'Helsinki'], ['Sweden', 'Stockholm'], ['Norway', 'Oslo']]

 for (const [country, itCity] of countries) {
	 console.log(country, itCity)
 }

 const fullStack = [
	['HTML', 'CSS', 'JS', 'React'],
	['Node', 'Express', 'MongoDB', '']
]

for (const [numOne, numTwo, numThree, numFour] of fullStack) {
	console.log(numOne, numTwo, numThree, numFour)
}

//Object
const rectangle = {
	width: 20,
	height: 10,
	area: 200
}

let { width, height, area } = rectangle
console.log(area)
//Reassign while distructuring
let { width: W, height: H, area: A } = rectangle
console.log(W)  



const person = {
	firstName: 'Asabeneh',
	lastName: 'Yetayeh',
	age: 250,
	country: 'Finland',
	job: 'Instructor and Developer',
	skills: [
	  'HTML',
	  'CSS',
	  'JavaScript',
	  'React',
	  'Redux',
	  'Node',
	  'MongoDB',
	  'Python',
	  'D3.js'
	],
	languages: ['Amharic', 'E	nglish', 'Suomi(Finnish)']
  }
  // Lets create a function which give information about the person object without destructuring
  
  const getPersonInfo = obj => {
	const skills = obj.skills
	const formattedSkills = skills.slice(0, -1).join(', ')
	const languages = obj.languages
	const formattedLanguages = languages.slice(0, -1).join(', ')
  
	personInfo = `${obj.firstName} ${obj.lastName} lives in ${obj.country}. He is  ${
	  obj.age
	} years old. He is an ${obj.job}. He teaches ${formattedSkills} and ${	
	  skills[skills.length - 1]
	}. He speaks ${formattedLanguages} and a little bit of ${languages[2]}.`
  
	return personInfo
}
  

  console.log(getPersonInfo(person))


const todoList = [
	{
	  task:'Prepare JS Test',
	  time:'4/1/2020 8:30',
	  completed:true
	},
	{
	  task:'Give JS Test',
	  time:'4/1/2020 10:00',
	  completed:false
	},
	{
	  task:'Assess Test Result',
	  time:'4/1/2020 1:00',
	  completed:false
	}
	]
	
for (const {task, time, completed} of todoList){
	console.log(task, time, completed)
}

let user = {
	name: 'Asabeneh',
	title: 'Programer',
	country: 'Finland',
	city: 'Helsinki'
}
const copiedUser = {...user, title: 'Instructor'}

console.log(copiedUser)

const sumAllNum = (...arg) => {
	let sum = 0
	for (const num of arg) {
		sum += num
	}
	return sum
}
console.log(sumAllNum(1,2,3,4,5,))


// Exercise: Level 1 
const constants = [2.72, 3.14, 9.81, 37, 100]
let [e, pi, gravity, humanBodyTemp, waterBoilingTemp] = constants
console.log(e, pi, gravity, humanBodyTemp, waterBoilingTemp)

const countries1 = ['Finland', 'Estonia', 'Sweden', 'Denmark', 'Norway']
let [fin, est, sw, den, nor] = countries1
console.log(fin, est, sw, den, nor)

const rectangle1 = {
	width1: 20,
	height2: 10,
	area3: 200,
	perimeter4: 60
}

let { width1, height2, area3, perimeter4 } = rectangle1
console.log(width1, height2, area3, perimeter4)

//Exercises: Level 2

const users = [
	{
	  name:'Brook',
	  scores:75,
	  skills:['HTM', 'CSS', 'JS'],
	  age:16
	},
	{
	  name:'Alex',
	  scores:80,
	  skills:['HTM', 'CSS', 'JS'],
	  age:18
	},
	{
	  name:'David',
	  scores:75,
	  skills:['HTM', 'CSS'],
	  age:22
	},
	{
	  name:'John',
	  scores:85,
	  skills:['HTML'],
	  age:25
	},
	{
	  name:'Sara',
	  scores:95,
	  skills:['HTM', 'CSS', 'JS'],
	  age: 26
	},
	{
	  name:'Martha',
	  scores:80,
	  skills:['HTM', 'CSS', 'JS'],
	  age:18
	},
	{
	  name:'Thomas',
	  scores:90,
	  skills:['HTM', 'CSS', 'JS'],
	  age:20
	}
	]
let listedKeys = users.map(({ name, scores, skills, age }) => [name, scores, skills, age])

console.log(listedKeys)

let outlinedKeys = 	users.map(user => [user.name, user.scores, user.skills, user.age])

console.log(outlinedKeys)

 // Find the persons who have less than two skills
let outlinedSkillsLessThanTwo = users.find(({ skills }) => skills.length < 2)
console.log(outlinedSkillsLessThanTwo)

let listedSkills = users.find((user) => user.skills.length < 2)
console.log(listedSkills) 

const student = {
	name: 'David',
	age: 25,
	skills: {
	  frontEnd: [
		{ skill: 'HTML', level: 10 },
		{ skill: 'CSS', level: 8 },
		{ skill: 'JS', level: 8 },
		{ skill: 'React', level: 9 }
	  ],
	  backEnd: [
		{ skill: 'Node',level: 7 },
		{ skill: 'GraphQL', level: 8 },
	  ],
	  dataBase:[
		{ skill: 'MongoDB', level: 7.5 },
	  ],
	  dataScience:['Python', 'R', 'D3.js']
	}
}
  console.log(Object.keys(frontEnd) = 'BootStrap' );