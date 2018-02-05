function sumOfNumbers(num) {
  return myThing = parseInt(String(num).split('').join(','));
};

it('should split the numbers up', () => {
  const sumOfNumbersFunc = sumOfNumbers(123);
  expect(sumOfNumbersFunc).toEqual(1,2,3);
});

it('should add the numbers up', () => {
  const sumOfNumbersFunc = sumOfNumbers(123);
  expect(sumOfNumbersFunc).toEqual(6);
});