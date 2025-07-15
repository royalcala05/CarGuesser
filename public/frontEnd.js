// car list that we will take from 
console.log("Wrong options:");

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
  const questionDisplay = document.getElementById("questionCounterDisplay");
  let questionCounter = 0;
  questionDisplay.textContent = `Question ${questionCounter + 1}/20`;



  // clals a http get requst to my own server, it will return a response object "r"
  fetch("http://localhost:3000/api/random-car-image") 
//   the r is a steam of bytes that arrivies in network packets  
    .then((response) => response.json() )
    // to read this response then we parse it with the .json() function 
    // it is not read and parsed 

    // we get these paranmeters from the bacend call return return res.json({ car, imageUrl: httpsUrl });
    
    .then(({ car, imageUrl }) =>       
    {
    console.log("Correct car from API:", car);
    console.log("Correct car make:", car.model);

    console.log("Type of car:", typeof car);
      console.log("Full car object:", car);

      const imgEl = document.querySelector(".imageDisplayWrapper img");
      // grabs the img SO WE CAN FILL IT WITH IMAGE 
    

      imgEl.src = imageUrl;
      // this updates in the html 
      // imgEl.alt = car;
      // updates html 
      // hintEl.textContent = `Can you recognise: ${car}?`;
      // updates html 
      const correctCar = car;

      

      const wrongOptions = [];
        let i = 0;

        // this gets three random ochohices 
        while (i < 3) {
            const random = carList[Math.floor(Math.random() * carList.length)];
            if (!wrongOptions.some(car => car.make === random.make)) {
            wrongOptions.push(random);
            i++;
            }
        }
        // creating an array with the correct answer, and the 3 wrong asnwers  
        const options = [
            correctCar, 
            wrongOptions[0].model,
            wrongOptions[1].model,
            wrongOptions[2].model
        ];

      // let numOptions = options.length; 
     for (let i = options.length - 1; i > 0; i--) 
      {
      const j = Math.floor(Math.random() * (i + 1));
      [options[i], options[j]] = [options[j], options[i]];
      }

      // options is now shuffled,(fisher yates) 

      // this const grabs all the children of the choice_buttons(specifically the buttons)
      const buttons = document.querySelectorAll(".choice__buttons button");
      options.forEach((model, index) => 
        {
          const span = buttons[index].querySelector("span")
          console.log(span)
          span.textContent = model;
      })

      // when submit_button is clicked the function is called 
      // document.getElementById("submit__button").onclick = function() {checkCorrect()};

      // implement correct choice logic here 
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

      document.querySelector(".buttons__2").addEventListener("click", function () 
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


      document.querySelector(".buttons__3").addEventListener("click", function () 
      {
        if (this.textContent.trim() ===correctCar.trim())
        {
          console.log("ur correct")

        }
        else
        {
          console.log("incorrect")
        }
      });


      document.querySelector(".buttons__4").addEventListener("click", function () 
      {
        if (this.textContent.trim() ===correctCar.trim())
        {
          console.log("ur correct")

        }
        else
        {
          console.log("incorrect")
        }
      });


    
    })
    .catch((err) => {
      console.error(" Failed to load image:", err);
      document.querySelector(".hint").textContent = "Image failed to load.";
    });
});


