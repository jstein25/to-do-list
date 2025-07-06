toDoList = document.querySelector("table");
form = document.querySelector("form");
input = document.querySelector("input");

toDoArray = JSON.parse(localStorage.getItem("myToDos")) || [];
toDoArray.forEach(addItemToList);

form.addEventListener("submit", (event) => {
    event.preventDefault();

    const newTask = input.value;
    if (!toDoArray.includes(newTask)) {
        addItemToList(newTask);
        addItemToStorage(newTask);
    }
    input.value = "";
});

function addItemToList(str) {
    //add item itself
    const newRow = toDoList.insertRow();
    const taskCell = newRow.insertCell();
    taskCell.className = "task-cell";
    taskCell.textContent = str;

    const removeButton = document.createElement("button");
    const buttonCell = newRow.insertCell();
    buttonCell.className = "remove-cell";
    removeButton.className = "remove-button";
    removeButton.innerHTML = "-";
    //button functionality
    removeButton.onclick = () => {
        removeItemFromList(str);
        removeItemFromStorage(str);
    };
    buttonCell.appendChild(removeButton);
}

function removeItemFromList(str) {
    for (let i = 0; i < toDoList.rows.length; i++) {
        const taskName = toDoList.rows[i].cells[0].textContent;
        if (taskName === str) {
            toDoList.deleteRow(i);
            break;
        }
    }
}

function addItemToStorage(str) {
    toDoArray.push(str);
    localStorage.setItem("myToDos", JSON.stringify(toDoArray));
}

function removeItemFromStorage(str) {
    const index = toDoArray.indexOf(str);
    toDoArray.splice(index, 1);
    localStorage.setItem("myToDos", JSON.stringify(toDoArray));
}
