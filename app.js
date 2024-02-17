// Person selector:
const charactersContainerEl = document.querySelector(".characters-container");
const yodaImageEl = document.querySelector(".yoda-image");
const charactersButtonEl = document.createElement("button");

//Ships selector:

const shipsContainerEl = document.querySelector(".spaceship-container");
const shipsImageEl = document.querySelector(".spaceship-image");
const shipsButtonEl = document.createElement("button");

// URL fetch (data):
const PERSON_URL = "https://swapi.dev/api/people/?page=1";
const SPACE_SHIPS_URL = "https://swapi.dev/api/starships/?page=1";

//Fetch for person:

const fetchPerson = async (url) => {
  try {
    const res = await fetch(url);
    const data = await res.json();

    // console.log(data.results);

    renderPersonTable(data);
    buttonsRenderPeople(charactersContainerEl, data, fetchPerson);
  } catch (error) {
    console.log(error);
  }
};

const generatePersonTable = (element, personDetalis) => {
  element.innerHTML = "";
  const rowHTML = (element.innerHTML = personDetalis.map((person) => {
    return `
    <tr>
    <td>${person.name}</td>
    <td>${person.height}</td>
    <td>${person.mass}</td>
    <td>${person.birth_year}</td>
    <td>${person.gender}</td>
    <td>${person.films.length}</td>
    <tr>`;
  }));
  element.innerHTML = `
  <table class="yoda-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Height</th>
            <th>Mass</th>
            <th>Birth Year</th>
            <th>Gender</th>
            <th>Appereances</th>
          </tr>
        </thead>
        <tbody>
        ${rowHTML}       
        </tbody>
  </table>
  `;
};

const renderPersonTable = (data) => {
  generatePersonTable(charactersContainerEl, data.results);
};

yodaImageEl.addEventListener("click", () => {
  fetchPerson(PERSON_URL);
});

const buttonsRenderPeople = (element, data, callback) => {
  if (data.next) {
    const nextButtonPersons = document.createElement("button");
    nextButtonPersons.innerText = "Next";
    nextButtonPersons.className = "nextBtnPersons";
    element.appendChild(nextButtonPersons);
    nextButtonPersons.addEventListener("click", () => {
      callback(data.next);
    });
  }
  if (data.previous) {
    const previousButtonPersons = document.createElement("button");
    previousButtonPersons.innerText = "Previous";
    previousButtonPersons.className = "previousBtnPersons";
    element.appendChild(previousButtonPersons);
    previousButtonPersons.addEventListener("click", () => {
      callback(data.previous);
    });
  }
};

//Fetch for Ships:
const fetchShips = async (url) => {
  try {
    const res = await fetch(url);
    const data = await res.json();

    // console.log(data.results);
    renderShipTable(data);
    buttonRenderShips(shipsContainerEl, data, fetchShips);
  } catch (error) {
    console.log(error);
  }
};

const generateShipsTable = (element, shipsDetalis) => {
  element.innerHTML = "";
  const rowHTML = (element.innerHTML = shipsDetalis.map((ship) => {
    return `
    <tr>
    <td>${ship.name}</td>
    <td>${ship.model}</td>
    <td>${ship.manufacturer}</td>
    <td>${ship.cost_in_credits}</td>
    <td>${ship.passengers}</td>
    <td>${ship.starship_class}</td>
  </tr>`;
  }));
  element.innerHTML = `
  <table>
  <thead>
    <tr>
      <th>Name</th>
      <th>Model</th>
      <th>Manufacturer</th>
      <th>Cost (credits)</th>
      <th>People Capacity (passengers)</th>
      <th>Class</th>
    </tr>
  </thead>
  <tbody>
  ${rowHTML}
  </tbody>
</table
`;
};

const renderShipTable = (data) => {
  generateShipsTable(shipsContainerEl, data.results);
};

shipsImageEl.addEventListener("click", () => {
  fetchShips(SPACE_SHIPS_URL);
});

const buttonRenderShips = (element, data, callback) => {
  if (data.nextShips) {
    const nextButtonShips = document.createElement("button");
    nextButtonShips.innerHTML = "Next";
    nextButtonShips.className = "nextBtnShips";
    element.appendChild(nextButtonShips);
    nextButtonShips.addEventListener("click", () => {
      callback(data.next);
    });
  }

  if (data.previous) {
    const previousBtnShips = document.createElement("button");
    previousBtnShips.innerHTML = "Previous";
    previousBtnShips.className = "previousBtnShips";
    element.appendChild(previousBtnShips);
    previousBtnShips.addEventListener("click", () => {
      callback(data.previousShips);
    });
  }
};
