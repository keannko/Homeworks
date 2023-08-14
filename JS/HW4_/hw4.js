"use strict";

const createByTag = (tag, place) => {
  const element = document.createElement(tag);
  place.prepend(element);
  return element;
};

const createByParent = (tagName, parentElement) => {
  const tags = document.createElement(tagName);
  parentElement.appendChild(tags);
  return tags;
};

const mainDiv = createByTag("div", document.body);
mainDiv.classList.add("mainDiv");

let response = await fetch("https://ajax.test-danit.com/api/swapi/films");
const result = await response.json();

result.forEach(async (element) => {
  const charactersLinks = element["characters"];
  const filmData = createByParent("div", mainDiv);
  const filmEpisodId = (createByParent("h2",filmData).textContent = `Episod №${element["episodeId"]}`);
  const filmName = (createByParent("h3", filmData));
  const filmActors = createByParent("div", filmData);
  const filmOpeningCrawl = (createByParent("p", filmData).textContent = element["openingCrawl"]);
  filmName.textContent = element["name"];
  filmActors.classList.add('actors')
  filmName.classList.add("loading");
  charactersLinks.forEach(async (el) => {
    const characters = await fetch(el);
    const resultCharacters = await characters.json();
    const actorName = document.createElement("p");
    actorName.textContent = resultCharacters["name"];
    filmActors.appendChild(actorName);
    filmName.classList.remove("loading");
  });
});

