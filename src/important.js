import displayTodo from "./displayTodo";
import cancelEvent from "./cancel";
export default function important() {
  cancelEvent();
  const board = document.querySelector(".board");
  const taskTitleHeader = document.querySelector(".taskTitleHeader");
  taskTitleHeader.innerHTML = "Important";
  while (board.firstChild) {
    board.removeChild(board.firstChild);
  }

  for (let i = 0; i < localStorage.length; i++) {
    const obj = JSON.parse(localStorage.getItem(localStorage.key(i)));
    if (obj.Priority === "high") {
      const task = displayTodo(localStorage.key(i));
      board.appendChild(task);
    }
  }
  if (board.childElementCount === 0) {
  }
  return;
}
