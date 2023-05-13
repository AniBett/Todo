import "./style.css";
import addNewItem from "./newitem";
import displayTodo from "./displayTodo";
import navbar from "./navbar";
import selected from "./selected";
import allTasks from "./allTasks";
import important from "./important";
import today from "./today";
import thisWeek from "./thisWeek";
//addNewItem();
//displayTodo();
const button = document.getElementById("expand");
const navBarButtons = document.querySelectorAll(".singleTasks > div");
for (let i = 0; i < navBarButtons.length; i++) {
  navBarButtons[i].addEventListener("click", (e) => {
    selected(e);
  });
}
allTasks();
button.addEventListener("click", navbar);

const allTasksButton = document.querySelector(".allTasks");
allTasksButton.addEventListener("click", allTasks);

const importantButton = document.querySelector(".important");
importantButton.addEventListener("click", important);

const todayButton = document.querySelector(".today");
todayButton.addEventListener("click", today);

const weekButton = document.querySelector(".week");
weekButton.addEventListener("click", thisWeek);
