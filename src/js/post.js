import { axiosInstance } from "./request";
import { updateUI } from "./updateUI";
import { getData } from "./request";

// const url = "https://json-api.uz/api/project/axios/packages";

// const formEl = document.getElementById("form");
// const template = document.getElementById("template");
// const containerEl = document.getElementById("card-container");

// formEl.addEventListener("submit", async (e) => {
//   e.preventDefault();

//   document.querySelector(".submit-btn").textContent = "loading...";
//   document.querySelector(".submit-btn").disabled = true;
//   const formData = new FormData(formEl);
//   const data = Object.fromEntries(formData);
//   try {
//     const res = await axiosInstance.post("/packages", data);
//     // updateUI(res, template, containerEl);
//     getData(url)
//       .then(({ data }) => updateUI(data, template, containerEl))
//       .catch((error) => console.log(error));
//   } catch (error) {
//     console.log(error.message);
//   } finally {
//     document.querySelector(".submit-btn").textContent = "Create";
//     document.querySelector(".submit-btn").disabled = false;
//     formEl.reset();
//   }
// });
