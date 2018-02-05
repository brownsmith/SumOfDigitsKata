function sumOfNumbers(num) {
  
  var digits = num.toString().split('').map(function(item, index) {
    return parseInt(item);
  });
  return digits.reduce((a, b) => a + b, 0); 

};

it('should add the numbers up', () => {
  const sumOfNumbersFunc = sumOfNumbers(126);
  expect(sumOfNumbersFunc).toEqual(9);
});