export function isMobileDevice() {
    const mobileInput = document.querySelector('input[data-label="desktopmobile"]');
    mobileInput.value = /android|webos|iphone|ipad|ipod|blackberry|iemobile|opera mini/i.test(navigator.userAgent) ? "mobile" : "desktop";
}
