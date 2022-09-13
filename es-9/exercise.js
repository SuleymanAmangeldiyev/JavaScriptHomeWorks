const firstname = "Mario";
const lastname = "Rossi";
const age = 27;
const isGraduated = false;
const average = 27;
const examsCompleted = 10;
const firstYearCompleted = true;
const yearsCompleted = 1;


//first line will return to false because both them string and they have defferent valus...
console.log(firstname == lastname);
//second line will return to true because the condition is equal or less than... and they are equal to each other so it is true
console.log(age <= average);
//third line will return to false because the condition is equal and the valus aren't equal to each other so it is false
console.log(firstYearCompleted == lastname);
//4 th will return to true because both of the are ture which means both of the equal to 1
console.log(yearsCompleted == firstYearCompleted);
// this will return to false because one of the boolean and other one is numbers
console.log(firstYearCompleted === yearsCompleted);
// this will return to ture because examsCompleted is less than age
console.log(examsCompleted < age);
// this will return to false because isGraduated equal to null and not greater than yearsCompleted
console.log(isGraduated > yearsCompleted);

// name == lastname;
// age <= average;
// firstYearCompleted == lastname;
// yearsCompleted == firstYearCompleted;
// firstYearCompleted === yearsCompleted;
// examsCompleted < age;
// isGraduated > yearsCompleted;