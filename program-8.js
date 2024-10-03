// Write a JavaScript function that fetches data from an API and cancels the request if it takes longer than a specified time.

const url =
  "https://forkify-api.herokuapp.com/api/v2/recipes/664c8f193e7aa067e94e867b";

const timeOut = function(sec){
    return new Promise((_, reject) => {
      setTimeout(() => reject(new Error("Request took too long")), sec*1000);
    });
}

const fetchData = async function(url, timeoutTime) {
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        return await response.json();
    } catch (error) {
        console.error(error);
        throw error;
    }
}

const fetchDataWithTimeout = async function(url, timeoutTime) {
    try {
        const response = await Promise.race([fetchData(url, timeoutTime), timeOut(timeoutTime)]);
        console.log(response.data.recipe.title);
        return response;
    } catch (error) {
        throw error;
    }
}

fetchDataWithTimeout(url, 5);