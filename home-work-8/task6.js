const numbersList = [1, 10, 14, 2, 4, 5, 43, 34];
let newNumbersList = numbersList.slice();
const ascendingNumbers = newNumbersList.toSorted((a, b) => a - b);

console.log(newNumbersList);
console.log(ascendingNumbers);

