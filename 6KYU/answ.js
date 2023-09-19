// function print(fn, initial) {
//     const interval = setInterval(fn, initial);
//     return function execute() {
//       clearInterval(interval);
//     };
//   }
//   let count = 1;
  
//   function printingNumber() {
//     if (count <= 10) {
//       console.log(count);
//       count++;
//     } else {
//       clearInterval(interval); 
//     }
//   }
  
//   let execution = print(printingNumber, 1000);
//   setTimeout(() => {
//     execution();
//   }, 11000);
  

// async function christmass(apiurl, jokeId) {
//     try {
//       const response = await fetch(apiurl); 
//       const jokes = await response.json(); 
//       const joke = jokes.find((joke) => joke.id === jokeId);
  
//       if (joke) {
//         console.log(joke); 
//         return joke; 
//       } else {
//         throw new Error('Joke not found');
//       }
//     } catch (error) {
//       console.error(error);
//     }
//   }
  
//   christmass('https://my-json-server.typicode.com/IbrahimBagalwa/test-json-placeholder/jokes', 2);
  
// async function logManufactures() {
//     try{
//         const endpoint = await fetch('https://vpic.nhtsa.dot.gov/api/vehicles/GetAllManufacturers?format=json&page=2')
//         const data = await endpoint.json()
//        // console.log(data)
//         const usData = data.Results.filter((items) => {
//             return items.Country = 'UNITED STATES (USA)';
//         })
//         return usData
//        // console.log(usData)
//     } catch {(err) => {
//         console.log(err)
//     }
//     }
// }

// logManufactures().then(res => console.log(res) )
// .catch(err => console.log(err))