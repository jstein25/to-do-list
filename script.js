toDoList = document.querySelector("ul");
addItem("hey!");
addItem("yo!");

function addItem(str) {
    const li = document.createElement("li");
    li.innerHTML = str;
    toDoList.appendChild(li);
}
