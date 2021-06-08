//Exercises:Level 1

const countries = [
    ['Finland', 'Helsinki'],
    ['Sweden', 'Stockholm'],
    ['Norway', 'Oslo']
]

console.table(countries)

const countryA = {
    'Finland': 'Helsinki',
    'Sweden': 'Stockholm',
    'Norway': 'Oslo'
}

console.table(countryA)

const names = ['Asabeneh', 'Brook', 'David', 'John']
const countryB = [
  ['Finland', 'Helsinki'],
  ['Sweden', 'Stockholm'],
  ['Norway', 'Oslo']
]
const user = {
  name: 'Asabeneh',
  title: 'Programmer',
  country: 'Finland',
  city: 'Helsinki',
  age: 250
}
const users = [
  {
    name: 'Asabeneh',
    title: 'Programmer',
    country: 'Finland',
    city: 'Helsinki',
    age: 250
  },
  {
    name: 'Eyob',
    title: 'Teacher',
    country: 'Sweden',
    city: 'London',
    age: 25
  },
  {
    name: 'Asab',
    title: 'Instructor',
    country: 'Norway',
    city: 'Oslo',
    age: 22
  },
  {
    name: 'Matias',
    title: 'Developer',
    country: 'Denmark',
    city: 'Copenhagen',
    age: 28
  }
]

console.group('Names')




console.log(names)
console.groupEnd()

console.group('CountryB')
console.log(countryB)
console.groupEnd()

console.group('Users')
console.log(user)
console.log(users)
console.groupEnd("mubby ::")


//Exercises:Level 2
console.assert(10 > 2 * 10, 'This is incorrect')
console.warn("THIS IS A WARNING MESSAGE")
console.error('THIS IS AN ERROR MESSAGE')