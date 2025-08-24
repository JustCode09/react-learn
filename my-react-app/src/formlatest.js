//write a fucntion findMax(a,b,c) that takes three numbers as paramteres and returns the largest of the tree.
function findMax(a, b, c) {
  if (a >= b && a >= c) {
    return a;
  } else if (b >= a && b >= c) {
    return b;
  } else {
    return c;
  }
}


console.log(findMax(5, 9, 3));  








//write a function that checks whether the given number is odd or even.
function checkOddEven(num) {
  if (num % 2 === 0) {
    return "Even";
  } else {
    return "Odd";
  }
}


//write a fucntion with forEach() to print the square of each number in the array.
function printSquares(arr) {
  arr.forEach(function(num) {
    console.log(num * num);
  });
}
