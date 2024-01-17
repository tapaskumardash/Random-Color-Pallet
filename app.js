/*
    Developer : Tapas Kumar Dash
    Date      : 17th Jan 2024
    Time      : 04:18 PM
    ----------------------------
    Thank You!
*/

// Function to Generate Random color
const generateRandomColor = () => {
    // Loop for apply changes to all color boxes
    for(let i=0; i<36; i++){
        // It will generate a random number
        const randomNumber = Math.floor(Math.random() * 16777215);
        // Making Hax Code
        const randomCode = "#" + randomNumber.toString(16);
        // Applying changes
        document.querySelectorAll(".box")[i].style.backgroundColor = randomCode;
        document.querySelectorAll(".hax-code")[i].innerText = randomCode;
    }
}

// Making the Button functional
document.getElementById("btn").addEventListener(
    "click",
    generateRandomColor
);

// Initial Call
generateRandomColor();
