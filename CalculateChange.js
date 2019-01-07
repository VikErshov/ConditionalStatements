const getGets = (arr) => {
    let index = 0;

    return () => {
        const toReturn = arr[index];
        index += 1;
        return toReturn;
    };
};

// This is the place where you must place your test data
const test = [
    '0.76',
    '1.95',

    // This is the first line from the test.
    // This is the second line from the test.
];

const gets = this.gets || getGets(test);
const print = this.print || console.log;

// Solution of the problem. All the above code is for local testing. The test variable is with the first test case 2 + 2 = 4

let price = +gets();
let amountPaid = +gets();

let change = amountPaid - price;
let tempChange = 0;
let numberOfCoins = 0;

if (change >= 1) {
    tempChange = change;
    change = change % 1;
    change = +change.toFixed(2);
    numberOfCoins = (tempChange - change) / 1;
    print(`${numberOfCoins.toFixed()} x 1 lev`)
}

if (change >= 0.50) {
    tempChange = change;
    change = change % 0.50;
    change = +change.toFixed(2);
    numberOfCoins = (tempChange - change) / 0.50;
    print(`${numberOfCoins.toFixed()} x 50 stotinki`)
}
if (change >= 0.20) {
    tempChange = change;
    change = change % 0.20;
    change = +change.toFixed(2);
    numberOfCoins = (tempChange - change) / 0.20;
    print(`${numberOfCoins.toFixed()} x 20 stotinki`);
}
if (change >= 0.10) {
    tempChange = change;
    change = change % 0.10;
    change = +change.toFixed(2);
    numberOfCoins = (tempChange - change) / 0.10;
    print(`${numberOfCoins.toFixed()} x 10 stotinki`);
}
if (change >= 0.05) {
    tempChange = change;
    change = change % 0.05;
    change = +change.toFixed(2);
    numberOfCoins = (tempChange - change) / 0.05;
    print(`${numberOfCoins.toFixed()} x 5 stotinki`);
}
if (change >= 0.02) {
    tempChange = change;
    change = change % 0.02;
    change = +change.toFixed(2);
    numberOfCoins = (tempChange - change) / 0.02;
    print(`${numberOfCoins.toFixed()} x 2 stotinki`);
}
if (change >= 0.01) {
    tempChange = change;
    change = change % 0.01;
    change = +change.toFixed(2);
    numberOfCoins = (tempChange - change) / 0.01;
    print(`${numberOfCoins.toFixed()} x 1 stotinka`);

}