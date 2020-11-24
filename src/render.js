
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

const promo = [
codeuse2,
codeuse3,
codeuse5,
codeuse8,
codeuse9,
codeuse10,
codeuse12,
codeuse13,
codeuse14,
codeuse15,
codeuse16,
codeuse17,
codeuse18,
codeuse19,
codeuse21,
codeuse22,
codeuse23
];

//on récupère la longueur du tableau d'objets
const promoLength = promo.length;

//Cette fonction permet de mélanger les éléments du tableau. On lui passe en paramètre le tableau
//d'objets et renvoie nouveau tableau.
const shuffle = (array) => {
  let arrayLength = array.length;
  //déclaration d'un tableau vide. Il accueillera les éléments au hasard.
  const shufflePromo = [];
  //On boucle sur la longueur du tableau passé en paramètre.
  //chaque itération permettra de:
  for (let i = 0; i < arrayLength; i++){
    //trouver un nombre au hasard entre 0 et la longueur du tableau - le nombre d'itération
    let randomNumber = Math.floor(Math.random() * (arrayLength - i));
    //trouver l'élément à l'indice trouvé au hasard
    let randomElement = array[randomNumber];
    //ajouter cet élément au nouveau tableau
    shufflePromo.push(randomElement);
    //supprimer un élément au tableau array à chaque itération (c'est pour ca qu'il faut réduire la taille du random 
    //ligne 150).
    array.splice(randomNumber, 1);
  };
    return shufflePromo;
};


//appel de la fonction shuffle
const mapromo = shuffle(promo);

//fonction qui prend en paramètre le tableau d'élèves mélangés et qui renvoie un objet (clé/valeur)
//de paires d'apprenantes. La fonction renvoie des équipes de deux.
const team = (arrayShuffeled) => {
  const team = new Map();
  for(let i = 0; i < arrayShuffeled.length/2; i++){
    //La méthode set() ajoute un nouvel élément avec une clé et une valeur données à un objet Map
    team.set(arrayShuffeled[i*2], arrayShuffeled[(i*2)+1]);
  };
  return team;
};

//fonction paire/impaire
const isEven = (arrayLength) => {
  const response = (arrayLength%2 === 0) ? true : false;
  return response;
};

//Appel et conversion en tableau de la fonction permettant de faire des équipes de deux.
const mapToArrayShuffled = Array.from(team(mapromo));

//Gestion de la promo en fonction de la parité (paire/impaire) 
const findMyMate = (promoShuffled) => {
  if(isEven(promoLength) === true){
  return promoShuffled;
}else{
  //gestion de la promo si l'effectif est impaire (la dernière équipe contient 3 apprenants)
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


//Affichage
arrayOfTeam.forEach((element) => {
  row.innerHTML += '<div class="col-md-4 colonne">'
  + `<h2 style="margin-top: 40px;">Team ${i = i + 1}</h2>`
  + `<img src="./asset/images/${element[0].photo}" style="width: 30%; border-radius:3%; box-shadow: 3px 3px 3px gray;">`
  + `<img src="./asset/images/${element[1].photo}" id="lastRow" style="width: 30%; border-radius:3%; box-shadow: 3px 3px 3px gray;">`
  if(element.length === 3){
    row.innerHTML += `<img src="./asset/images/${element[2].photo}" style="width: 11%; border-radius:3%; box-shadow: 3px 3px 3px gray;">`;

  };
  row.innerHTML += '</div>';
});

