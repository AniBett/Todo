import changer from "./changeToInput";

export default function displayTodo(key) {
  const task = document.createElement("div");
  task.className = "task";
  task.classList.add(key);
  const leftSide = document.createElement("div");
  const rightSide = document.createElement("div");
  leftSide.className = "leftSide";
  rightSide.className = "rightSide";
  const radio = document.createElement("input");
  radio.setAttribute("type", "radio");
  radio.addEventListener("click", (e) => {
    crossedOut(e);
  });
  const radioBox = document.createElement("div");

  const obj = JSON.parse(localStorage.getItem(key));
  if (obj.Completed) {
    radio.checked = true;
    leftSide.classList.add("completed");
  }
  radioBox.appendChild(radio);
  task.appendChild(radioBox);
  const Title = document.createElement("div");
  const Description = document.createElement("div");
  const Duedate = document.createElement("div");
  const Priority = document.createElement("div");

  Title.id = "Title";
  Description.id = "Description";
  Duedate.id = "Duedate";
  Priority.id = "Priority";

  Title.className = key;
  Description.className = key;
  Duedate.className = key;
  Priority.className = key;

  Title.innerHTML = obj.Title;
  Description.innerHTML = obj.Description;
  Duedate.innerHTML = obj.Duedate;

  Priority.innerHTML = obj.Priority;
  const threeDot = document.createElement("button");
  threeDot.innerHTML = `<i class="fa-solid fa-trash"></i>`;
  threeDot.addEventListener("click", (e) => {
    removeTask(e);
  });

  Title.addEventListener("click", (e) => {
    changer(e);
  });
  Description.addEventListener("click", (e) => {
    changer(e);
  });
  Duedate.addEventListener("click", (e) => {
    changer(e);
  });
  Priority.addEventListener("click", (e) => {
    changer(e);
  });

  leftSide.appendChild(Title);
  leftSide.appendChild(Description);
  rightSide.appendChild(Duedate);
  rightSide.appendChild(Priority);
  rightSide.appendChild(threeDot);

  task.appendChild(leftSide);
  task.appendChild(rightSide);

  //console.log("done");
  return task;
}
function removeTask(event) {
  const name = event.target.parentNode.parentNode.parentNode.className;
  const task = document.querySelector(`[class="${name}"]`);
  const key = task.classList[1];
  localStorage.removeItem(key);
  task.parentNode.removeChild(task);
}
function crossedOut(event) {
  const name = event.target.parentNode.parentNode.className;
  const test = document.querySelector(`[class="${name}"]`);
  const leftSide = test.querySelector(".leftSide");
  const key = event.target.parentNode.parentNode.classList[1];
  const obj = JSON.parse(localStorage.getItem(key));

  if (leftSide.classList.contains("completed")) {
    leftSide.classList.remove("completed");
    obj.Completed = false;
    localStorage.setItem(key, JSON.stringify(obj));
    event.target.checked = false;
    return;
  }
  leftSide.classList.add("completed");
  obj.Completed = true;
  localStorage.setItem(key, JSON.stringify(obj));
  return;
}
