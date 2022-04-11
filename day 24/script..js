const inputEl = document.querySelector("input");
const selectEl = document.querySelector("select");
const formEl = document.querySelector("form");
const innerEl = document.querySelector(".inner");
const imgEl = document.querySelector("img");
const mainEl = document.querySelector(".main");
const planets = [
  "EARTH",
  "JUPITER",
  "MARS",
  "MERCURY",
  "MOON",
  "NEPTUNE",
  "PLUTO",
  "SATURN",
  "URANUS",
  "VENUS",
];
const planetDivisors = {
  earth: 2.2046,
  jupiter: 2.1,
  mars: 2.2,
  mercury: 2.3,
  moon: 3,
  neptune: 2.11,
  pluto: 1.8,
  saturn: 2.22,
  uranus: 1,
  venus: 2.8,
};

planets.forEach((planet) => {
  selectEl.innerHTML += `<option value='${planet}'>${planet}</option>`;
});
const planetUrl =
  "https://raw.githubusercontent.com/Asabeneh/30-Days-Of-JavaScript/master/24_Day_Peroject_solar_system/24_day_starter/images";

formEl.addEventListener("submit", (e) => {
  e.preventDefault();
  innerEl.classList.remove("hide");

  const mass = e.target.mass.value;
  const planet = e.target.planet.value;
  imgEl.setAttribute("src", `${planetUrl}/${planet.toLowerCase()}.png`);
  mainEl.style.display = "flex";
  mainEl.style.justifyContent = "center";
  mainEl.style.alignItems = "center";
  if (!mass) {
	innerEl.textContent = "Mass is required";
	imgEl.classList.add("hide");
	return;
  }
  if (!planet) {
	innerEl.textContent = "You did not choose a planet yet";

	return;
  }

  imgEl.classList.remove("hide");
  const weight = Number(mass) / planetDivisors[planet.toLowerCase()];
  innerEl.innerHTML = `The weight of the object on ${planet} is <span class = 'weigh'>${weight.toFixed(
	2
  )} N</span>`;
  const weighEl = document.querySelector(".weigh");
  weighEl.style.backgroundColor = "rgba(100, 100, 100, 0.6)";
  weighEl.style.width = "7rem";
  weighEl.style.height = "7rem";
  weighEl.style.borderRadius = "50%";
  weighEl.style.display = "grid";
  weighEl.style.placeItems = "center";
  weighEl.style.margin = "1rem";
  weighEl.style.fontWeight = "bolder";
});