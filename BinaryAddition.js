// Implement a function that adds two numbers together and returns their sum in binary. 
// The conversion can be done before, or after the addition.
// The binary number returned should be a string.


function addBinary(a,b) {    
    return Number(a + b).toString(2)
   }


console.log(addBinary(1,2))


// const addBinary = (a, b) => (a + b).toString(2);