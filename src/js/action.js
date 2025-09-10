function typeText(element, text, speed = 80) {
  let i = 0;
  element.style.opacity = "1";

  function type() {
    if (i < text.length) {
      element.innerHTML =
        text.substring(0, i + 1) + '<span class="cursor">|</span>';
      i++;
      setTimeout(type, speed);
    } else {
      // Remove cursor when done
      setTimeout(() => {
        element.innerHTML = text;
      }, 500);
    }
  }
  type();

  return new Promise((resolve) => {
    setTimeout(resolve, text.length * speed + 1000);
  });
}

document.addEventListener("DOMContentLoaded", async function () {
  const title = document.getElementById("title");
  const description = document.getElementById("description");

  // Type title first
  //   await typeText(title, " Popular Destinations!", 100);

  // Type description after title is done
  setTimeout(() => {
    typeText(
      description,
      "Discover the world's most beautiful places with our curated tour packages",
      40
    );
  }, 500);
});
