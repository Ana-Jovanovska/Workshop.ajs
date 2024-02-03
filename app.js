const charactersElOne = document.querySelector("#characters");
const yodaEl = document.querySelector(".yoda");

const CHARACTERS_URL = "https://swapi.dev/api/people/?page=1";

function fetchCharacters() {
  fetch(CHARACTERS_URL)
    .then(function (res) {
      return res.json();
    })
    .then(function (data) {
      console.log(data);
      renderPersonTable(listEl, data.results);
    });
}
fetchCharacters();
function renderPersonTable(listEl, personDetails) {
  let personHTML = "";

  for (let person of personDetails) {
    personHTML += `
        <tr>
        <td>${person.name}</td>
        <td>${person.height}</td>
        <td>${person.mass}</td>
        <td>${person.birth_year}</td>
        <td>${person.gender}</td>
        <td>${person.films.lenght}</td>
        </tr>`;
  }
  listEl.innerHTML += `
    <table class="characters">
    <thead>
    <tr>
    <th>Name</th>
    <th>Height</th>    
    <th>Mass</th>
    <th>Birth Year</th>
    <th>Gender</th>
    <th>Films</th>
    </tr>
    </thead>
    <tbody>${personHTML}</tbody>
    </table>
    `;
}
//const charactersElTwo = document.querySelector(".characters");
//yodaEl.addEventListener("click", () => {
// fetchCharacters();
//});
