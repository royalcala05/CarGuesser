const carData = require('../carData.json');

// Iterate over the array and generate questions
carData.forEach(car => {
  const question = `What car is ${car.make} ${car.model}?`;
  console.log(question);
});
