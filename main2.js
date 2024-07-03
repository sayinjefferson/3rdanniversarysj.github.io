const openBtn = document.querySelector(".card-container");
const to = document.querySelector(".to");
const my = document.querySelector(".my");
const from = document.querySelector(".from");

const toArr = [
  // "Purple Donkey Ears",
  // "Glow Stick",
  // "Luscious LipBalm",
  // "Reticulated Python",
  // "HTML",
  // "Palm Tree",
  // "Kitchen Table",
  // "Javascript",
  // "Fireworks",
  // "Infinite Pikachu",
  // "Fabulous Artichoke"
];
const myArr = [
  // "Insomnia",
  // "Cherry Tomato",
  // "Coffee Table",
  // "Pink Fairy Armadillo",
  // "Coral Reef",
  // "Cozy Armchair",
  // "CSS",
  // "Motorcycle",
  // "Shiny Disco Ball",
  // " Pygmy Goat",
  // "Space Hopper"
];
const fromArr = [
  // "Disco Dancer",
  // "Raving Pigeon",
  // "Cocktail Umbrella",
  // "Speeding Chicken",
  // "Can Opener",
  // "Cunning Fox",
  // "Biscuit Barrel",
  // "Sneezing Panda",
  // "Complicated Monkey",
  // "Menacing Mongoose"
];

let tooMsg = toArr[Math.floor(Math.random() * toArr.length)];
let myMsg = myArr[Math.floor(Math.random() * myArr.length)];
let fromMsg = fromArr[Math.floor(Math.random() * fromArr.length)];

const generateCard = () => {
  to.innerHTML = `Happy 3rd Year Anniversary MyLove! Unang una sa lahat nagpapasalamat ako sa Diyos dahil hindi nya tayo pinapabayaan sa kahit anong pagsubok na dumaan sating dalawa. 
  
  Sa ating mga susunod na paglalakbay, maraming pagsubok man, tandaan mo na nandito lang ako palagi para sayo. Maraming salamat sa pagmamahal, pang-unawa, at suporta na ibinibigay mo sa akin.
  
  Nawa'y patnubayan tayo ng panginoon sa ating pagsasama at tulungan nya tayo sa ating mga susunod na taon. I LOVE YOU LOVE!
  
  HAPPY ANNIVERSARY MYLOVE.`;
  my.innerHTML = `"You are my LOVE the one that takes away all my SADNESS, the one that gives me FEAR when we're fighting, the one that gives me ANGER when you say everything you want to say and not listening to me, and lastly the one that gives me JOY when we're together.`;
  // from.innerHTML = ` <br> <b></b>`;
};

openBtn.onclick = function () {
  document.body.classList.toggle("open");
  generateCard();
};
