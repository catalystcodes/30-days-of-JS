function greeting(name) {
    alert('Hello ' + name + "🙃🙃");
}

function processUserInput(callback) {
    var name = prompt('Please enter your name.');
    callback(name);
}

console.log(processUserInput(greeting))