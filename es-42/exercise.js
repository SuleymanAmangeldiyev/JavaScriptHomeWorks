let user = {
  name: "Cosimo",
  age: 30,
};



// for(let key in user){
//   newUser[key] = user[key];
// }
let newUser = {...user, name : "Paolo", id: 1};




console.log(newUser);
console.log(user);


