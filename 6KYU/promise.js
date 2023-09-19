// ------------------Exercises 1----------------

// // Write a function that creates a promise that resolves to a value of 5.
// //  Then, chain another promise off of it that multiplies the result by 2.
// //   Log the final result.
// let  promise = new Promise ((resolve, reject)=> {
//   resolve(5)
// }).then(data => console.log(data * 2))


    // ------------------Exercises 2----------------

//  Create a function called createAlarm that generates a wake-up message for a person after a specified time delay. 
//  This function should accept two parameters: the person's name and the delay time in seconds. 
// The function should return a promise that resolves with the wake-up message
// (e.g. Wake up person) but if the delay is less than 2 seconds, 
// the promise should be immediately rejected with an error message stating Delay is not sufficient

// function createAlarm(name, time) {
//   return new Promise((resolve, reject) => {
//     if (time < 2) {
//       reject('Delay is not sufficient');
//     } else {
//       setTimeout(() => {
//         resolve(`Wake up ${name}`);
//       }, time * 1000);
//     }
//   });
// }

// createAlarm('Igor', 5)
//   .then((message) => {
//     console.log(message);
//   })
//   .catch((error) => {
//     console.error(error);
//   });

 // ------------------Exercises 3----------------
//   Async/Await: Convert the following code from using .then and .catch to using async/await:
// fetch('https://api.github.com/users')
// .then(response => response.json())
// .then(users => console.log(users))
// .catch(error => console.log(error));

// async function getData() {
//   try{
//     const response = await fetch('https://api.github.com/users')
//     const users = await response.json();
//     console.log(users);
//   } catch(error) {
//     console.log(error)
//   }
// }
// getData()

  // ------------------Exercises 4----------------

//   1. Create a function called `myFetch` that should work
//    as a simple version of the native 
//    [fetch()](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API) 
//    API. The function `myFetch` 
//    should use the [XMLHttpRequest]
//    (https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest) 
//    to make a `GET` Request and return a promise that resolves with the
//  request’s response and rejects with an error if any.
   
// function myFetch(url) {
//   return new Promise((resolve, reject)=> {
//     const request = new XMLHttpRequest();
//     request.open('Get',url);
//      request.onload = ()=> {
//       if(request.status == 200) {
//         resolve(request.responseText)
//       } else {
//         reject(new Error(`failed to get dat${request.status}`))
//       }
//      }
//      request.send()
//   })
// }
// myFetch('https://dummyjson.com/products/1').then(data => console.log(data)).catch(err => console.error(err))

  // ------------------Exercises 5----------------


//   1. Create a function called `myReduce` that works similarly to the native
//    [Array.prototype.reduce()]
//    (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce) 
//    the function should receive 3 arguments: 
//     - The array itself is to be reduced
//     - A reducer callback function that will be used to reduce the array
//      (this callback function should 
//         itself receive 3 parameters: `accumulator`, `currentValue`, `currentIndex`,
//          and `array` (check the original [Array.prototype.reduce()]
//          (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce) 
//          docs for more info)
//     - The optional initial value
    
//     The function should return the results from running the `reducer`
//      callback function to completion over the entire array.

//  function myReduce(cb, initial) {
//   let result = initial ?? arr[0]
//   for(let i = initial == undefined ? 1:0;  i< arr.length; i++) {
//     result = cb(result, arr[i],i,arr)
//   }
//   return result
//  }
//   Array.prototype.myReduce = myReduce
// const arr = [100, 2, 3, 4];

// const sum = arr.myReduce((acc, cur) => acc + cur);
// console.log(sum);

// ------------------Exercises 6----------------




// 1. Create a function called `myReduce` that works similarly to the native
//  [Array.prototype.reduce()]
//  (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce)
//   the function should receive 3 arguments: 
//     - The array itself is to be reduced
//     - A reducer callback function that will be used to
//      reduce the array (this callback function should itself receive 
//       3 parameters: `accumulator`, `currentValue`, `currentIndex`,
//        and `array` (check the original [Array.prototype.reduce()]
//        (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce) docs for more info)
//     - The optional initial value
    
//     The function should return the results from running the `reducer`
//      callback function to completion over the entire array.

//  function myReduce (cb,  initial){
// let result = initial ?? this[0]
// for(let i = initial==undefined ? 1:0;  i< this.length; i++) {
// result = cb(result, this[i],i, this)
// }
// return  result
//  }

//  Array.prototype.myReduce = myReduce
//  const users = [
//   { name: 'igor', age: 76 },
//   { name: 'nezerwa', age: 12 },
//   { name: 'kaneza', age: 2 }
// ];

// const oldestAge = users.reduce((maxAge, currentUser) => {
//   if (currentUser.age > maxAge) {
//     return currentUser.age;
//   } else {
//     return maxAge;
//   }
// }, users[0].age);

// console.log(`The oldest age is ${oldestAge}`);

// Create a function called fetchUserTodos that uses the Promise.all() 
// method to fetch users and todos concurrently from the provided API endpoints and combine them based on the userId. 
// The function should return a promise that resolves with the combined data.

// - Users endpoints https://jsonplaceholder.typicode.com/users
// - Todos endpoints https://jsonplaceholder.typicode.com/todos
// The returned promise should resolve into an array of users, where each user object has a new key todos.
//  This key should contain an array of todos that belong to the user,
//  determined by matching the userId of the todo with the id of the user.

// async function fetchUserTodos() {
//   const end1 = new Promise((resolve, reject) => {
//     fetch('https://jsonplaceholder.typicode.com/users')
//     .then((res) => res.json())
//       .then((data) => resolve(data))
//       .catch((err) => reject(err));
//   });
//   const end2 = new Promise((resolve, reject) => {
//     fetch('https://jsonplaceholder.typicode.com/todos')
//     .then((res) => res.json())
//     .then((data) => resolve(data))
//     .catch((err) => reject(err));
//   })
//   try {
//     const data_2 = await Promise.all([end1, end2]);
//     data_2[0].forEach((user) => {
//       user.todos = [...data_2[1].filter((todo) => todo.userId === user.id)];
//     });
//     return data_2[0];
//   } catch (err_2) {
//     return console.log(err_2);
//   }
// }
// fetchUserTodos().then(data => {
//   console.log(data)
// }).catch(err => {
//   console.log(err)
// })
//1. Write a JavaScript function that takes a callback and invokes it after a delay of 2 second.
// function invokeCallback(cb) {
//   setTimeout(() => {
//     cb(); 
//   }, 2000);
// }
// invokeCallback(() => {
//   console.log("Callback invoked after a 2-second delay");
// });
// 2. Write a JavaScript program that converts a callback-based function to a Promise-based function
// function callback_BasedFunction(arg1, arg2, callback) {
//   // Perform asynchronous operations
//   // Call the callback with the result or error
//   setTimeout(() => {
//     const result = arg1 + arg2;
//     if (result % 2 !== 0) {
//       callback(null, result);
//     } else {
//       callback(new Error('Result is not odd!'), null);
//     }
//   }, 1000);
// }

// function promisifiedFunction(arg1, arg2) {
//   return new Promise((resolve, reject) => {
//     callback_BasedFunction(arg1, arg2, (error, result) => {
//       if (error) {
//         reject(error); // Reject the Promise with the error
//       } else {
//         resolve(result); // Resolve the Promise with the result
//       }
//     });
//   });
// }

// // Usage example:
// promisifiedFunction(2, 3)
//   .then(result => {
//     console.log('Result:', result);
//   })
//   .catch(error => {
//     console.log('Error:', error.message);
//   });

// promisifiedFunction(2, 4)
//   .then(result => {
//     console.log('Result:', result);
//   })
//   .catch(error => {
//     console.log('Error:', error.message);
//   });
// 3. Write a JavaScript a function that makes an HTTP GET 
// request and returns a Promise that resolves with the response data.

// function makeHTTP(url) {
//   return new Promise((resolve, reject) => {
//     fetch(url)
//       .then(response => {
//         if (!response.ok) {
//           throw new Error(`HTTP error! Status: ${response.status}`);
//         }
//         return response.json(); 
//       })
//       .then(data => {
//         resolve(data); 
//       })
//       .catch(error => {
//         reject(error); 
//       });
//   });
// }
// async function* asyncSequence(start, end) {
//   for (let i = start; i <= end; i++) {
//       yield new Promise((resolve, reject) => {
//           setTimeout(() => {
//               resolve(i);
//           }, 1000);
//       });

//   }
// }

// (async () => {
//   let seq = asyncSequence(1, 5);

//   for await (let num of seq) {
//       console.log(num);
//   }
// })();

//   1. Create a function called `myFetch` that should work
//    as a simple version of the native 
//    [fetch()](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API) 
//    API. The function `myFetch` 
//    should use the [XMLHttpRequest]
//    (https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest) 
//    to make a `GET` Request and return a promise that resolves with the
//  request’s response and rejects with an error if any.
   
function myFetch(url) {
  return new Promise((resolve, reject) => {
    const request = new XMLHttpRequest();
    request.open('GET', url);
    request.onload = () => {
      if (request.status === 200) {
        resolve(request.responseText);
      } else {
        reject(new Error(`Failed to get data: ${request.status}`));
      }
    };
    request.send();
  });
}

myFetch('https://dummyjson.com/products/1').then(data => console.log(data)).catch(err => console.error(err))