import displayTodo from "./displayTodo";
import todo from "./todo";
export default function changer(event) {
  convertToInput(event);
  return;
}
function convertToInput(event) {
  const ogKey = event.target.parentNode.parentNode.classList[1];
  //const infoDiv = document.querySelector(`#${event.target.id}`);
  //const infoDiv = document.querySelector(`.${ogKey} #${event.target.id}`);
  const infoDiv = document.querySelector(
    `[id="${event.target.id}"][class="${ogKey}"]`
  );
  const oldValue = infoDiv.innerText;
  let type = "input";
  // Create an input element
  if (event.target.id === "Priority") {
    type = "select";
  }
  const inputElement = document.createElement(type);
  if (type === "select") {
    const low = document.createElement("option");
    low.setAttribute("value", "low");
    low.innerHTML = "Low";
    const high = document.createElement("option");
    high.setAttribute("value", "high");
    high.innerHTML = "High";
    inputElement.appendChild(low);
    inputElement.appendChild(high);
  }

  if (event.target.id === "Duedate") {
    inputElement.type = "date";
  }
  inputElement.value = oldValue;
  inputElement.id = event.target.id;
  // Replace the div with the input element
  infoDiv.replaceWith(inputElement);

  // Focus on the input element
  inputElement.focus();

  // Attach event listeners
  inputElement.addEventListener("blur", (e) => {
    saveChanges(e);
  });
  inputElement.addEventListener("keydown", (e) => {
    handleKeyDown(e);
  });
}

function saveChanges(event) {
  const inputElement = event.target;
  let newValue = inputElement.value;
  const ogKey = event.target.parentNode.parentNode.classList[1];
  const obj = JSON.parse(localStorage.getItem(ogKey));
  const sParent = document.getElementsByClassName(`task ${ogKey}`);
  if (String(inputElement.id) === "Duedate" && String(newValue).length === 0) {
    newValue = "No Due Date";
  }
  if (
    String(inputElement.id) === "Description" &&
    String(newValue).length === 0
  ) {
    newValue = "No Description Written";
  }
  obj[`${String(inputElement.id)}`] = String(newValue);
  if (inputElement.id === "Title") {
    if (String(newValue).length === 0) {
      const task = displayTodo(String(ogKey));
      sParent[0].replaceWith(task);
      return;
    }
    for (let i = 0; i < localStorage.length; i++) {
      if (
        localStorage.key(i) === String(newValue).replaceAll(" ", "_") &&
        String(newValue).replaceAll(" ", "_") != ogKey
      ) {
        alert("Todo Items can't have the same name");
        return;
      }
    }

    localStorage.setItem(
      String(newValue).replaceAll(" ", "_"),
      JSON.stringify(obj)
    );
    const task = displayTodo(String(newValue).replaceAll(" ", "_"));
    sParent[0].replaceWith(task);
    if (ogKey != String(newValue).replaceAll(" ", "_")) {
      localStorage.removeItem(ogKey);
    }

    return;
  }
  // // Save the new value to localStorage
  else {
    localStorage.setItem(ogKey, JSON.stringify(obj));
    const task = displayTodo(String(ogKey));
    sParent[0].replaceWith(task);
    return;
  }

  // Create a new div with the updated value

  // Replace the input element with the new div
}
function handleKeyDown(event) {
  if (event.key === "Enter") {
    event.preventDefault();
    event.target.blur();
  }
}
