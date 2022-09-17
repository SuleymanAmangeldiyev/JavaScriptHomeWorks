const smartphone = {
  brand: "Apple",
  name: "Iphone 13",
  price: 1300,
};

// Object.freeze(smartphone);

smartphone.price = 100;

console.log(smartphone);


const smartphone1 = {
  brand: "Apple",
  name: "Iphone 13",
  price: 1300,
};

Object.freeze(smartphone1);

smartphone1.price = 100;

console.log(smartphone1);