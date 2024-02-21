// Counter to keep track of the number of clicks
let clickCount = 0;

// Function to handle button click events
function handleButtonClick(buttonId, seat, classType, price) {
    // Check if the maximum number of clicks (4) has been reached
    if (clickCount >= 4) {
        alert("You can only add four outputs.");
        return;
    }
    
    // Increment click count
    clickCount++;
    
    // Update button color to green
    document.getElementById(buttonId).classList.add("bg-green-400");
    
    // Update the seat label with click count, making the number green
    const seatLabel = document.getElementById("seat-label");
    if (seatLabel.children.length === 0) { // If no <p> tags yet, add the first one for "Seat"
        seatLabel.innerHTML = `<p>Seat - <span style="background-color: green; padding: 5px; border-radius: 5px; color: white;">${clickCount}</span></p>`;
    } else {
        // Update existing "Seat" label with count, ensuring the number is green
        seatLabel.children[0].innerHTML = `Seat - <span style="background-color:green; padding: 5px; border-radius: 5px; color: white;">${clickCount}</span>`;
    }

    // Append new output under the data container for each button click
    seatLabel.innerHTML += `<p>${seat}</p>`; // This appends the seat ID below the "Seat - X" label
    document.getElementById("class-label").innerHTML += `<p>${classType}</p>`;
    document.getElementById("price-label").innerHTML += `<p>${price}</p>`;
}

// Add event listeners to buttons
document.querySelectorAll('.btn-active').forEach(item => {
    item.addEventListener('click', event => {
        const buttonId = event.target.id;
        const seat = buttonId.substring(0, 2); // Extracting seat ID from button ID
        const classType = "economy"; // Assuming class is always economy for simplicity
        const price = "550"; // Assuming price is always 550 for simplicity
        handleButtonClick(buttonId, seat, classType, price);
    });
});
