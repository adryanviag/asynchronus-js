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
  .then((data) => {
    console.log("1st Promise Resolved : ", data);
    return getTodos("todos/aisyah.json");
  })
  .then((data) => {
    console.log("2nd Promise Resolved : ", data);
    return getTodos("todos/john.json");
  })
  .then((data) => {
    console.log("3rd Promise Resolved : ", data);
  })
  .catch((err) => console.log("promise rejected: ", err));
