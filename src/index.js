const promo = ["émilie", "laurene", "sophie", "vanessa", "audray", "cathy", "chloé"];
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


const mapromo = shuffle(promo)


const team = (arrayShuffeled) => {
  const team = new Map();
  for(let i = 0; i < arrayShuffeled.length/2; i++){
    team.set(arrayShuffeled[i*2], arrayShuffeled[(i*2)+1]);
  };
  return team;
};

//console.log(team(mapromo));

const isEven = (arrayLength) => {
  response = (arrayLength%2 === 0) ? true : false;
  return response;
};

mapToArrayShuffled = Array.from(team(mapromo));

if(isEven(promoLength) === true){
  console.log(mapToArrayShuffled);
}else{
  mapToArrayShuffled[2].push(mapToArrayShuffled[3][0]);
  mapToArrayShuffled.splice(mapToArrayShuffled.length-1, 1);
  console.log (mapToArrayShuffled);
};
//console.log(mapToArrayShuffled[2].push(mapToArrayShuffled[3][0]));
//console.log(mapToArrayShuffled[mapToArrayShuffled.length-1]);
//console.log(mapToArrayShuffled);
