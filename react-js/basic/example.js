// const user = {
//     name: "Alice",
//     age: 28,
//     address: {
//       city: "New York",
//       zip: 10001
//     }
//   };

//   let {name} = user;
//   let {city,zip} = user.address;

//   console.log(name);
//   console.log(city,zip) 

// const person = {firstname : "john" , lastname : "doe"}

// let {firstname,lastname} = person;

// console.log(firstname,lastname);

// const employee = {
//     name: "Jane",
//     department: {
//       name: "Engineering",
//       location: "Building A"
//     }
//   };
//   let { name } = employee; // Extracts employee's name: "Jane"
//   let { location } = employee.department; //

//   let {
//     department: { name: deptName}
//   } = employee;
  
//   console.log(name);       // "Jane"
//   console.log(deptName);   // "Engineering"
//   console.log(location);   // "Building A"


// const student = { fullName: "Alice", grade: "A" };

// let {fullName : name,grade : score} = student
// console.log(name,score);

// const colors = ["red", "green", "blue"];

// let [red,green,blue] = colors;
// console.log(red,green,blue);

// let [first,second] = colors
// console.log(first,second)

// const numbers = [10, 20, 30, 40];
// // 👉 Extract first and third elements only

// let [first,,third] = numbers;
// console.log(first, third);

// let a = 1, b = 2;
// // 👉 Swap values of a and b using array destructuring

// [a,b] = [b,a]
// console.log(a,b);

//Spreading Arrays
// const arr1 = [1, 2, 3];
// const arr2 = [4, 5, 6];

// const combined = [...arr1, ...arr2];
// console.log(combined);


//Copying Arrays
// const original = [10,20,39];
// const copy = [...original];

// copy.push(88);

// console.log(original);
// console.log(copy);

// Spread with Objects

// const user = { name: "honey", age: 20 };
// const updatedUser = { ...user, age: 21 };

// console.log(updatedUser); 

// Spread in Function Calls
const nums = [5, 10, 15];

function sum(a, b, c) {
  return a + b + c;
}

console.log(sum(...nums)); // 30
