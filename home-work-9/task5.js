const users = [
  { name: "Alex", email: "alex@gmail.com", age: 25 },
  { name: "Alice", email: "alice@gmail.com", age: 22 },
  { name: "Paul", email: "paul@gmail.com", age: 30 },
];

for (const user of users) {
  const { name, email, age } = user;

  console.log(`Name: ${name}, Email: ${email}, Age: ${age}`);
}
