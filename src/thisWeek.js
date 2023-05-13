import cancelEvent from "./cancel";
import { format, parseISO, isThisWeek } from "date-fns";
import displayTodo from "./displayTodo";
export default function thisWeek() {
  cancelEvent();
  const board = document.querySelector(".board");
  const taskTitleHeader = document.querySelector(".taskTitleHeader");
  taskTitleHeader.innerHTML = "This Week";
  while (board.firstChild) {
    board.removeChild(board.firstChild);
  }
  for (let i = 0; i < localStorage.length; i++) {
    const obj = JSON.parse(localStorage.getItem(localStorage.key(i)));
    if (obj.Duedate.length != 0) {
      if (isThisWeek(parseISO(obj.Duedate))) {
        const task = displayTodo(localStorage.key(i));
        board.appendChild(task);
      }
    }
  }

  return;
}
