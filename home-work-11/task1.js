function printToConsole(text, delay) {

    setTimeout(() => {
        console.log(text);
    }, delay);

}

let text = 'Hello World!';
let delay = 1000;
printToConsole(text, delay);