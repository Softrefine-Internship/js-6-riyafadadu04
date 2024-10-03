// Write a JavaScript a function that makes an HTTP GET request and returns a Promise that resolves with the response data.


const url =
  "https://forkify-api.herokuapp.com/api/v2/recipes/664c8f193e7aa067e94e867b";

function fetchData(url) {
  return new Promise((resolve, reject) => {
    fetch(url)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`Not found (${response.status})`);
        }
        return resolve(response.json());
      })
      .catch((err) => reject(err));
  });
}

fetchData(url)
  .then((response) =>
    console.log("Recipe Name :" , response.data.recipe.title)
  )
  .catch((error) => console.error("Error:", error));
