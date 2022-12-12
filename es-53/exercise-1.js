// function adultFilter(persons) {
//  let final = 0;
//   for(let i = 0; i < persons.length; i++){
//     if(persons[i].age > 18 && final <= persons[i].age){
//       final = persons[i].age;
//       var toGoBack = persons[i].name + " " + persons[i].age;
//     }
//   }
//   return toGoBack;
// }

const persons = [
  { name: "Paul", age: 16 },
  { name: "George", age: 17 },
  { name: "Lucas", age: 21 },
  { name: "Marco", age: 32 },
  { name: "Peter", age: 18 },
  { name: "Carl", age: 13 },
  { name: "Simon", age: 24 },
  { name: "Mark", age: 15 },
  { name: "Sandra", age: 34 },
  { name: "Alice", age: 28 },
];
const adultFilter = (persons) => persons.filter(({age}) => age >= 18);
const adults = adultFilter(persons);
console.log(persons);
console.log(adults);
