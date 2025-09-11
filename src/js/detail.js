import ".././style.css";
import { formatNumber } from "./formatNumber";
import { getData } from "./request";

const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get("id");

if (id) {
  getData("https://json-api.uz/api/project/axios/packages/" + id)
    .then((data) => {
      detailUI(data);
    })
    .catch((error) => console.log(error));
}

const containerCard = document.querySelector(".detail-card");
function detailUI(data) {
  const {
    id,
    image,
    travelDescription,
    travelLocation,
    travelPrice,
    travelTitle,
    travelersCount,
    date,
    daysCount,
  } = data;

  const detailImg = document.querySelector(".detail-img");
  const detailTitle = document.querySelector(".detail-title");
  const detailDesc = document.querySelector(".detail-desc");
  const location = document.getElementById("destinations");
  const detailDate = document.getElementById("date");
  const dayCount = document.getElementById("dayCount");
  const members = document.getElementById("members");
  const detailPrice = document.getElementById("detailPrice");

  detailImg.src = image;
  detailTitle.textContent = travelTitle;
  detailDesc.textContent = travelDescription;
  location.textContent = travelLocation;
  detailDate.textContent = date;
  dayCount.textContent = `${daysCount} day`;
  members.textContent = `${travelersCount} travelers`;
  detailPrice.textContent = formatNumber(Number(travelPrice));
}
