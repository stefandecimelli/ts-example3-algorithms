import getAlgorithm from "./algorithms";
import { results, button, reset, algorithmSelector } from "./elements";

const getSelectorValue = () => {
    return algorithmSelector.options[algorithmSelector.selectedIndex].value;
}

let loop: NodeJS.Timeout;
let switcher = true;
let algorithm = getSelectorValue();
let calculator = getAlgorithm(algorithm);

const addCalculation = () => {
    const [count, next] = calculator();
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

const doReset = () => {
    clearInterval(loop);
    button.disabled = false;
    calculator = getAlgorithm(algorithm);
    results.innerHTML = '';
    switcher = true;
    switchButtonText();
}

const doStartStop = () => {
    if (switcher) {
        loop = setInterval(addCalculation, 5);
    } else {
        clearInterval(loop);
    }
    switcher = !switcher;
    switchButtonText();
}

const doChangeAlgorithm = () => {
    algorithm = getSelectorValue()
    doReset();
}

button.addEventListener("click", doStartStop);
reset.addEventListener("click", doReset)
algorithmSelector.addEventListener("change", doChangeAlgorithm);
