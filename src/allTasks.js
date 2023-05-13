import cancelEvent from "./cancel";
import displayTodo from "./displayTodo";
import addNewItem from "./newitem";
import showDiv from "./showDiv";
export default function allTasks() {
  cancelEvent();
  const board = document.querySelector(".board");
  const taskTitleHeader = document.querySelector(".taskTitleHeader");
  taskTitleHeader.innerHTML = "All Tasks";
  while (board.firstChild) {
    board.removeChild(board.firstChild);
  }
  for (let i = 0; i < localStorage.length; i++) {
    let key = localStorage.key(i);
    const task = displayTodo(key);
    board.appendChild(task);
  }
  const content = document.getElementById("content");
  if (document.querySelector(".newItem") === null) {
    const button = document.createElement("button");
    button.innerHTML = `<i class="fa-solid fa-circle-plus"></i>`;
    button.innerHTML += "New Item";
    button.className = "newItem";
    button.addEventListener("click", (e) => {
      if (e.target.tagName === "I") {
        e.stopPropagation(); // Stop the click event from propagating further
        button.click();
        button.blur();
        return;
      } else {
        showDiv(e, addNewItem);
        button.blur();
        return;
      }
    });
    content.appendChild(button);
  }
  return;
}
