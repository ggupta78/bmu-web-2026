// 1. Promise with 1 level
// ------------------------------------------------------------

// Creation of the Promise
const fakeRequestPromise = (url) => {
  return new Promise((resolve, reject) => {
    const delay = Math.floor(Math.random() * 4500) + 500;
    setTimeout(() => {
      if (delay > 4000) {
        reject("Connection Timeout :(");
      } else {
        resolve(`Here is your fake data from ${url}`);
      }
    }, delay);
  });
};

fakeRequestPromise("yelp.com/api/coffee/page1")
  .then((data) => {
    console.log("IT WORKED!!!!!! (page1)");
    console.log(data);
  })
  .catch((err) => {
    console.log("OH NO, A REQUEST FAILED!!!");
    console.log(err);
  })
  .finally(() => {
    console.log("Executing promise - finally...");
  });

// 2. THE NESTED PROMISE VERSION

// fakeRequestPromise("yelp.com/api/coffee/page1")
//   .then((data) => {
//     console.log("IT WORKED!!!!!! (page1)", data);
//     fakeRequestPromise("yelp.com/api/coffee/page2")
//       .then((data) => {
//         console.log("IT WORKED!!!!!! (page2)", data);
//         fakeRequestPromise("yelp.com/api/coffee/page3")
//           .then((data) => {
//             console.log("IT WORKED!!!!!! (page3)", data);
//           })
//           .catch((data) => {
//             console.log("OH NO, ERROR!!! (page3)", data);
//           });
//       })
//       .catch((data) => {
//         console.log("OH NO, ERROR!!! (page2)", data);
//       });
//   })
//   .catch((data) => {
//     console.log("OH NO, ERROR!!! (page1)", data);
//   });

// 3. THE CLEANEST OPTION WITH THEN/CATCH
// RETURN A PROMISE FROM .THEN() CALLBACK SO WE CAN CHAIN!
// fakeRequestPromise("yelp.com/api/coffee/page1")
//   .then((data) => {
//     console.log("IT WORKED!!!!!! (page1)");
//     console.log(data);
//     return fakeRequestPromise("yelp.com/api/coffee/page2");
//   })
//   .then((data) => {
//     console.log("IT WORKED!!!!!! (page2)");
//     console.log(data);
//     return fakeRequestPromise("yelp.com/api/coffee/page3");
//   })
//   .then((data) => {
//     console.log("IT WORKED!!!!!! (page3)");
//     console.log(data);
//   })
//   .catch((err) => {
//     console.log("OH NO, A REQUEST FAILED!!!");
//     console.log(err);
//   })
//   .finally(() => {
//     console.log("Executing promise - finally...");
//   });

// 4. Promise without .then and .catch
// const resolveCallback = (msg) => {
//   console.log(msg);
// };

// const rejectCallback = (msg) => {
//   console.log(msg);
// };

// const simplePromise = new Promise((resolve, reject) => {
//   const delay = Math.floor(Math.random() * 4500) + 500;
//   setTimeout(() => {
//     if (delay > 4000) {
//       //Instead of callback need a proper function
//       rejectCallback("simplePromise Connection Timeout :(");
//       //Need to resolve or reject the promise inorder to complete it
//       reject(null);
//     } else {
//       //Instead of callback need a proper function
//       resolveCallback(`simplePromise Succeeded!`);
//       //Need to resolve or reject the promise inorder to complete it
//       resolve(null);
//     }
//   }, delay);
// });

// console.log(simplePromise);
