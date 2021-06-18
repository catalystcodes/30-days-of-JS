const randomNo = (max = 255, min = 0) => Math.round(Math.random() * (max - min) + min)
// selectors
const bodyEl = document.querySelector('body')
const wrapperEl = document.querySelector('.wrapper')
const headerEl = document.querySelector('header')
const h1El = document.querySelector('h1')
h1El.innerHTML = h1El.textContent.replace(/\d+/, '').trim() + ` <span id="year">${new Date().getFullYear()}</span>`
const yearEl = document.getElementById('year')
headerEl.innerHTML += '<p><span id="time">June 15, 2021 2:43:45</span></p>'
const timeEl = document.querySelector('#time')
const taskEls = document.querySelectorAll('li')

//style
bodyEl.style.fontFamily = 'Avenir, Segoe ui, Ubuntu, Sans-serif'
wrapperEl.style.maxWidth = '40rem'
wrapperEl.style.margin = 'auto'
headerEl.style.textAlign = 'center'
h1El.style.marginBottom = '-1rem'
document.getElementById('year').style.fontSize = '4rem'
document.getElementById('time').style.padding = '0.25rem 1.5rem'

setInterval(() => {
  document.getElementById('year').style.color = `rgb(${randomNo()}, ${randomNo()}, ${randomNo()})`
  timeEl.style.backgroundColor = `rgb(${randomNo()}, ${randomNo()}, ${randomNo()})`
}, 1000)

sublist1El = document.querySelector('div.list1.sub-list1.p')


const challengeOne = document.querySelector('.challengeOne');
const challengeTwo = document.querySelector('.challengeTwo');
const challengeThree = document.querySelector('.challengeThree');
const challengeFour = document.querySelector('.challengeFour');
const challengeFive = document.querySelector('.challengeFive');
const challengeSix = document.querySelector('.challengeSix');
const challengeSeven = document.querySelector('.challengeSeven');
const challengeEight = document.querySelector('.challengeEight');
