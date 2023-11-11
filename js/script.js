const addToDoButton = document.getElementById("addToDo");
const toDoContainer = document.getElementById("toDoContainer");
const inputField = document.getElementById("inputField");

let timeout;

addToDoButton.addEventListener('click', () => {
    let paragraph = document.createElement("p");
    paragraph.classList.add("paragraph-styling");
    paragraph.innerHTML = inputField.value;
    toDoContainer.appendChild(paragraph)
    inputField.value = "";
    paragraph.addEventListener('click', () => {
        paragraph.style.textDecoration = "line-through";
        timeout = setTimeout(() => {
            paragraph.style.textDecoration = "none";
        }, 10000);
    });
    paragraph.addEventListener('dblclick', () => {
        toDoContainer.removeChild(paragraph);
        clearTimeout(timeout)
    });
});