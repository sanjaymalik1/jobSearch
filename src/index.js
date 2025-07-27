// ~ ~ ~ ~ ~ ~ ~ ~ ~ Sync Example ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~

// console.log("Sync Example 1");
// console.log("First sync Line");
// for(let i = 0; i < 1000000000; i++){
// }
// console.log("Second sync line");





// // ~ ~ ~ ~ ~ ~ ~ ~ ~  Async Example 1 ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~

// console.log(" Async Example 2");
// console.log(" Before async call");
// setTimeout(() => {
//       console.log(" Inside async callback ");
// }, 5000);

// console.log(" After async call ");





// // ~ ~ ~ ~ ~ ~ ~ ~ ~ Async Example 2 ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ 

//  function printNum(num, callback){
//      setTimeout(() => {
//          console.log(num);
//          callback();
//      }, 2000);
//  }

//  function print(){
//      console.log("Async Example 2");
//      printNum(1, () => {
//          printNum(2, () => {
//              printNum(3, () => {
//                   // console.log("nested log")
//               })
//           })
//       })
//   }

//   print();






// // ~ ~ ~ ~ ~ ~ ~ ~ setInterval Example ~ ~ ~ ~ ~ ~ ~ ~ ~ ~
// let count = 0;

// const intervalId = setInterval(() => {
//     count++;
//     console.log(Counter: ${count});
//     if (count === 5) {
//         clearInterval(intervalId);
//         console.log("Interval stopped at 5");
//     }
// }, 1000); 







// // ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ Fetch with Promise ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ 

// const fetchTodo = () => {
//     console.log("Start fetching...");

//     fetch("https://jsonplaceholder.typicode.com/todos/3")
//         .then((response) => {
//             console.log("Received Response:", response);
//             return response.json();
//         })       
//         .then((data) => {
//             console.log("Data:", data);
//         })
//         .catch((err) => {
//             console.log("Error:", err);
//         });

//      console.log("End of function");
// };

// fetchTodo();







// // ~ ~ ~ ~ ~ ~ ~ ~ ~ Async / Await  ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ 

// async function asyncFunc(){
//     return "Hey";
// }

// const result =  asyncFunc();
// console.log(result);

// // extract data 
// result.then((res) => console.log(res));

// // --------------
// async function main() {
//     const result = await asyncFunc();
//     console.log(result);
// }

// main();
// // ---------------







// // ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ Fetch with Async Await ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ 

// const fetchTodoAsync = async () => {
//     console.log("Start fetching...");

//     try {
//         const response = await fetch("https://jsonplaceholder.typicode.com/todos/3");
//         console.log("Received Response:", response);

//         const data = await response.json();
//         console.log("Data:", data);
//     }
//     catch (err) {
//         console.log("Error:", err);
//     }

//     console.log("End of function");
// };

// fetchTodoAsync();







// ~ ~ ~ ~ ~ ~ ~ ~ ~ Types Of Queues ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~

// console.log("Synchronous Line 1");

// setTimeout(() => {
//     console.log("Macrotask: setTimeout");
// }, 1000);

// fetch("https://jsonplaceholder.typicode.com/todos").then((response) => {
//     console.log("Microtask: fetch todo");
// });

// new Promise((resolve, reject) => {
//     console.log("Synchronous: Inside Promise executor");
//     setTimeout(() => {
//         resolve("Resolved after 1 seconds");
//     }, 1000);
// })
// .then((msg) => {
//     console.log("Microtask: Promise then");
// });

// console.log("Synchronous Line 2");



// ~ ~ ~ ~ ~ ~ ~ ~ event listeners ~ ~ ~ ~ ~ ~ ~
// console.log("Script start");
// const button = document.getElementById("clickMe");

// button.addEventListener("click", function () {
//       console.log("Button clicked!");
// });

// console.log("Script end");