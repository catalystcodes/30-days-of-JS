// Exercises: Level 1

// let age = prompt("Enter your age");

// let convertAgeNum = Number(age);
// // let age = 16
// if (convertAgeNum < 18) {
//     let ageDiff = 18 - convertAgeNum
//     alert(`You are left with ${ageDiff} years to drive.`)
// } else {
//     alert('You are old enough to drive.')
// }

// let myAge = prompt('Enter your age')
// let ageNum = Number(myAge)
// let yourAge = prompt('Enter your age')
// let numAge = Number(yourAge)

// ageNum > numAge ? console.log('I am older than you') : ageNum === numAge ? console.log('We are age mate!') : console.log('You are older than me!')

//  let a = prompt("Enter A value");
//  let aConverted = Number(a);
//  let b = prompt("Enter B value");
//  let bConverted = Number(b);
//  if (aConverted > bConverted) {
//      alert("a is greater than b!")
//  } else if (aConverted === bConverted) {
//      alert("a is equal to b!")
//  } else {
//      alert("b is greater than a!")
//  }

//  let number = prompt('Enter a number')
//  let numberConvert = Number(number)

//  if (numberConvert % 2 === 0) {
//      alert(`${numberConvert} is an even number`)
//  } else {
//      alert(`${numberConvert} is not an even number`)
//  }


//  let scores = prompt('Enter student scores');

//  if (scores == '') {
//      alert('this is an invalid grade value')
//  }

//  let scoresConvert = Number(scores);

//  if (scoresConvert > 100) {
//      alert('this is an invalid grade value')
//  }

//  if (scoresConvert >= 80 && scoresConvert <= 100) {
//      alert('the grade for this student is A')
//  } else if (scoresConvert >= 70 && scoresConvert <= 79) {
//      alert("the grade for this student is B")
//  } else if (scoresConvert >= 60 && scoresConvert <= 69) {
//      alert("the grade for this student is C")
//  } else if (scoresConvert >= 50 && scoresConvert <= 59) {
//      alert("the grade for this student is D")
//  } else {
//      alert("the grade for this student is F")
//  }

//  let weather = prompt('Enter month')
//  switch (weather) {
//      case 'September':
//          alert('the season is Autumn.')
//          break;
//      case 'October':
//          alert('the season is Autumn.')
//          break;
//      case 'November':
//          alert('the season is Autumn.')
//          break;
//      case 'December':
//          alert('the season is Winter.')
//          break;
//      case 'January':
//          alert('the season is Winter.')
//          break;
//      case ' February':
//          alert('the season is Winter.')
//          break;
//      case 'March':
//          alert('the season is Spring.')
//          break;
//      case 'April':
//          alert('the season is Spring.')
//          break;
//      case 'May':
//          alert('the season is Spring.')
//          break;
//      case 'June':
//          alert('the season is Summer.')
//          break;
//      case 'July':
//          alert('the season is Summer.')
//          break;
//      case 'August':
//          alert('the season is Summer.')
//          break;
//  }

//  function checkDay(day) {
//      if (day === 'Saturday' || day === 'Sunday') {
//          alert(`${day} is a weekend`)
//      } else {
//          alert(`${day} is a working day`)
//      }
//  }
// checkDay('Monday')


let day = prompt('Enter a day');

if (day === 'Saturday' || day === 'Sunday') {
    alert(`${day} is a weekend`)
} else {
    alert(`${day} is a working day`)
}



//Exercises: Level 2