let clickCount = 0;
let totalPrice = 0;
let couponApplied = false;

/// Function to handle button click events
function handleButtonClick(buttonId, seat, classType, price) {
    
    if (clickCount >= 4) {
        alert("You can only add four outputs.");
        return;
    }
    
    clickCount++;
    
    const clickedButton = document.getElementById(buttonId);
    clickedButton.disabled = true;
    
    
    clickedButton.style.backgroundColor = "#34D399";
   
    const seatLabel = document.getElementById("seat-label");
    if (seatLabel.children.length === 0) { 
        seatLabel.innerHTML = `<p>Seat - <span style="background-color: green; padding: 5px; border-radius: 5px; color: white;">${clickCount}</span></p>`;
    } else {
        
        seatLabel.children[0].innerHTML = `Seat - <span style="background-color:green; padding: 5px; border-radius: 5px; color: white;">${clickCount}</span>`;
    }

    const numSeatElement = document.getElementById('numseat');
    const numSeats = parseInt(numSeatElement.textContent);
    if (numSeats > 0) {
        numSeatElement.textContent = numSeats - 1;
    }
  
    totalPrice += parseInt(price); 
    document.getElementById("totalammount").textContent = totalPrice;

    
    seatLabel.innerHTML += `<p>${seat}</p>`; 
    document.getElementById("class-label").innerHTML += `<p>${classType}</p>`;
    document.getElementById("price-label").innerHTML += `<p>${price}</p>`;
}


// calculate grand total

function applyCouponCode() {
    
    if (couponApplied) {
        alert("Coupon code has already been applied.");
        return;
    }

    
    const couponCode = document.getElementById("couponCode").value;

    
    if (clickCount !== 4) {
        alert("Please select 4 seats first.");
        return;
    }

    
    let discount = 0;
    switch (couponCode) {
        case "New15":
            discount = 0.15; 
            break;
        case "couples20":
            discount = 0.20; 
            break;
        default:
            alert("Invalid coupon code. Please try again.");
            return;
    }

    
    const grandTotal = totalPrice * (1 - discount);

   
    document.getElementById("grandammount").textContent = grandTotal.toFixed(2);

    
    const applyCouponContainer = document.getElementById("applyCouponContainer");
    applyCouponContainer.style.display = "none";

  
    couponApplied = true;
}



document.querySelectorAll('.btn-active').forEach(item => {
    item.addEventListener('click', event => {
        const buttonId = event.target.id;
        const seat = buttonId.substring(0, 2); 
        const classType = "economy"; 
        const price = "550";
        handleButtonClick(buttonId, seat, classType, price);
    });
});

