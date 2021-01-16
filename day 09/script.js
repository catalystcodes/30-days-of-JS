// Example of callback function

function greeting(name) {
    alert('Hello ' + name + "🙃🙃");
}

function processUserInput(callback) {
    var name = prompt('Please enter your name.');
    callback(name);
}

console.log(processUserInput(greeting))

// More examples

const callBack = (n) => n ** 2

function cube(classBack, n) {
    return callBack(n) * n
}

console.log(cube(callBack, 3))