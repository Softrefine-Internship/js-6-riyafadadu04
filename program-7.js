// Write a JavaScript program to implement a function that executes a given function repeatedly at a fixed interval using 'setInterval()'.

function callingFunction (){
    console.log('Function 1 executed');
}

function repeatFunction(func, interval){
    setInterval(func, interval);
}

repeatFunction(callingFunction, 2000); 