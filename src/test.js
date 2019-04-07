const codeuse1 = {
  nom: ["Audray","chatelain"],
  photo: "audray.jpg"
};

const codeuse2 = {
  nom: ["emilie","bernard"],
  photo: "emilie.jpg"
};

const codeuse3 = {
  nom: ["vanessa","leclerc"],
  photo: "vanessa.jpg"
};

const codeuse4 = {
  nom: ["sophie","leclerc"],
  photo: "sophie.jpg"
};

const codeuse5 = {
  nom: ["cathy","leclerc"],
  photo: "cathy.jpg"
};

const promo = [codeuse1, codeuse2, codeuse3, codeuse4];
//const promo = ["émilie", "laurene", "sophie", "vanessa", "audray", "cathy", "chloé"];
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
  response = (arrayLength%2 === 0) ? true : false;
  return response;
};

mapToArrayShuffled = Array.from(team(mapromo));

const findMyMate = (promoShuffled) => {
  if(isEven(promoLength) === true){
  return promoShuffled;
}else{
  promoShuffled[2].push(promoShuffled[3]);
  promoShuffled.splice(promoShuffled.length-1, 1);
  return promoShuffled;
  };
};

//
allTeam = findMyMate(mapToArrayShuffled);
// console.log(allTeam);
// team1 = allTeam[1];
// console.log(team1);
//module.exports = findMyMate;


const team = document.querySelector('#team');
//const array = ["riri", "fifi", "loulou"];


allTeam.forEach((element) => {
team.insertAdjacentHTML("beforeend", "<li><img src='src/moi.jpg' style='width: 20%; border-radius: 50%;'></li>");
});

