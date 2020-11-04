/*
   Exercise 5
*/
console.log(typeof name, typeof isAgirl, typeof noOfBrothers, typeof noOfSisters)



// Exercise: Level 1             


// var challenge =  '30 Days Of JavaScript'
// undefined
// console.log(challenge)
// VM2126:1 30 Days Of JavaScript
// undefined
// console.log(challenge.length)
// VM2261:1 21
// undefined
// console.log(challenge.toUpperCase)
// VM2323:1 ƒ toUpperCase() { [native code] }
// undefined
// console.log(challenge.toUpperCase)
// VM2612:1 ƒ toUpperCase() { [native code] }
// undefined
// console.log(challenge.toUpperCase())
// VM2624:1 30 DAYS OF JAVASCRIPT
// undefined
// console.log(challenge.toLowerCase())
// VM2676:1 30 days of javascript
// undefined
// console.log(challenge[0])
// VM2752:1 3
// undefined
// console.log(challenge[0].substr())
// VM2782:1 3
// undefined
// console.log(challenge[3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14].substr())
// VM2843:1 a
// undefined
// '30 Days Of JavaScript'.substr(0)
// "30 Days Of JavaScript"
// '30 Days Of JavaScript'.substr(2)
// " Days Of JavaScript"
// '30 Days Of JavaScript'.substr(3)
// "Days Of JavaScript"
// '30 Days Of JavaScript'.includes(Script)
// VM3048:1 Uncaught ReferenceError: Script is not defined
//     at <anonymous>:1:34
// (anonymous) @ VM3048:1
// '30 Days Of JavaScript'.includes("Script")
// true
// '30 Days Of JavaScript'.split()
// ["30 Days Of JavaScript"]
// '30 Days Of JavaScript'.split("")
// (21) ["3", "0", " ", "D", "a", "y", "s", " ", "O", "f", " ", "J", "a", "v", "a", "S", "c", "r", "i", "p", "t"]
// 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon'.split()
// ["Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon"]
// 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon'.split("")
// (55) ["F", "a", "c", "e", "b", "o", "o", "k", ",", " ", "G", "o", "o", "g", "l", "e", ",", " ", "M", "i", "c", "r", "o", "s", "o", "f", "t", ",", " ", "A", "p", "p", "l", "e", ",", " ", "I", "B", "M", ",", " ", "O", "r", "a", "c", "l", "e", ",", " ", "A", "m", "a", "z", "o", "n"]
// "30 Days Of JavaScript".replace(30 Days Of Python)
// VM3270:1 Uncaught SyntaxError: missing ) after argument list
// "30 Days Of JavaScript".replace("30 Days Of Python")
// "30 Days Of JavaScript"
// let topic = "30 Days Of JavaScript"
// undefined
// console.log(topic.replace())
// VM3419:1 30 Days Of JavaScript
// undefined
// console.log(topic.replace("30 Days Of Python"))
// VM3462:1 30 Days Of JavaScript
// undefined
// let newTopic = "30 Days Of Python"
// undefined
// console.log(topic.replace(newTopic))
// VM3578:1 30 Days Of JavaScript
// undefined
// console.log(newTopic)
// VM3641:1 30 Days Of Python
// undefined
// "30 Days Of JavaScript".charAt(15)
// "S"
// "30 Days Of JavaScript".charCodeAt(a)
// VM3814:1 Uncaught ReferenceError: a is not defined
//     at <anonymous>:1:36
// (anonymous) @ VM3814:1
// "30 Days Of JavaScript".charCodeAt("J")
// 51
// "30 Days Of JavaScript".indexOf("a")
// 4
// "30 Days Of JavaScript".lastIndexOf("a")
// 14
// 'You cannot end a sentence with because because because is a conjunction'.indexOf("because")
// 31
// 'You cannot end a sentence with because because because is a conjunction'.lastIndexOf("because")
// 47
// 'You cannot end a sentence with because because because is a conjunction'.search("because")
// 31
//  ' 30 Days Of JavaScript '.trim
// ƒ trim() { [native code] }
//  ' 30 Days Of JavaScript '.trim()
// "30 Days Of JavaScript"
//  ' 30 Days Of JavaScript '.startsWith()
// false
// "30 Days Of JavaScript".startsWith(30 Days Of JavaScript)
// VM4251:1 Uncaught SyntaxError: missing ) after argument list
// "30 Days Of JavaScript".startsWith("30 Days Of JavaScript")
// true
// "30 Days Of JavaScript".endsWith()
// false
// "30 Days Of JavaScript".endsWith("30 Days Of JavaScript")
// true
// "30 Days Of JavaScript".match("a")
// ["a", index: 4, input: "30 Days Of JavaScript", groups: undefined]
// let name_1 = "30 Days of"
// undefined
// let name_2 = "JavaScript"
// undefined
// console.log(name_1, name_2)
// VM4623:1 30 Days of JavaScript
// undefined
//  '30 Days of', 'JavaScript'.concat()
// "JavaScript"
//  '30 Days of' 'JavaScript'.concat()
// VM4756:1 Uncaught SyntaxError: Unexpected string
// console.log(name_1.concat(name_2))
// VM4879:1 30 Days ofJavaScript
// undefined
// "30 Days Of JavaScript".repeat(2)
// "30 Days Of JavaScript30 Days Of JavaScript"


day 4

let num = 2
if (num > 0) {
    console.log(`${num} is a positive number`)
} else {
    console.log(`${num} is a negative number`)
}
