function sumOfNumbers(num) {
  
  var digits = num.toString().split('').map(function(item, index) {
    return parseInt(item == 9 ? 0 : item);
  });

  return digits.reduce((a, b) => a + b, 0); 

};

it('should add the numbers up', () => {
  const sumOfNumbersFunc = sumOfNumbers(126);
  expect(sumOfNumbersFunc).toEqual(9);
});

it('should ignore the number 9', () => {
  const sumOfNumbersFunc = sumOfNumbers(2291);
  expect(sumOfNumbersFunc).toEqual(5);
});
