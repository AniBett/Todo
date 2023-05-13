export default function cancelEvent() {
  const formContainer = document.querySelector(".formContainer");
  if (formContainer != null) {
    formContainer.parentNode.removeChild(formContainer);
  }

  return;
}
