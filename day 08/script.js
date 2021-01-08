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


/*
    Execrises: Level 2
*/

const users = {
    Alex: {
        email: 'alex@alex.com',
        skills: ['HTML', 'CSS', 'JavaScript'],
        age: 20,
        isLoggedIn: false,
        points: 30
    },
    Asab: {
        email: 'asab@asab.com',
        skills: ['HTML', 'CSS', 'JavaScript', 'Redux', 'MongoDB', 'Express', 'React', 'Node'],
        age: 25,
        isLoggedIn: false,
        points: 50
    },
    Brook: {
        email: 'daniel@daniel.com',
        skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux'],
        age: 30,
        isLoggedIn: true,
        points: 50
    },
    Daniel: {
        email: 'daniel@alex.com',
        skills: ['HTML', 'CSS', 'JavaScript', 'Python'],
        age: 20,
        isLoggedIn: false,
        points: 40
    },
    John: {
        email: 'john@john.com',
        skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux', 'Node.js'],
        age: 20,
        isLoggedIn: true,
        points: 50
    },
    Thomas: {
        email: 'thomas@thomas.com',
        skills: ['HTML', 'CSS', 'JavaScript', 'React'],
        age: 20,
        isLoggedIn: false,
        points: 40
    },
    Paul: {
        email: 'paul@paul.com',
        skills: ['HTML', 'CSS', 'JavaScript', 'MongoDB', 'Express', 'React', 'Node'],
        age: 20,
        isLoggedIn: false,
        points: 40
    }
}
const people = Object.keys(users)

const skillsLength = people.map(person => {
    const personData = users[person]
    return personData.skills.length
})

const highestSkills = Math.max(...skillsLength)

const highestPerson = people.filter(person => {
    return users[person].skills.length == highestSkills
})

console.log(highestPerson.join(', '), highestSkills)



// console.log(user)

const isLoggedIn = Object.keys(users).filter(user => users[user].isLoggedIn)
console.log(isLoggedIn)

const pointUpTo50 = Object.keys(users).filter(user => users[user].points >= 50)

console.log(pointUpTo50)