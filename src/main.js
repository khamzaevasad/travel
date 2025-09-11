import "./style.css";
import "./js/action";
// import "./js/post";

import { axiosInstance } from "./js/request";
import { getData } from "./js/request";
import { addCard, updateUI } from "./js/updateUI";

const template = document.getElementById("template");
const containerEl = document.getElementById("card-container");
const formEl = document.getElementById("form");

const url = "https://json-api.uz/api/project/axios/packages";

getData(url)
  .then(({ data }) => updateUI(data, template, containerEl))
  .catch((error) => console.log(error));

formEl.addEventListener("submit", async (e) => {
  e.preventDefault();

  document.querySelector(".submit-btn").textContent = "loading...";
  document.querySelector(".submit-btn").disabled = true;
  const formData = new FormData(formEl);
  const data = Object.fromEntries(formData);
  try {
    const res = await axiosInstance.post("/packages", data);
    addCard(res.data, containerEl);
  } finally {
    document.querySelector(".submit-btn").textContent = "Create";
    document.querySelector(".submit-btn").disabled = false;
    formEl.reset();
    document.getElementById("my_modal_7").checked = false;
  }
});
