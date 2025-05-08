
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


// Check if the "Go Back" button exists on the current page
// const goBackButton = document.getElementById('goBackButton');
// if (goBackButton) {
//     // Add a click event to navigate back to index.html
//     goBackButton.addEventListener('click', () => {
//         window.location.href = 'loadScreen.html'; // Navigate back to the load screen
//     });
// }
