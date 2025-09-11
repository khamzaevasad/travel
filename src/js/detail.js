import ".././style.css";
import { updateDetail } from "./detailPage";
import { formatNumber } from "./formatNumber";
import { getData } from "./request";

const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get("id");

const template = document.getElementById("detail-template");
const containerEl = document.getElementById("detail-card-container");

if (id) {
  getData("https://json-api.uz/api/project/axios/packages/" + id)
    .then((data) => {
      detailUI(data);
      return getData(
        "https://json-api.uz/api/project/axios/packages?limit=4"
      ).then(({ data }) => {
        updateDetail(data, template, containerEl);
      });
    })
    .catch((error) => console.log(error));
}

const containerCard = document.querySelector(".detail-card");

// update
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

  const newHtml = `
  
        <figure
              class="w-full max-w-[400px] lg:max-w-[500px] xl:max-w-[600px] object-cover mx-auto"
            >
              <img class="detail-img" src="${image}"
              " alt="img" />
            </figure>
            <div class="card-body">
              <div>
                <h2
                  class="card-title font-bold text-3xl text-info detail-title"
                >
                  ${travelTitle}
                </h2>
                <p class="my-4 font-bold text-white detail-desc">
                  ${travelDescription}
                </p>

                <div class="text-white">
                  <span class="font-bold">Destinations:</span>
                  This tour includes visits to multiple exciting destinations
                  such as <span id="destinations">${travelLocation}</span>.
                  You will explore cultural landmarks, enjoy local cuisine, and
                  experience the unique atmosphere each city has to offer.
                </div>
                <!-- detail info -->
                <div class="my-2">
                  <h3 class="text-3xl font-bold text-info my-4">
                    Package Details
                  </h3>
                  <span class="font-bold text-white">Travel Start date:</span>
                  <span id="date" class="text-white">${date}</span><br />
                  <span class="font-bold text-white">Travel Duration:</span>
                  <span id="dayCount" class="text-white">${daysCount}days</span><br />
                  <span class="font-bold text-white">Number of Travelers:</span>
                  <span id="members" class="text-white">${travelersCount} people</span><br />
                  <span class="font-bold text-white">Travel Price:</span>
                  <span id="detailPrice" class="text-white">$${travelPrice}</span>
                </div>

                <div>
                  <h3 class="text-primary-content font-light italic">
                    Experience the adventure of a lifetime with this
                    thoughtfully designed tour that brings together captivating
                    destinations, local culture, and memories you'll treasure
                    forever.
                  </h3>
                </div>
              </div>
            </div>
  
  `;

  containerCard.innerHTML = newHtml;

  //   const detailImg = document.querySelector(".detail-img");
  //   const detailTitle = document.querySelector(".detail-title");
  //   const detailDesc = document.querySelector(".detail-desc");
  //   const location = document.getElementById("destinations");
  //   const detailDate = document.getElementById("date");
  //   const dayCount = document.getElementById("dayCount");
  //   const members = document.getElementById("members");
  //   const detailPrice = document.getElementById("detailPrice");

  //   detailImg.src = image;
  //   detailTitle.textContent = travelTitle;
  //   detailDesc.textContent = travelDescription;
  //   location.textContent = travelLocation;
  //   detailDate.textContent = date;
  //   dayCount.textContent = `${daysCount} day`;
  //   members.textContent = `${travelersCount} travelers`;
  //   detailPrice.textContent = formatNumber(Number(travelPrice));
}

// recomended tour
// const template = document.getElementById("detail-template");
// const containerEl = document.getElementById("detail-card-container");
