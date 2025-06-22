
// Check if the "Start Game" button exists on the current page
const startGameButton = document.getElementById('guestPlay-button');
if (startGameButton) {
    // Add a click event to navigate to playScreen.html
    startGameButton.addEventListener('click', () => {
        window.location.href = 'playScreen.html'; // Navigate to the play screen
    });
}

const signInButton = document.getElementById('login-button'); 
if(signInButton)
{
    signInButton.addEventListener('click', () => {
        window.location.href = 'loginPage.html'; 

    });
}

var questionCounter = 0
document.addEventListener("DOMContentLoaded", () => {
    const questionDisplay = document.getElementById("questionCounterDisplay");
    questionDisplay.textContent = `Question ${questionCounter + 1}/20`;
});

cars = [
    { "make": "Tesla", "model": "Roadster" },
    { "make": "Porsche", "model": "911 Carrera" },
    { "make": "Porsche", "model": "718 Cayman" },
    { "make": "Porsche", "model": "718 Boxster" },
    { "make": "Chevrolet", "model": "Corvette Stingray" },
    { "make": "Chevrolet", "model": "Camaro ZL1" },
    { "make": "Ford", "model": "Mustang GT" },
    { "make": "Ford", "model": "Mustang Shelby GT500" },
    { "make": "Nissan", "model": "GT-R" },
    { "make": "Toyota", "model": "GR Supra"} ] 

document.addEventListener("DOMContentLoaded", () =>{
    const q4 = document.getElementById("button4"); 
    q4.textContent = {query}; 
}

// Check if the "Go Back" button exists on the current page
// const goBackButton = document.getElementById('goBackButton');
// if (goBackButton) {
//     // Add a click event to navigate back to index.html
//     goBackButton.addEventListener('click', () => {
//         window.location.href = 'loadScreen.html'; // Navigate back to the load screen
//     });
// }
