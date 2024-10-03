// Write a JavaScript function that fetches data from an API and retries the request a specified number of times if it fails.

const url =
  "https://forkify-api.herokuapp.com/api/v2/recipes/664c8f193e7aa067e94e867b";

const fetchData = function (url, maxRetries) {
  let retriesLeft = maxRetries;
  if (retriesLeft > 0) {
    try {
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
    } catch (error) {
      console.error("Request failed, retrying...", error);
      retriesLeft--;
    }
  } else {
    throw new Error("Max retries exceeded");
  }
}

fetchData(url, 5)
  .then((response) => console.log("Recipe Name :", response.data.recipe.title))
  .catch((error) => console.error("Error:", error));
