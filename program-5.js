// Write a JavaScript function that fetches data from multiple APIs concurrently and returns a combined result using Promises and 'Promise.all()'.

const urls = [
  "https://forkify-api.herokuapp.com/api/v2/recipes/664c8f193e7aa067e94e867b",
  "https://forkify-api.herokuapp.com/api/v2/recipes/664c8f193e7aa067e94e8ab9",
  "https://forkify-api.herokuapp.com/api/v2/recipes/664c8f193e7aa067e94e86cb",
  "https://forkify-api.herokuapp.com/api/v2/recipes/664c8f193e7aa067e94e8742",
];

const MultiUrlData = async function (urls) {
  try {
    var promises = await Promise.all(
      // urls.map(async (url) => {
      //   const response = await fetch(url);
      //   if (!response.ok) {
      //     throw new Error(`HTTP error! status: ${response.status}`);
      //   }
      //   const data = await response.json();
      //   return data;
      // })
      urls.map((url) => 
        fetch(url)
          .then((response) => {
            if (!response.ok) {
              throw new Error(`HTTP error! status: ${response.status}`);
            }
            return response.json();
          })
      )
    );
    promises = promises.map(recipes => recipes.data.recipe.title);
    console.log(promises); 
    return promises;
  } catch (error) {
    console.error(error);
  }
};

MultiUrlData(urls);
