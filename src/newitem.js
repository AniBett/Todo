//Code for adding DOM elements
import todoList from "./todoList";
import cancelEvent from "./cancel";
export default function addNewItem() {
  const container = document.getElementById("content");
  const formContainer = document.createElement("div");
  const form = document.createElement("form");
  const bottom = document.createElement("div");
  const top = document.createElement("div");

  const buttonContainer = document.createElement("div");
  const titleContainer = document.createElement("div");
  const descriptionContainer = document.createElement("div");
  const dateContainer = document.createElement("div");
  const priorityContainer = document.createElement("div");

  titleContainer.className = "titleContainer";
  descriptionContainer.className = "descriptionContainer";
  dateContainer.className = "dateContainer";
  priorityContainer.className = "priorityContainer";
  buttonContainer.className = "buttonContainer";
  top.className = "top";
  bottom.className = "bottom";
  form.className = "todoForm";
  formContainer.className = "formContainer";

  const innerFormTitle = document.createElement("h5");

  //Add form elements

  //title
  const title = document.createElement("input");
  title.className = "title";
  title.setAttribute("type", "text");
  title.required = true;
  title.id = "title";
  const titleLabel = document.createElement("label");
  titleLabel.setAttribute("for", "title");
  titleLabel.innerHTML = "Title";
  titleContainer.appendChild(titleLabel);
  titleContainer.appendChild(title);

  //description
  const description = document.createElement("input");
  description.className = "description";
  description.required = false;
  description.id = "description";
  const dLabel = document.createElement("label");
  dLabel.setAttribute("for", "description");
  dLabel.innerHTML = "Description";
  descriptionContainer.appendChild(dLabel);
  descriptionContainer.appendChild(description);

  //priority
  const priority = document.createElement("select");
  priority.className = "priority";
  priority.setAttribute("name", "Priority");
  const low = document.createElement("option");
  low.setAttribute("value", "low");
  low.innerHTML = "Low";
  const high = document.createElement("option");
  high.setAttribute("value", "high");
  high.innerHTML = "High";
  priority.appendChild(low);
  priority.appendChild(high);
  priority.id = "priority";
  const pLabel = document.createElement("label");
  pLabel.setAttribute("for", "priority");
  pLabel.innerHTML = "Priority";
  priorityContainer.appendChild(pLabel);
  priorityContainer.appendChild(priority);

  //date
  const date = document.createElement("input");
  date.className = "date";
  const today = newestDate();
  //console.log(today);
  date.setAttribute("type", "date");
  //date.setAttribute("value", `${today.year}-${today.month}-${today.d}`);
  date.setAttribute("min", `${today.year}-${today.month}-${today.d}`);
  date.setAttribute("type", "date");
  date.id = "date";
  const dateLabel = document.createElement("label");
  dateLabel.setAttribute("for", "date");
  dateLabel.innerHTML = "Date";
  dateContainer.appendChild(dateLabel);
  dateContainer.appendChild(date);

  //add button
  const submit = document.createElement("button");
  submit.className = "submit";
  submit.innerHTML = "Add";
  submit.setAttribute("type", "submit");

  //cancel button
  const cancel = document.createElement("button");
  cancel.className = "cancel";
  cancel.setAttribute("type", "button");
  cancel.innerHTML = "Cancel";

  //Add event listeners
  submit.addEventListener("click", (e) => {
    submit.blur();
    todoList(e);
  });
  cancel.addEventListener("click", () => {
    cancel.blur();
    cancelEvent();
  });
  buttonContainer.appendChild(submit);
  buttonContainer.appendChild(cancel);

  top.appendChild(titleContainer);
  top.appendChild(descriptionContainer);
  bottom.appendChild(dateContainer);
  bottom.appendChild(priorityContainer);
  bottom.append(buttonContainer);

  form.appendChild(top);
  form.appendChild(bottom);

  formContainer.appendChild(form);

  return formContainer;
}
function newestDate() {
  const today = new Date();
  const d = String(today.getDate()).padStart(2, "0");
  const month = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
  const year = today.getFullYear();
  return { year, month, d };
}
