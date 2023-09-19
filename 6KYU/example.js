// async function fetchAndFilterManufacturers(apiEndpoint, delayInMilliseconds) {
//     try {
//         // Use fetch with async/await to fetch data from the API
//         const response = await fetch(apiEndpoint);
        

//         if (!response.ok) {
//           throw new Error(`HTTP error! Status: ${response.status}`);
//         }
  
//         const data = await response.json();
        
//         // Filter manufacturers with Country equal to "UNITED STATES (USA)"
//         const usManufacturers = data.Results.filter(manufacturer => {
//           return manufacturer.Country === "UNITED STATES (USA)";
       
//         });
  
//         // Log the filtered results
//         console.log('Manufacturers from the USA:', usManufacturers);
  
//         // Delay execution for the specified time interval
//         await new Promise(resolve => setTimeout(resolve, delayInMilliseconds));
      
//     } catch (error) {
//       console.error('Error:', error);
//     }
//   }
  
//   // Example usage:
//   const apiEndpoint = 'https://vpic.nhtsa.dot.gov/api/vehicles/GetAllManufacturers?format=json&page=2';
//   const delayInMilliseconds = 2000; // 5 seconds
  
// //   fetchAndFilterManufacturers(apiEndpoint, delayInMilliseconds);
  
// function performFastAsync(apiEndpoint, timerDelay) {
//     // Create a promise for the HTTP GET request
//     const fetchPromise = fetch(apiEndpoint);
  
//     // Create a promise for the timer
//     const timerPromise = new Promise((resolve) => {
//       setTimeout(() => {
//         resolve('Timer finished');
//       }, timerDelay);
//     });
  
//     // Use Promise.race() to race between the fetch and timer promises
//     return Promise.race([fetchPromise, timerPromise])
//       .then((result) => {
//         // Check which promise won the race
//         if (result === 'Timer finished') {
//           // Timer finished first, cancel the fetch request (if it's still pending)
//           fetchPromise.abort(); // You can implement request cancellation using AbortController
//           return 'Timer won';
//         } else {
//           // Fetch request completed first, cancel the timer
//           clearTimeout(timerPromise);
//           return 'Fetch won';
//         }
//       })
//       .catch((error) => {
//         // Handle errors (e.g., fetch error or timer error)
//         return error.message;
//       });
//   }
  
//   // Example usage:
//   const apiEndpoint = 'https://jsonplaceholder.typicode.com/posts/1';
//   const timerDelay = 2000; // 2 seconds
  
//   performFastAsync(apiEndpoint, timerDelay)
//     .then((result) => {
//       console.log('Result:', result);
//     })
//     .catch((error) => {
//       console.error('Error:', error);
//     });
// function repeat_Function(fn, interval) {
//     fn(); 
//     const intervalId = setInterval(fn, interval); 
//     return function stopExecution() {
//       clearInterval(intervalId);
//       console.log('Execution stopped.');
//     };
//   }
//   function printMessage() {
//     console.log('Executing the function...');
//   }
  
//   // Start the repeated execution
//   const stopExecution = repeat_Function(printMessage, 1000);
  
//   // Stop the execution after 4 seconds
//   setTimeout(stopExecution, 4000);
  
  