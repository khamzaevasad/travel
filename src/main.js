import "./style.css";
import "./js/action";
import { getData } from "./js/request";
import { updateUI } from "./js/updateUI";

const template = document.getElementById("template");
const containerEl = document.getElementById("card-container");

const url = "https://json-api.uz/api/project/axios/packages";

getData(url)
  .then(({ data }) => updateUI(data, template, containerEl))
  .catch((error) => console.log(error));
