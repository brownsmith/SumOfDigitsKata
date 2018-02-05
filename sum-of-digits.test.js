function sumOfNumbers(num) {
  
  var digits = num.toString().split('').map(function(item, index) {
    return parseInt(item);
  });

  return digits;
};

it('should split the numbers up', () => {
  const sumOfNumbersFunc = sumOfNumbers(123);
  expect(sumOfNumbersFunc).toEqual([1,2,3]);
});

it('should add the numbers up', () => {
  const sumOfNumbersFunc = sumOfNumbers(123);
  expect(sumOfNumbersFunc).toEqual(6);
});