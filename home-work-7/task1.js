function handleNum(number, handleEven, handleOdd) {
  number % 2 === 0 ? handleEven() : handleOdd();
}

function handleEven() {
  console.log('number is even');
}

function handleOdd() {
  console.log('number is odd');
}

handleNum(6, handleEven, handleOdd);
handleNum(1, handleEven, handleOdd);
