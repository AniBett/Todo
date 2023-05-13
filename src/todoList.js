import todo from "./todo.js";
import displayTodo from "./displayTodo.js";
import cancelEvent from "./cancel.js";
export default function todoList(event) {
  const board = document.querySelector(".board");

  event.preventDefault();

  if (event.target.form[0].value.length === 0) {
    alert("You must enter a value for the title field");
    return;
  }
  let Title = String(event.target.form[0].value);
  for (let i = 0; i < localStorage.length; i++) {
    if (localStorage.key(i) === Title) {
      alert("Todo Items can't have the same name");
      return;
    }
  }
  let description = String(event.target.form[1].value); //description
  let date = event.target.form[2].value; //date
  const priority = event.target.form[3].value; //priority
  //console.log({ description, date, priority });

  if (date.length === 0) {
    date = "No Due Date";
  }
  if (description.length === 0) {
    description = "No Description Written";
  }
  let newTodo = todo(Title, description, priority, date);
  localStorage.setItem(Title.replaceAll(" ", "_"), JSON.stringify(newTodo));

  cancelEvent();
  const task = displayTodo(Title.replaceAll(" ", "_"));
  board.appendChild(task);
  return;
}
