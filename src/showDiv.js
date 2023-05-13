export default function showDiv(event, generateDiv) {
  if (document.querySelector(".formContainer")) {
    return;
  }
  const content = document.getElementById("content");
  const div = generateDiv();

  content.insertBefore(div, event.target); // add the div to the page
  if (div.getBoundingClientRect().bottom > window.innerHeight) {
    // scroll to focus on the div if it's below the viewport
    div.scrollIntoView({ behavior: "smooth", block: "start" });
  }
  return;
}
