const car1 = {
    brand: "Volkswagen",
    model: "Polo",
    year: 2010
};

const car2 = {
    brand: "Honda",
    model: "Civic",
    owner: "Polly"
};

const car3 = {
    ...car1,
    ...car2
};

console.log(car3);
