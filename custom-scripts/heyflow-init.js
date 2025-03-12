import { setIp } from './set-ip.js';
import { zipcodeAutocomplete } from './zipcode-autocomplete.js';
import { initBirthdate } from './init-birthdate.js';
import { isMobileDevice } from './detect-device.js';

window.addEventListener('heyflow-init', async () => {
    window._udata = { n: "FR" };
    await setIp();
    isMobileDevice();

    setTimeout(initBirthdate, 1000);
    setTimeout(zipcodeAutocomplete, 1000);
});

window.addEventListener('heyflow-submit', () => {
    window.triggerLead();
});
