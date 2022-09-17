const students = [
  { id: 1, name: "Luca", surname: "Rossi", age: 20 },
  { id: 2, name: "Mario", surname: "Bianchi", age: 24 },
  { id: 3, name: "Giovanni", surname: "Brambilla", age: 30 },
];
//at the beginning 
console.log(students);

//after removed the last element of the array
students.pop();
console.log(students);

//after added the new element to the array
let toAdd = { id: 3, name: "Francesco", surname: "Verdi", age: 41 };
students.push(toAdd);
console.log(students);
