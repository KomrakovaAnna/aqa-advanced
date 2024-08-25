//Declarative function
function recArea(width, height) {
  return width * height;
}
/**
 * const rectangleArea = recArea(5,10);
 * console.log(rectangleArea);
 */
console.log(recArea(5, 10));
//function expression
const getRectArea = function (width, height) {
  return width * height;
};

console.log(getRectArea(5, 10));

//arrow function
const areaOfRect = (width, height) => width * height;

console.log(areaOfRect(5, 10));
