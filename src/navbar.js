export default function navbar() {
  const navbar = document.getElementById("navBar");
  if (navbar.classList.contains("closed")) {
    navbar.classList.remove("closed");
    const addChildren = document.querySelectorAll("#navBar > div");
    for (let i = 0; i < addChildren.length; i++) {
      addChildren[i].classList.remove("hidden");
    }
    return;
  }
  navbar.classList.add("closed");
  const children = document.querySelectorAll("#navBar > div");
  for (let i = 0; i < children.length; i++) {
    children[i].classList.add("hidden");
  }

  return;
}
