let personInfo = {
	firstName: 'Muhammad',
	lastName: 'Mubaraq',
	age: 10,
	country: 'Nigeria' 
}

const conVerted = JSON.stringify(personInfo, null, 4)

const setStorage = localStorage.setItem('personInfo', conVerted)

console.log(localStorage.key(2))

console.log(localStorage)