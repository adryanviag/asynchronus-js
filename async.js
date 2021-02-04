const request = new XMLHttpRequest();
const uriapi = "https://jsonplaceholder.typicode.com/todos/";

request.addEventListener("readystatechange", () => {
  //   console.log(request, request.readyState);
  if (request.readyState === 4) {
    console.log(request.responseText);
  }
});

request.open("GET", uriapi);
request.send();
