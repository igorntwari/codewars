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
//     const response = await fetch('https://jsonplaceholder.typicode.com/todos/1')
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

// function fetchUserTodos(){
//   const usersEndpoint = '<https://jsonplaceholder.typicode.com/users>';
//   const todosEndpoint = '<https://jsonplaceholder.typicode.com/todos>';

//   return Promise.all([
//     fetch(usersEndpoint).then(response => response.json()),
//     fetch(todosEndpoint).then(response => response.json())
//   ]).then(([users, todos]) => {
//     const todolist = new Map();

//     todos.forEach(todo => {
//       const userId = todo.userId;
//       if (!todolist.has(userId)) {
//         todolist.set(userId, []);
//       }
//       todolist.get(userId).push(todo);
//     });

//     users.forEach(user => {
//       if (todolist.has(user.id)) {
//         user.todos = todolist.get(user.id);
//       } else {
//         user.todos = [];
//       }
//     });

//     return users;
//   });
// }

// fetchUserTodos()
//   .then(data => console.log(data))
//   .catch(error => console.error(error));
