export default function addClientValidation() {
    let emailInput = document.getElementById('email');
    let country = document.getElementById('country');
    let zip = document.getElementById('zip');
    let password = document.getElementById('password');
    let confirm = document.getElementById('passwordConfirm');

    console.log(emailInput.validity);
    // Validate Email
    let validateEmail = function () {
        let emailState = emailInput.validity;
            if (emailState.valid) {
                return;
            } else if (emailState.valueMissing) {
                // Sets Custom error message
                emailInput.setCustomValidity('Please fill this in');
                // Displays message if there is error
                emailInput.reportValidity();
                emailInput.classList.add('invalid');
            } else if (emailState.patternMismatch) {
                emailInput.reportValidity();
                emailInput.classList.add('invalid');
            }else {
                emailInput.setCustomValidity("");
                emailInput.reportValidity();
                emailInput.classList.remove('invalid');
            }
        };

    // Validate Country
    let validateCountry = function() {
        let countryState = country.validity;
        if (countryState.valid) {
            return;
        } else if (countryState.valueMissing) {
            country.setCustomValidity('Please enter your country');
            country.reportValidity();
            country.classList.add('invalid');
    } else {
                country.setCustomValidity('');
                country.reportValidity();
                country.classList.remove('invalid');
        }
    }

    // Validate zip code
    let validateZip = function () {
        let zipState = zip.validity;
        if (zipState.valid) {
            return;
        } else if (zipState.valueMissing) {
            zip.setCustomValidity('Please enter your zip code');
            zip.reportValidity();
            zip.classList.add('invalid');
        } else if (zipState.patternMismatch) {
            zip.setCustomValidity(`Please enter a valid zip code`);
            zip.reportValidity();
            zip.classList.add('invalid');
        }else {
            zip.setCustomValidity('');
            zip.reportValidity();
            zip.classList.remove('invalid');
        }
    }

    // Validate Password
    let validatePassword = function () {
        let passwordState = password.validity;
        if (passwordState.valid) {
            return;
        } else if (passwordState.valueMissing) {
            password.setCustomValidity('Please enter a password');
            password.reportValidity();
            password.classList.add('invalid');
        } else if (passwordState.patternMismatch) {
            password.setCustomValidity(`Password must have a minimum 8 characters, and at least one letter, number, and special character (!@#$%^&*)`);
            password.reportValidity();
            password.classList.add('invalid');
        }else {
            password.setCustomValidity('');
            password.reportValidity();
            password.classList.remove('invalid');
        }
    }

    // Validate password confirm
    let validateConfirm = function () {
        let confirmState = confirm.validity;
         if (confirmState.valueMissing) {
            confirm.setCustomValidity('Please confirm your password');
            confirm.reportValidity();
            confirm.classList.add('invalid');
        } else if (confirm.value !== password.value) {
            confirm.setCustomValidity(`Password does not match original`);
            confirm.reportValidity();
            confirm.classList.add('invalid');
        }else {
            confirm.setCustomValidity('');
            confirm.reportValidity();
            confirm.classList.remove('invalid');
        }
    }


    addEventListen(emailInput, validateEmail);
    addEventListen(country, validateCountry);
    addEventListen(zip, validateZip);
    addEventListen(password, validatePassword);
    addEventListen(confirm, validateConfirm);


    function addEventListen(element, inputValidate) {
        element.addEventListener('input', () => {
            inputValidate();
        });
        element.addEventListener('focusout', () => {
            inputValidate();
        });
    }
   

}