//! Throwing Errors

const getTodos = async () => {
  const response = await fetch("todos/adryan.json");

  if (response.status !== 200) {
    throw new Error("Can't fetch the data.");
  }

  const data = await response.json();
  return data;
};

getTodos()
  .then((data) => console.log("resolved adryan: ", data))
  .catch((err) => console.log("rejected: ", err.message));
