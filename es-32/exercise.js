let name = "Suleyman";

function sayHelloName(goBack) {
  
  setTimeout(function () {
    console.log(`Hello  ${name}`);

    goBack();
  }, 1000);
}

function printName() {
  console.log(name);
}

sayHelloName(printName);
