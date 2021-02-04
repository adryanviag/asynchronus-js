const getTodos = (resource) => {
  return new Promise((resolve, reject) => {
    const request = new XMLHttpRequest();

    request.addEventListener("readystatechange", () => {
      if (request.readyState === 4 && request.status === 200) {
        const data = JSON.parse(request.responseText);
        resolve(data);
      } else if (request.readyState === 4) {
        reject("404 Not Found");
      }
    });

    request.open("GET", resource);
    request.send();
  });
};

getTodos("todos/adryan.json")
  .then((data) => console.log("promise resolved: ", data))
  .catch((err) => console.log("promise rejected: ", err));

//! Promises dummy example

// const getSomething = () => {
//   return new Promise((resolve, reject) => {
//     // resolve("some data fetched");
//     reject("error happened");
//   });
// };

// getSomething().then(
//   (data) => {
//     console.log(data);
//   },
//   (err) => {
//     console.log(err);
//   }
// );

// getSomething()
//   .then((data) => console.log(data))
//   .catch((err) => console.log(err));
