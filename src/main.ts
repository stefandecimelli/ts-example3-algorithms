import initfib from "./initfib";
import {results, button, reset} from "./elements";

let loop: NodeJS.Timeout;
let switcher = true;
let fibonacci = initfib();

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
    button.textContent = switcher ? "Start" : "Stop";
}

button.addEventListener("click", () => {
    if (switcher) {
        loop = setInterval(addCalculation, 10);
    } else {
        clearInterval(loop);
    }
    switcher = !switcher;
    switchButtonText();
});

reset.addEventListener("click", () => {
    clearInterval(loop);
    button.disabled = false;
    fibonacci = initfib();
    results.innerHTML = '';
    switcher = true;
    switchButtonText();
})
