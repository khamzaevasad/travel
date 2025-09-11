export function updateDetail(data, template, containerEl) {
  const fragment = document.createDocumentFragment();

  containerEl.innerHTML = "";

  const items = Array.isArray(data) ? data : [data];

  items.forEach((item) => {
    const {
      id,
      image,
      travelDescription,
      travelLocation,
      travelPrice,
      travelTitle,
      travelersCount,
      daysCount,
    } = item;

    const clone = template.content.cloneNode(true);

    const tourImg = clone.querySelector(".tour-img");
    const tourTitle = clone.querySelector(".tour-title");
    const location = clone.querySelector(".travel-location");
    const duration = clone.querySelector(".travel-days");
    const travelersSum = clone.querySelector(".travelers-sum");
    const nights = clone.querySelector(".nights");
    const price = clone.querySelector(".travel-price");
    const subtitle = clone.querySelector(".tour-subtitle");
    const card = clone.querySelector(".card-travel");

    card.href = `/src/pages/travelDetail.html?id=${id}`;
    card.dataset.title = travelLocation;
    tourImg.src = image;
    tourTitle.textContent = travelTitle;
    location.textContent = travelLocation;
    duration.textContent = `${daysCount} days`;
    travelersSum.textContent = `${travelersCount} travelers`;
    nights.textContent = `${daysCount - 1} night`;
    price.textContent = `price {travelPrice}`;
    subtitle.textContent = travelDescription;
    fragment.appendChild(clone);
  });
  containerEl.appendChild(fragment);
}
