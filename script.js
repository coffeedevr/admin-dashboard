const footertext = document.getElementById("footertext");

const year = new Date().getFullYear();

footertext.textContent = "© " + year + footertext.textContent;