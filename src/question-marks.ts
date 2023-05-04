// //ternary operator

// const age:number = 22;

// // if(age>=18) {
// //     console.log('Yes')
// // } else {
// //     console.log('No');
// // }

// const isAdult = age >= 18 ? "Yes" : "No";
// console.log(isAdult);

// //Nullish coalescing operator
// //Null and undefined

// // const isAuthenticateUser = null;
// const isAuthenticateUser = "";
// const userName = isAuthenticateUser ?? 'Guest';
// const userName2 = isAuthenticateUser ? isAuthenticateUser : "Guest";
// console.log({userName}, {userName2});

// type Manush = {
//     name: string;
//     age: number;
//     address: {
//         city: 'No city';
//         road: 'No road';
//         home?: "";
//     }
// }

// const manush1:Manush={
//     name: 'Manush',
//     age: 50,
//     address: {
//     city: "No city",
//     road: "No road"
//     }
// }

// const home = manush1?.address?.home ?? 'No home' // default 'No home'
// console.log({home});

function generateAdder(a: number): (b: number) => number {

    return function(b: number) {
  
      return a + b;
  
    };
  
  }
  
  
  
  const addTwo = generateAdder(2);
  
  console.log(addTwo(3));
  
  console.log(addTwo(5));
  
  

