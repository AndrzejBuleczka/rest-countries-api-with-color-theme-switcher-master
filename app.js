import { renderCountriesList } from "./dom-utils.js";

const API_URL_ALL = "https://restcountries.com/v3.1/all";
let countries;
let query = '';

fetch(API_URL_ALL)
  .then(res => res.json())
  .then((countriesRaw) => {
    countries = countriesRaw.filter((country) => {
      country.name.common.toLowerCase().includes(query.toLowerCase())
    })
    countries = countriesRaw.map((country) => {
      return {
        capital: country.capital && country.capital[0],
        population: country.population,
        name: country.name.common,
        region: country.region,
        flagUrl: country.flags.png
      };
    });
    renderCountriesList(countries)
  });

  document.querySelector('query').addEventListener('click', () => {
    //render countries based on query
  })

