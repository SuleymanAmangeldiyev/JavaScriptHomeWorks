function Smartphone(brand, name, price){

  this.brand = brand;
  this.name = name;
  this.price = price;
}

let Mekan = new Smartphone("Sumsung", "Note-9", "1200$");
let Suleyman = new Smartphone("RedMe", "RedmeNote-9-Pro", "300$");

console.log(`Information about Mekan's phone`, Mekan);
console.log(`Information about Suleyman's phone`, Suleyman);

