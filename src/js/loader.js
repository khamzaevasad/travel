const overlay = document.getElementById("overlay");

export function loader(toggle) {
  if (toggle) {
    overlay.classList.remove("hidden");
  } else {
    overlay.classList.add("hidden");
  }
}
