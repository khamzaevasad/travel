import "./style.css";
import "./js/action";
import "./js/search";
import Toastify from "toastify-js";
import "toastify-js/src/toastify.css";
// import "./js/post";

import { axiosInstance } from "./js/request";
import { getData } from "./js/request";
import { addCard, updateUI } from "./js/updateUI";

const template = document.getElementById("template");
const containerEl = document.getElementById("card-container");
const formEl = document.getElementById("form");

export let url = "https://json-api.uz/api/project/axios/packages";

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

export function deleteCard(id) {
  axiosInstance
    .delete(`packages/${id}`)
    .then((response) => {
      console.log(response.data);
      Toastify({
        text: "Delete success",
        duration: 3000,
        gravity: "top",
        position: "center",
        className:
          "bg-green-500 text-white px-4 py-2 rounded-lg shadow-md font-medium",
      }).showToast();
    })
    .catch((error) => console.log(error));
}
