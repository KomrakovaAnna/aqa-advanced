function getSum(arr) {
  if (!arr || arr.length <= 1) return 0;

  const arrSorted = arr.toSorted((a, b) => a - b);
  const lastNumber = arrSorted.length - 1;
  arrCut = arrSorted.slice(1, lastNumber);

  let sum = 0;
  for (const number of arrCut) {
    sum += number;
  }
  return sum;
}

console.log(getSum([6, 2, 1, 8, 10]));
console.log(getSum([1, 1, 11, 2, 3]));
console.log(getSum([]));
console.log(getSum([3]));
console.log(getSum(null));
