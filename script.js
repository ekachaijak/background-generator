const CSS = document.querySelector("h3");
const color1 = document.querySelector(".color1");
const color2 = document.querySelector(".color2");
const body = document.getElementById("gradient");
const randomBtn = document.getElementById("randomBtn");
const directionBtn = document.getElementById("directionBtn");

const directions = ["to right", "to left", "to bottom", "to top"];
let currentDirectionIndex = 0;


const setGradient = () => {
	body.style.background = `linear-gradient(${directions[currentDirectionIndex]}, ${color1.value}, ${color2.value})`;
	CSS.textContent = `${body.style.background};`;
};

const getRandomColor = () => {
	const r = Math.floor(Math.random() * 256);
	const g = Math.floor(Math.random() * 256);
	const b = Math.floor(Math.random() * 256);
	return `#${r.toString(16).padStart(2, "0")}${g.toString(16).padStart(2, "0")}${b.toString(16).padStart(2, "0")}`;
};

//Event listeners
randomBtn.addEventListener("click", () => {
	color1.value = getRandomColor();
	color2.value = getRandomColor();
	setGradient();
});

directionBtn.addEventListener("click", () => {
	currentDirectionIndex = (currentDirectionIndex + 1) % directions.length;
	setGradient();
});

color1.addEventListener("input", setGradient);
color2.addEventListener("input", setGradient);

setGradient();