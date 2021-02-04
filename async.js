//! Async Await

const getTodos = async () => {
  const response = await fetch("todos/adryan.json");
  const data = await response.json();
  return data;
};

getTodos()
  .then(async (data) => {
    console.log("resolved adryan: ", data);
  })
  .catch((err) => console.log("rejected: ", err));

// fetch("todos/adryan.json")
//   .then((response) => {
//     console.log("resolved", response);
//     return response.json();
//   })
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((err) => {
//     console.log("rejected", err);
//   });
