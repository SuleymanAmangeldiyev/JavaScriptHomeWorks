const names = ["Luca", "Marco", "Vittorio", "Giovanni"];

//remove the 'Giovanni' and add it to rm1
let rm1 = names.pop();
//add a new element called 'Pippo' at teh end of the array
names.push("Pippo");
//add the element 'Giovanni' to the beginning of the array
names.unshift(rm1);


console.log(names);
