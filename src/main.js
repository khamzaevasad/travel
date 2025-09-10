import "./style.css";
import "./js/action";
import { getData } from "./js/request";

const url = "https://json-api.uz/api/project/axios/packages";

getData(url)
  .then(({ data }) => console.log(data))
  .catch((error) => console.log(error));
