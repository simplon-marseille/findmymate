//  const helloWorld = () => {
//   console.log("nicolas");
// };

// module.exports = helloWorld;

const codeuse1 = {
  nom: "agathe",
  photo: "agathe.jpg"
};

const codeuse2 = {
  nom: "catherine",
  photo: "catherine.jpg"
};

const codeuse3 = {
  nom: "cathy",
  photo: "cathy.jpg"
};

const codeuse4 = {
  nom: "cecilia",
  photo: "cecilia.jpeg"
};

const codeuse5 = {
  nom: "christelle",
  photo: "christelle.jpeg"
};

const codeuse6 = {
  nom: "emmanuelle",
  photo: "emmanuelle.jpg"
};

const codeuse7 = {
  nom: "Florence",
  photo: "florence.jpg"
};

const codeuse8 = {
  nom: "maryam",
  photo: "maryam.jpg"
};
//const findMyMate = require('./team');
//




//const promo = ["émilie", "aurelie","laurene", "sophie", "vanessa", "audray", "cathy", "chloé"];
const promo = [codeuse1, codeuse2, codeuse3, codeuse4, codeuse5, codeuse6, codeuse7, codeuse8];
const promoLength = promo.length;

const shuffle = (array) => {
  let arrayLength = array.length;
  const shufflePromo = [];
for (let i = 0; i < arrayLength; i++){
  let randomNumber = Math.floor(Math.random() * (arrayLength - i));
  let randomElement = array[randomNumber];
  shufflePromo.push(randomElement);
  array.splice(randomNumber, 1);
};
  return shufflePromo;
};


const mapromo = shuffle(promo);

const team = (arrayShuffeled) => {
  const team = new Map();
  for(let i = 0; i < arrayShuffeled.length/2; i++){
    team.set(arrayShuffeled[i*2], arrayShuffeled[(i*2)+1]);
  };
  return team;
};

const isEven = (arrayLength) => {
  const response = (arrayLength%2 === 0) ? true : false;
  return response;
};

const mapToArrayShuffled = Array.from(team(mapromo));

const findMyMate = (promoShuffled) => {
  if(isEven(promoLength) === true){
  return promoShuffled;
}else{
  promoShuffled[2].push(promoShuffled[3]);
  promoShuffled.splice(promoShuffled.length-1, 1);
  return promoShuffled;
  };
};


const arrayOfTeam = findMyMate(mapToArrayShuffled);
const titre = document.querySelector('#titre');
const myTeam = document.querySelector('#team');
const listeTeam = document.querySelector('#blocTeam');
const listeCodeuse = document.querySelector('.codeuse');
const row = document.querySelector('.row');
let i = 0;

arrayOfTeam.forEach((element) => {
  row.innerHTML += '<div class="col-md-4 colonne">'
  + `<h2 style="margin-top: 40px;">Team ${i = i + 1}</h2>`
  + `<img src="./asset/images/${element[0].photo}" style="width: 30%; border-radius:3%; box-shadow: 3px 3px 3px gray;">`
  + `<img src="./asset/images/${element[1].photo}" style="width: 30%; border-radius:3%; box-shadow: 3px 3px 3px gray;">`;
  row.innerHTML += '</div>'
});

