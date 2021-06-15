//level1

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