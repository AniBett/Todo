import { parseISO, format } from "date-fns";
import cancelEvent from "./cancel";
import displayTodo from "./displayTodo";
export default function today() {
  cancelEvent();
  const board = document.querySelector(".board");
  const taskTitleHeader = document.querySelector(".taskTitleHeader");
  taskTitleHeader.innerHTML = "Today";
  while (board.firstChild) {
    board.removeChild(board.firstChild);
  }
  for (let i = 0; i < localStorage.length; i++) {
    const obj = JSON.parse(localStorage.getItem(localStorage.key(i)));
    if (obj.Duedate.length != 0 && obj.Duedate != "No Due Date") {
      const ntoday = format(new Date(), "yyyy-MM-dd");
      if (
        format(parseISO(obj.Duedate), "yyyy-MM-dd") ===
        format(parseISO(ntoday), "yyyy-MM-dd")
      ) {
        const task = displayTodo(localStorage.key(i));
        board.appendChild(task);
      }
    }
  }
  return;
}
