//! FETCH API

fetch("todos/adryan.json")
  .then((response) => {
    // console.log("resolved", response);
    return response.json();
  })
  .then((data) => {
    console.log(data);
    return fetch("todos/aisyah.json");
  })
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.log("rejected", err);
  });
