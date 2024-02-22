function enableNextButton() {
  
    const phoneNumberInput = document.getElementById('phoneNumberInput');

    
    const nextButton = document.getElementById('nextButton');

    
    phoneNumberInput.addEventListener('input', function() {
      
      if (phoneNumberInput.value.trim() !== '') {
        nextButton.disabled = false;
      } else {
        nextButton.disabled = true;
      }
    });
  }


  enableNextButton();

  