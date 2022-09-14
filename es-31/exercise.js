let name ="Suleyman";
function sayHelloName(goBack){
  console.log(`Hello  ${name}`);
  goBack(); 
}

function printName(){
  console.log(name);
}

sayHelloName(printName);