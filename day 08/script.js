const person = {
    firstName: 'Asabeneh',
    age: 250,
    country: 'Finland',
    city: 'Helsinki',
    skills: ['HTML', 'CSS', 'JS'],
    title: 'teacher',
    address: {
        street: 'Heitamienkatu 16',
        pobox: 2002,
        city: 'Helsinki'
    },
    getPersonInfo: function() {
        return `I am ${this.firstName} and I live in ${this.city}, ${this.country}. I am ${this.age}.`
    }
}


const keys = Object.keys(person)
console.log(keys)

const address_keys = Object.keys(person.address)
console.log(address_keys)

const value = Object.values(person)
console.log(value)

const whole = Object.entries(person)
console.log(whole)

console.log(person.hasOwnProperty('name'))
console.log(person.hasOwnProperty('firstName'))


/*
    Execrise: Level 1
*/

const dog = {
    name: 'Jark',
    legs: '4',
    color: 'black & brown',
    age: 20,
    bark: 'woof woof',
    getDogInfo: function() {
        return `I am ${this.name}, i have ${this.legs} legs, i'm having ${this.color} skin and i'm ${this.age} years old`
    }
}

console.log(dog.getDogInfo())
console.log(dog)