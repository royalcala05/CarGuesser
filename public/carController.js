const cars = [
    { make: "Tesla", model: "Roadster" },
    { make: "Porsche", model: "911 Carrera" },
    { make: "Porsche", model: "718 Cayman" },
    { make: "Porsche", model: "718 Boxster" },
    { make: "Chevrolet", model: "Corvette Stingray" },
    { make: "Chevrolet", model: "Camaro ZL1" },
    { make: "Ford", model: "Mustang GT" },
    { make: "Ford", model: "Mustang Shelby GT500" },
    { make: "Nissan", model: "GT-R" },
    { make: "Toyota", model: "GR Supra" },
  ];



// Iterate over the array and generate questions
carData.forEach(car => {
  const question = `What car is ${car.make} ${car.model}?`;
  console.log(question);
});
