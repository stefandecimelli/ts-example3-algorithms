"use strict"

export default function initfib() {
    let previous = 0;
    let current = 1;
    let count = 1;

    return () => {
        const next = previous;
        previous = current;
        current = next + current;
        return [count++, next];
    };
}
