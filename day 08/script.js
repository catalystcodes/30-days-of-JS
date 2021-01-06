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
    getPersonInfo: function(a) {
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