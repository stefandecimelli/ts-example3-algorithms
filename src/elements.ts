"use strict"

const results = document.getElementById("results") as HTMLElement;
const button = document.getElementById("stop") as HTMLButtonElement;
const reset = document.getElementById("reset") as HTMLButtonElement;

if (!button || !results || !reset) {
    throw Error("DOM not recognized!");
}

export {results, button, reset};