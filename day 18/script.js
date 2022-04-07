const doings = callback => {
	setInterval(() => {
		const skills = ['HTML', 'CSS', 'JS']
		callback("It does not go well oooooooo Boss", skills)
	}, 2000)
}

const callback = (err, result) => {
	if(err) {
		return console.log(err)
	}
	return console.log(result)
} 

doings(callback)