// var a=7;
// var b=2;
// var c=a+b;





// Extending the Array prototype
Array.prototype.even = function() {
    return this.filter(num => num % 2 === 0);
};

Array.prototype.odd = function() {
    return this.filter(num => num % 2 !== 0);
};

// Testing the functionality
const myArray = [1,2,3,4,5,6,7,8];
console.log("Even Numbers: ", myArray.even()); // [2,4,6,8]
console.log("Odd Numbers: ", myArray.odd()); // [1,3,5,7]


