const cardArray = [
  {
    name: 'fries',
    img: 'images/fries.png'
  },
  {
    name: 'cheeseburger',
    img: 'images/cheeseburger.png'
  },
  {
    name: 'icecream',
    img: 'images/icecream.png'
  },
  {
    name: 'pizza',
    img: 'images/pizza.png'
  },
  {
    name: 'milkshake',
    img: 'images/milkshake.png'
  },
   {
    name: 'hotdog',
    img: 'images/hotdog.png'
  },
  {
    name: 'fries',
    img: 'images/fries.png'
  },
  {
    name: 'cheeseburger',
    img: 'images/cheeseburger.png'
  },
  {
    name: 'icecream',
    img: 'images/icecream.png'
  },
  {
    name: 'pizza',
    img: 'images/pizza.png'
  },
  {
    name: 'milkshake',
    img: 'images/milkshake.png'
  },
   {
    name: 'hotdog',
    img: 'images/hotdog.png'
  }
];
cardArray.sort(() => 0.5 - Math.random())
console.log(cardArray);
const grid = document.querySelector('.grid');

function createBoard(){
  for(i=0 ; i < cardArray.length; i++){
    const card = document.createElement('img');
    card.setAttribute('src','images/blank.png');
    card.setAttribute('data-id',i);
    card.addEventListener('click',flipCard);
    grid.appendChild(card);
}
}

let cardsChosen = [];
let cardsChosenIds = [];
let cardsWon = [];

const result = document.getElementById("result");

function flipCard(){
  let cardId = this.getAttribute('data-id');
  cardsChosen.push((cardArray[cardId]).name);
  cardsChosenIds.push(cardId);
  this.setAttribute('src',cardArray[cardId].img);
   if(cardsChosen.length === 2){
    setTimeout(checkForMatch,500);
  } 

  function checkForMatch() {
    const cards = document.querySelectorAll("img");
    const optionOneId = cardsChosenIds[0];
    const optionTwoId = cardsChosenIds[1];
    const optionOneName = cardsChosen[0];
    const optionTwoName = cardsChosen[1];
   /*  
    console.log(optionTwoName); */
    if(optionOneId == optionTwoId){
      alert("You have clicked the same image!");
      cards[optionOneId].setAttribute('src','images/blank.png');
      cards[optionTwoId].setAttribute('src','images/blank.png');
    }
    else if(optionOneName === optionTwoName){
      alert("Congatulations, that was a match!");
      cards[optionOneId].setAttribute('src','images/white.png');
      cards[optionTwoId].setAttribute('src','images/white.png');
      cards[optionOneId].removeEventListener('click',flipCard);
      cards[optionTwoId].removeEventListener('click',flipCard);
      cardsWon.push(cardsChosen);
    }
    else{
      alert("Sorry :( Try again!");
      cards[optionOneId].setAttribute('src','images/blank.png');
      cards[optionTwoId].setAttribute('src','images/blank.png');
    }
      cardsChosen = [];
      cardsChosenIds = [];
      result.innerHTML = cardsWon.length;
      if(cardArray.length / 2){
        result.innerHTML = " Congratulations! You have won :)" ;
      }
    //console.log(cardsWon);  
   // console.log(cardsChosen);  

  }  
};
createBoard();

    //console.log(cards);
