"use strict"

type Algorithm = () => [number, number];
type AlgorithmConstructor = () => Algorithm;

const fibinocci: AlgorithmConstructor = (): Algorithm => {
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

const logorithm: AlgorithmConstructor = (): Algorithm => {
    let count = 0;
    return () => [count, parseFloat(Math.log(count++).toFixed(10))];
}

const logorithm2: AlgorithmConstructor = (): Algorithm => {
    let count = 0;
    return () => [count, parseFloat(Math.log2(count++).toFixed(10))];
}

const square: AlgorithmConstructor = (): Algorithm => {
    let count = 0;
    return () => [count, count * count++];
}

const root: AlgorithmConstructor = (): Algorithm => {
    let count = 1;
    return () => [count, parseFloat(Math.sqrt(count++).toFixed(10))];
}

export default function getAlgorithm(name: string): Algorithm {
    switch (name) {
        case "log": return logorithm();
        case "log2": return logorithm2();
        case "fib": return fibinocci();
        case "square": return square();
        case "root": return root();
        default:
            throw Error("No such algorithm: " + name)
    }
}