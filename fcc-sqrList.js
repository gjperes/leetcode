const squareList = arr => {
    // Only change code below this line
    return arr
        .filter(num => num % 1 === 0 && num > -1)
        .map(num => num * num)
    // Only change code above this line
};
  
const squaredIntegers = squareList([4, 5.6, -9.8, 3.14, 42, 6, 8.34, -2]);
console.log(squaredIntegers);