// //level1

const paragraph = document.querySelector("p")
paragraph.style.color = "blue"

const useId = document.querySelector('#id1')
useId.style.fontSize = "1.5rem"

const useId2 = document.querySelector('#id2')
useId2.style.fontStyle = "italic"

const useId3 = document.querySelector('#id3')
useId3.style.fontWeight = 'bold'

const nodeList = document.querySelectorAll('p')

for (let i = 0; i < nodeList.length; i++) {
  console.log(nodeList[i])
}

const changedFouthPara = document.querySelector('#id3')
changedFouthPara.textContent = 'Fourth Paragraph'

console.log(nodeList)

const titles = document.querySelectorAll('p')
titles[0].setAttribute('class', 'paragraph')
titles[0].setAttribute('id', 'first-paragraph')

// const titles = document.querySelectorAll('p')
titles[1].setAttribute('class', 'paragraph')
titles[1].setAttribute('id', 'second-paragraph')

// const titles = document.querySelectorAll('p')
titles[2].setAttribute('class', 'paragraph')
titles[2].setAttribute('id', 'third-title')

// const titles = document.querySelectorAll('p')
titles[3].setAttribute('class', 'paragraph')
titles[3].setAttribute('id', 'fourth-title')

const randomEl = document.querySelector('h1')
randomEl.innerHTML = Math.floor(Math.random() * 255) +1


function random_rgba() {
    var o = Math.round, r = Math.random, s = 255;
    return 'rgba(' + o(r()*s) + ',' + o(r()*s) + ',' + o(r()*s) + ',' + r().toFixed(1) + ')';
  }
const  color = random_rgba()
randomNum.style.backgroundColor  = color;
randomNum.style.color  = black;
randomNum.style.fontSize = "";