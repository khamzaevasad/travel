document.addEventListener("DOMContentLoaded", () => {
  const searchInput = document.getElementById("search");
  const cardEl = document.getElementById("card-container");
  const empty = document.querySelector(".empty-container");
  const createBtn = document.querySelector(".create-btn");

  searchInput.addEventListener("input", () => {
    const inputValue = searchInput.value.toLowerCase();

    Array.from(cardEl.children).forEach((item) => {
      if (item.dataset.title.toLowerCase().includes(inputValue)) {
        item.style.display = "flex";
      } else {
        item.style.display = "none";
      }

      if (cardEl.innerText.trim() == "") {
        empty.classList.remove("hidden");
        cardEl.classList.add("hidden");
      } else {
        empty.classList.add("hidden");
        cardEl.classList.remove("hidden");
      }
    });
  });
});
