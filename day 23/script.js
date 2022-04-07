window.addEventListener("keydown", (e) => {
	document.querySelector(
	  "h1"
	).innerHTML = `You pressed <span id="key"></span>`;
	document.querySelector("#key").textContent = e.key;
	document.querySelector("#code").textContent = e.keyCode;
	document.querySelector("#code").style.padding = "2rem 2rem";
	document.querySelector("#code").style.boxShadow = "0px 0px 5px 1px lightgrey";
});