export default function selected(event) {
  const allDivs = document.querySelectorAll(".singleTasks > div");
  for (let i = 0; i < allDivs.length; i++) {
    allDivs[i].classList.remove("selected");
  }
  const divName = event.target.parentElement.classList.value;
  const div = document.querySelector(`.${divName}`);
  div.classList.add("selected");
  return;
}
