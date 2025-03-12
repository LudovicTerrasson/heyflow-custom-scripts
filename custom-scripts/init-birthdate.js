export function initBirthdate() {
    const birthdateInput = document.querySelector('input[data-label="birthdate"]');
    const validButton = document.querySelectorAll('button.generic-button.continue.medium')[4];
    const invalidButton = document.querySelectorAll('button.generic-button.continue.medium')[5];

    function formatDate(e) {
        const fullDateRegex = /^([0-2][0-9]|3[01])\/(0[1-9]|1[0-2])\/(19[0-9]{2}|20[0-9]{2})$/;
        const fullMatch = e.target.value.match(fullDateRegex);
        
        if (fullMatch) {
            const birthdate = new Date(fullMatch[3], fullMatch[2] - 1, fullMatch[1]);
            if (birthdate.getFullYear() > 1934 && birthdate.getFullYear() < 2006) {
                validButton.disabled = false;
                invalidButton.disabled = true;
            } else {
                validButton.disabled = true;
                invalidButton.disabled = false;
            }
        }
    }

    birthdateInput.addEventListener("keyup", formatDate);
}
