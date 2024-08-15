const person = {
  firstName: "Anna",
  lastName: "Komrakova",
  age: 35,
};

person.email = "komrakova.anna@gmail.com";

delete person.age;

console.log(person);
