const throwErrFun = () => {
	let message
	let x = prompt("Enter a number : ")
	try {
		if (x == '') throw 'Nigga you have inputed NOTHING'
		if (isNaN(x)) throw 'not a number'
		x = Number(x)
		if (x < 5) throw 'too low'
		if (x > 10) throw 'too high'
	} catch (err) {
		console.log(err)
	}
}
throwErrFun()


