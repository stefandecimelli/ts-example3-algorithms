import initfib from "./initfib";

const fibonacci = initfib();
const results = document.getElementById("results");
const button = document.getElementById("stop") as HTMLButtonElement;

let loop: NodeJS.Timeout;
let switcher = true;

if (!button || !results) {
    throw Error("DOM not recognized!");
}

const addCalculation = () => {
    const [count, next] = fibonacci();
    if (count > 100) {
        clearInterval(loop);
        button.disabled = true;
        return switchButtonText();
    }
    const pre = document.createElement("pre");
    pre.className = "calculation";
    pre.textContent = `${count}: ${next}`;
    results.append(pre);
}

const switchButtonText = () => {
    button.textContent = button.textContent === "Start" ? "Stop" : "Start";
}

button.addEventListener("click", () => {
    if (switcher) {
        loop = setInterval(addCalculation, 10);
    } else {
        clearInterval(loop);
    }
    switchButtonText();
    switcher = !switcher;
});
