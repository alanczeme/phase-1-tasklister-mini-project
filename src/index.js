document.addEventListener("DOMContentLoaded", () => {
  const inputField = document.getElementById("new-task-description");

  const formElement = document.querySelector("form");
  formElement.addEventListener('submit', (e) => {
    e.preventDefault();
    handleToDo(inputField.value);
    inputField.value = '';
  });
});

function handleToDo (task) {
  let listItem = document.createElement("li");
  listItem.innerText = `${task}`;
  document.querySelector("#tasks").appendChild(listItem);
}
