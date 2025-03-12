export async function setIp() {
    const ipInput = document.querySelector('input[data-label="ip"]');
    let res = await fetch("https://europe-southwest1-react-lp-387513.cloudfunctions.net/ip_retain", {
        method: 'GET',
        redirect: 'follow'
    });
    ipInput.value = await res.text();
}
