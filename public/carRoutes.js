const fs = require('fs');

fs.readFile('./carData.json', 'utf8', (err, data) => {
  if (err) throw err;
  const cars = JSON.parse(data);
  const randomCar = cars[Math.floor(Math.random() * cars.length)];
  const query = `${randomCar.make} ${randomCar.model}`;
  console.log(query);
  
});
