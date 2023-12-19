
function fib() {
    let previous = 0;
    let result = 1;

    return () => {
        const backup = previous;
        previous = result;
        result = backup + previous;
        return result;
    }
}