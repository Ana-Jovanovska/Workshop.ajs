// People selector:
const charactersContainerEl = document.querySelector(".characters-container");
const yodaImageEl = document.querySelector(".yoda-image");
const charactersButtonEl = document.createElement("button");

// URL fetch (data):
const PEOPLE_URL = "https://swapi.dev/api/people/?page=1";
const SPACE_SHIPS_URL = "https://swapi.dev/api/starships/?page=1";

//Fetch for people:

const fetchPerson = async (url) => {
  try {
    const res = await fetch(url);
    const data = await res.json();

    // console.log(data.results);

    renderPersonTable(data);
    buttonsRenderPeople(yodaContainer, data, fetchStarWarsApi);
  } catch (error) {
    console.log(error);
  }
};

// This function will be crate a HTML table with persons data

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

// Render function for persons table

const renderPersonTable = (data) => {
  generatePersonTable(yodaContainer, data.results);
};
// Add event listener for render table data for persons

yodaImg.addEventListener("click", () => {
  fetchPerson(PEOPLE_URL);
});

// Function for crateing buttons for next and previous data and will work with callback function when is callled in fetch function.They will be create and will have function for displaying data in table when is clicked

const buttonsRenderPeople = (element, data, callback) => {
  if (data.next) {
    const nextButtonPersons = document.createElement("button");
    nextButtonPersons.innerText = "Next persons";
    nextButtonPersons.className = "nextBtnPersons";
    element.appendChild(nextButtonPersons);
    nextButtonPersons.addEventListener("click", () => {
      callback(data.next);
    });
  }
  if (data.previous) {
    const previousButtonPersons = document.createElement("button");
    previousButtonPersons.innerText = "Previous persons";
    previousButtonPersons.className = "previousBtnPersons";
    element.appendChild(previousButtonPersons);
    previousButtonPersons.addEventListener("click", () => {
      callback(data.previous);
    });
  }
};
