// Write a JavaScript function that takes a callback and invokes it after a delay of 2 second.

// function delayAndCallback(callback) {
//     setTimeout(callback, 2000);
// }

// function callback(){
//     console.log('called after 2 seconds');
// }

const delayAndCallback = (callback) => setTimeout(callback, 2000); 
const callback = () => console.log('called after 2 seconds');

delayAndCallback(callback); 
console.log('callback after 2 seconds');