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
	languages: ['Amharic', 'English', 'Suomi(Finnish)']
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