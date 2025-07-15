// car list that we will take from 

document.addEventListener("DOMContentLoaded", () => {
  const carList = [
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

  // question counter
  let questionCounter = 0;
  const counterEl = document.getElementById("questionCounterDisplay");
  counterEl.textContent = `Question ${questionCounter + 1}/20`;

  const nextBtn = document.querySelector(".nextQuestion__button");
  const imgEl = document.querySelector(".imageDisplayWrapper img");

  async function buildQuestion() {
    try {
      // calls a http get request to my own server, it will return a response object "r"
      const response = await fetch("http://localhost:3000/api/random-car-image");
      const { car, imageUrl } = await response.json(); // parse it with .json()

      console.log("Correct car from API:", car);
      console.log("Correct car make:", car.model);
      console.log("Type of car:", typeof car);
      console.log("Full car object:", car);

      // set image
      imgEl.src = imageUrl;

      const correctCar = car;

      const wrongOptions = [];
      let i = 0;

      // this gets three random choices
      while (i < 3) {
        const random = carList[Math.floor(Math.random() * carList.length)];
        if (!wrongOptions.some(car => car.make === random.make)) {
          wrongOptions.push(random);
          i++;
        }
      }

      // creating an array with the correct answer, and the 3 wrong answers
      const options = [
        `${correctCar}`, // correct answer full name
        `${wrongOptions[0].make} ${wrongOptions[0].model}`,
        `${wrongOptions[1].make} ${wrongOptions[1].model}`,
        `${wrongOptions[2].make} ${wrongOptions[2].model}`,
      ];

      // shuffle the options (Fisher-Yates)
      for (let i = options.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [options[i], options[j]] = [options[j], options[i]];
      }

      // populate buttons
      const buttons = document.querySelectorAll(".choice__buttons button");
      options.forEach((text, index) => {
        const span = buttons[index].querySelector("span");
        if (span) span.textContent = text;
      });

      document.querySelector(".buttons__1").addEventListener("click", function () 
      {
        if (this.textContent.trim() === correctCar.trim())
        {
          console.log("ur correct")

        }
        else
        {
          console.log("incorrect")
        }
      });

    } catch (err) {
      console.error("Failed to load image:", err);
      document.querySelector(".hint").textContent = "Image failed to load.";
    }
  }

  // Load initial question
  buildQuestion();

  // Next question button logic
  nextBtn.addEventListener("click", () => {
    questionCounter++;
    if (questionCounter < 20) {
      counterEl.textContent = `Question ${questionCounter + 1}/20`;
      buildQuestion();
    } else {
      alert("Quiz complete!");
    }
  });
});