const request = new XMLHttpRequest();
const uriapi = "https://jsonplaceholder.typicode.com/todos/";

request.addEventListener("readystatechange", () => {
  //   console.log(request, request.readyState);
  if (request.readyState === 4 && request.status === 200) {
    console.log(request, request.responseText);
  } else if (request.readyState === 4) {
    console.log("Couldn't fetch the data.");
  }
});

request.open("GET", uriapi);
request.send();
