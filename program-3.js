//  Write a JavaScript function that takes an array of URLs and downloads the contents of each URL in parallel using Promises.

const urls = [
  "https://forkify-api.herokuapp.com/api/v2/recipes/664c8f193e7aa067e94e867b",
  "https://forkify-api.herokuapp.com/api/v2/recipes/664c8f193e7aa067e94e8ab9",
  "https://forkify-api.herokuapp.com/api/v2/recipes/664c8f193e7aa067e94e86cb",
  "https://forkify-api.herokuapp.com/api/v2/recipes/664c8f193e7aa067e94e8742",
];

const downloadUrls = async function (urls) {
  try {
    const promises = urls.map(async (url) => {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      return response.json();
    });
    let results = await Promise.allSettled(promises);
    results = results.map((recipes) => {
      console.log(`Downloaded recipe: ${recipes.value.data.recipe.title}`);
    });
    return results;
  } catch (error) {
    console.error(error);
  }
};

downloadUrls(urls);
