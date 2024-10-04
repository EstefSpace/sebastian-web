const closeButton = document.getElementById("close");


closeButton.addEventListener('click', () => { 
    const dialog = document.querySelector("dialog");

    dialog.removeAttribute("open")
})

const narizA = document.getElementById("nariz");

narizA.addEventListener("click", () => {
    const dialog = document.getElementById("nariz-dialog");

    dialog.setAttribute("open", "true")
})