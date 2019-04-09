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

const codeuse9 = {
  nom: "fazia",
  photo: "fazia.jpg"
};

const codeuse10 = {
  nom: "florence",
  photo: "florence.jpg"
};

const codeuse11 = {
  nom: "gwenn",
  photo: "gwennn.jpg"
};

const codeuse12 = {
  nom: "helene",
  photo: "hélène.jpg"
};

const codeuse13 = {
  nom: "laurene",
  photo: "laurene.jpg"
};

const codeuse14 = {
  nom: "magali",
  photo: "magali.jpg"
};

const codeuse15 = {
  nom: "maria",
  photo: "maria.jpg"
};

const codeuse16 = {
  nom: "myriam",
  photo: "myriam.jpg"
};

const codeuse17 = {
  nom: "myriam",
  photo: "myriam2.jpg"
};

const codeuse18 = {
  nom: "nacira",
  photo: "nacira.jpg"
};

const codeuse19 = {
  nom: "niima",
  photo: "niima.jpg"
};

const codeuse20 = {
  nom: "romane",
  photo: "romane.jpg"
};

const codeuse21 = {
  nom: "tadikira",
  photo: "tadikira.jpg"
};

const codeuse22 = {
  nom: "tania",
  photo: "tania.jpg"
};

const codeuse23 = {
  nom: "yasmina",
  photo: "yasmina.jpg"
};
//const findMyMate = require('./team');
//




const promo = [codeuse1,
codeuse2,
codeuse3,
codeuse4,
codeuse5,
codeuse6,
codeuse7,
codeuse8,
codeuse9,
codeuse10,
codeuse11,
codeuse12,
codeuse13,
codeuse14,
codeuse15,
codeuse16,
codeuse17,
codeuse18,
codeuse19,
codeuse20,
codeuse21,
codeuse22,
codeuse23
];


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
  promoShuffled[promoShuffled.length-2].push(promoShuffled[promoShuffled.length-1][0]);
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

