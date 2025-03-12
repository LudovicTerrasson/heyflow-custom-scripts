export function zipcodeAutocomplete() {
    console.log("zipcode");
    
    let zipcodes = {};
    let startZip = "xxxxxx";

    const zipcode_input = document.querySelector('input[data-label="zipcode"]');
    const city_input = document.querySelector('select[data-label="city"]');
    const drop_div = document.createElement('div');

    function myFunctionFocusOut(e) {
        if (drop_div.classList.contains("show")) {
            drop_div.classList.toggle("show");
            drop_div.style.zIndex = -10;
        }
        if (e.relatedTarget && e.relatedTarget.dataset.zipcode) {
            e.target.value = e.relatedTarget.dataset.zipcode;
            city_input.innerHTML = zipcodes[e.target.value].cities.map(valeur => `<option value="${valeur}">${valeur}</option>`).join("");
            city_input.value = zipcodes[e.relatedTarget.dataset.zipcode].cities[0];
        }
        if (!zipcodes[e.target.value]) {
            zipcode_input.value = "";
            city_input.value = "";
        }
    }

    async function getData() {
        if (!zipcode_input.value.startsWith(startZip)) {
            let res = await fetch("https://sweepapi.vertigodata.com/verticals_api/zipcode/nfSYfkNH7seSdBuB", {
                method: 'POST',
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ "zipcode": zipcode_input.value, "countryCode": "FR" }),
                redirect: 'follow'
            });
            zipcodes = await res.json();
            zipcode_input.setAttribute("pattern", "(" + Object.keys(zipcodes).join('|') + ")");
        }

        cleanData();
        Object.keys(zipcodes).forEach(zipcode => {
            let a = document.createElement('a');
            a.dataset.zipcode = zipcode;
            a.innerHTML = zipcode;
            drop_div.append(a);
        });
    }

    function cleanData() {
        drop_div.innerHTML = '';
    }

    zipcode_input.addEventListener('focusout', myFunctionFocusOut);
    zipcode_input.addEventListener('keyup', getData);

    city_input.readOnly = true;
}
