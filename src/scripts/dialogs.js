const closeDialog = document.getElementById("close");

closeDialog.addEventListener('click', () => {
    const dialog = document.querySelector("dialog");
    dialog.removeAttribute("open")
})

const aboutMe = document.getElementById("sobre-mi");

aboutMe.addEventListener('click', () => {
    const aboutMeDialog = document.getElementById("sobre-mi-dialog");
    aboutMeDialog.setAttribute("open", "true")
})

