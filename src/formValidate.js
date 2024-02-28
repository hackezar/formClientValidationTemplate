export default function addClientValidation() {

    let validateEmail = function () {
        let emailState = emailInput.validity;
            if (emailState.valueMissing) {
                // Sets Custom error message
                emailInput.setCustomValidity('Please fill this in');
                // Displays message if there is error
                emailInput.reportValidity();
            } else {
                emailInput.setCustomValidity("");
                emailInput.reportValidity();
            }
        };

    let emailInput = document.getElementById('email');
    addEventListen(emailInput, validateEmail);

    let country = document.getElementById('country');

    function addEventListen(element, inputValidate) {
        element.addEventListener('input', () => {
            inputValidate();
        });
        element.addEventListener('focusout', () => {
            inputValidate();
        });
    }
   
    // Validate Country
    function validateCountry() {
        let countryState = country.validity;
        if (countryState.valueMissing) {
            country.setCustomValidity('Please enter your country');
            country.reportValidity();
        } else {
            country.setCustomValidity('');
            country.reportValidity();
        }
    }
}