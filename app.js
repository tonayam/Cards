let teamMates = [
  {
    name: `Austin Tonayam`,
    track: `Frontend (Beginner)`,
    bestFood: `Spaghetti and Chicken`,
    bestMovie: `Inglorious Basterds`,
    complexion: `Dark-skinned`,
    age: 22,
    thingsLearnt: [`HTML`, `CSS`, `Bootstrap`, `JavaScript`],
    image: "./images/tonayam.JPG",
    id: 1,
  },
  {
    name: `Aladesuru Oriyomi`,
    track: `Frontend (Beginner)`,
    bestFood: `Pounded yam and Okra Soup`,
    bestMovie: `Charmed`,
    complexion: `Dark`,
    age: 23,
    thingsLearnt: [`HTML`, `CSS`, `Bootstrap`, `JavaScript`],
    image: "./images/oriyomi.jpg",
    id: 2,
  },
  {
    name: `Igah Abiye`,
    track: `Frontend (Beginner)`,
    bestFood: `Ewa Ago and Bread`,
    bestMovie: `Halo`,
    complexion: `Dark-skinned`,
    age: 21,
    thingsLearnt: [`HTML`, `CSS`, `Bootstrap`, `JavaScript`],
    image: `./images/abiye.jpg`,
    id: 3,
  },
  {
    name: `Amos Thibault Bikari`,
    track: `Frontend (Beginner)`,
    bestFood: `Uburobe and ndagara`,
    bestMovie: `Suits`,
    complexion: `Dark-skinned`,
    age: 23,
    thingsLearnt: [`HTML`, `CSS`, `Bootstrap`, `JavaScript`],
    image: `./images/amos.jpeg`,
    id: 4,
  },
  {
    name: `Susan Chepkosgei`,
    track: `Frontend (Beginner)`,
    bestFood: `Pilau and Chicken`,
    bestMovie: `The Darkest Mindset`,
    complexion: `Dark-skinned`,
    age: 22,
    thingsLearnt: [`HTML`, `CSS`, `Bootstrap`, `JavaScript`],
    image: `./images/sussy.jpeg`,
    id: 5,
  },
  {
    name: `Izima Obisike`,
    track: `Frontend (Beginner)`,
    bestFood: `Chips and Chicken`,
    bestMovie: `House MD`,
    complexion: `Light-skinned`,
    age: 22,
    thingsLearnt: [`HTML`, `CSS`, `Bootstrap`, `JavaScript`],
    image: `./images/izzy.jpeg`,
    id: 6,
  },
  {
    name: `Susan Mwende`,
    track: `Frontend (Beginner)`,
    bestFood: `Chicken and Chips`,
    bestMovie: `The Legend`,
    complexion: `Dark-skinned`,
    age: 22,
    thingsLearnt: [`HTML`, `CSS`, `Bootstrap`, `JavaScript`],
    image: `./images/susan.jpeg`,
    id: 7,
  },
  {
    name: `Oyindamola Ogunkunle `,
    track: `Frontend (Beginner)`,
    bestFood: `Amala and Abula`,
    bestMovie: `Inglorious Basterds`,
    complexion: `Dark-skinned`,
    age: 24,
    thingsLearnt: [`HTML`, `CSS`, `Bootstrap`, `JavaScript`],
    image: `./images/oyiwumi.jpg`,
    id: 8,
  },
  {
    name: `Austin Tonayam`,
    track: `Frontend (Beginner)`,
    bestFood: `Spaghetti and Chicken`,
    bestMovie: `Inglorious Basterds`,
    complexion: `Dark-skinned`,
    age: 22,
    thingsLearnt: [`HTML`, `CSS`, `Bootstrap`, `JavaScript`],
    image: `./images/tonayam.JPG`,
    id: 9,
  },
];
const row = document.querySelector(`.row`);
const names = document.querySelectorAll(`.card-title`);
const track = document.querySelectorAll(`.card-subtitle`);
const age = document.querySelectorAll(`.age`);
const movie = document.querySelectorAll(`.movie`);
const food = document.querySelectorAll(`.food`);
const image = document.querySelectorAll(`.image`);
const complexion = document.querySelectorAll(`.complexion`);

for (i = 0; i < teamMates.length; i++) {
  const card = `<div class="col-12 col-md-4 col-lg-3 m-lg-4 my-2">
          <div class="card" style="width: 18.7rem">
            <img
              src="${teamMates[i].image}"
              class="card-img-top image"
              alt="..."
            />
            <div class="card-body">
              <h5 class="card-title">${teamMates[i].name}</h5>
              <h6 class="card-subtitle mb-2 text-info">${teamMates[i].track}</h6>
              <p class="card-text food">Best Food: ${teamMates[i].bestFood}</p>
              <p class="card-text movie">Best Movie: ${teamMates[i].bestMovie}</p>
              <p class="card-text age">Age: ${teamMates[i].age}</p>
              <p class="card-text complexion">Complexion: ${teamMates[i].complexion}</p>
              <p class="card-text skills">Things Learnt:${teamMates[i].thingsLearnt} </p>
              <div class="btn-div"><button class="btn btn-info" onclick="showName(${i})">Click me</button></div>
            </div>
          </div>
        </div>`;

  row.innerHTML += card;
  function showName(i) {
    alert(teamMates[i].name);
  }
}
