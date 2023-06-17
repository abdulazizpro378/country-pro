const serchFormEl = document.querySelector(".search");

serchFormEl.search.addEventListener("input", () => {
  const serchVAlue = serchFormEl.search.value.toLowerCase();
  const cardstem = document.querySelectorAll(".cards__item");
  const cardTitle = document.querySelectorAll(".cards__title");
  cardTitle.forEach((titels, i) => {
    if (titels.textContent.toLocaleLowerCase().includes(serchVAlue)) {
      cardstem[i].style.display = "block";
    } else {
      cardstem[i].style.display = "none";
    }
  });
});

const serchSelect = document.querySelectorAll(".search__select-list li");

const serchSelectSpan = document.querySelector(".search__select span");

import { createCountries } from "./updateUi";
import request from "./request";

serchSelect.forEach((li) => {
  li.addEventListener("click", () => {
    serchSelectSpan.textContent = li.textContent;
    let filterApi;

    if (li.textContent == "All") {
      filterApi = "https://restcountries.com/v3.1/all";
    } else {
      filterApi = `
        https://restcountries.com/v3.1/region/${li.textContent}
        
        `;
    }

    request(filterApi)
      .then((data) => {
        createCountries(data);
      })
      .catch((err) => {
        alert(err.massage);
      });
  });
});
