//We worked on this as a group; Gardner.

//Variable declarations
const pair1 = document.querySelectorAll(".cardOne");
const pair2 = document.querySelectorAll(".cardTwo");
const pair3 = document.querySelectorAll(".cardThree");
const pair4 = document.querySelectorAll(".cardFour");
const pair5 = document.querySelectorAll(".cardFive");
const tds = document.querySelectorAll('TD');
const card = {
  back: "url('images/pikachu.png') center /100%",
  front: "url('images/goku.png') center /100%"
};
const item = {
  vegito: "url('images/vegito.png')no-repeat center /75%",
  gogeta: "url('images/gogeta.png') no-repeat center /80%",
  gohan: "url('images/gohan.png') no-repeat center /80%",
  trunks: "url('images/trunks.png') no-repeat center /100%",
  vegeta: "url('images/vegeta.png') no-repeat center /80%"
  // feather: "url('images/vegito.png')no-repeat center /75%",
  // boo: "url('images/gogeta.png') no-repeat center /80%",
  // flower: "url('images/gohan.png') no-repeat center /80%",
  // egg: "url('images/trunks.png') no-repeat center /100%",
  // mush: "url('images/vegeta.png') no-repeat center /80%"
};

//Functions that return cards to 'item blocks' if they do not match and change background color of td card pairs on-click.
const flipCard = (pairs, img) => {
  pairs.forEach((td) =>{
         td.style.background = img;
       });
     };

const revealPowerUp = (pairs, item) => {
  pairs.forEach((td) =>{
    td.addEventListener('click', (event) =>{
         td.style.background = item;
         setTimeout(cardsMatch, 1800);
         setTimeout(cardsDontMatch, 1800);
       });
     });
   };

revealPowerUp(pair1, item.vegito);
revealPowerUp(pair2, item.gogeta);
revealPowerUp(pair3, item.gohan);
revealPowerUp(pair4, item.trunks);
revealPowerUp(pair5, item.vegeta);

//Function that checks if the cards do not match.
const cardsDontMatch = () => {

  const match = [[1, 3], [1, 4], [1, 5], [1, 6], [1, 7], [1, 8], [1, 9], [1, 10],
  [2, 1], [2, 3], [2, 4], [2, 5], [2, 6], [2, 7], [2, 8], [2, 9], [2, 10],
  [3, 1], [3, 2], [3, 5], [3, 6], [3, 7], [3, 8], [3, 9], [3, 10],
  [4, 1], [4, 2], [4, 3], [4, 5], [4, 6], [4, 7], [4, 8], [4, 9], [4, 10],
  [5, 1], [5, 2], [5, 3], [5, 4], [5, 7], [5, 8], [5, 9], [5, 10],
  [6, 1], [6, 2], [6, 3], [6, 4], [6, 5], [6, 7], [6, 8], [6, 9], [6, 10],
  [7, 1], [7, 2], [7, 3], [7, 4], [7, 5], [7, 6], [7, 9], [7, 10],
  [8, 1], [8, 2], [8, 3], [8, 4], [8, 5], [8, 6], [8, 7], [8, 9], [8, 10],
  [9, 1], [9, 2], [9, 3], [9, 4], [9, 5], [9, 6], [9, 7], [9, 8],
  [10, 1], [10, 2], [10, 3], [10, 4], [10, 5], [10, 6], [10, 7], [10, 8], [10, 9]]

  for(let i = 0; i < match.length; i++){
  const cardPairs = match[i];

  const firstCard = document.getElementById(cardPairs[0]).style.background;
  const secondCard = document.getElementById(cardPairs[1]).style.background;

    if(firstCard.includes('vegito') && secondCard.includes('gogeta')){
     flipCard(pair1, card.back)
     flipCard(pair2, card.back);
  }else if(firstCard.includes('vegito') && secondCard.includes('gohan')){
    flipCard(pair1, card.back);
    flipCard(pair3, card.back);
  }else if(firstCard.includes('vegito') && secondCard.includes('trunks')){
    flipCard(pair1, card.back);
    flipCard(pair4, card.back);
  }else if(firstCard.includes('vegito') && secondCard.includes('vegeta')){
    flipCard(pair1, card.back);
    flipCard(pair5, card.back);
  }else if (firstCard.includes('gogeta') && secondCard.includes('vegito')){
    flipCard(pair2, card.back);
    flipCard(pair1, card.back);
  }else if(firstCard.includes('gogeta') && secondCard.includes('gohan')){
    flipCard(pair2, card.back);
    flipCard(pair3, card.back);
  }else if(firstCard.includes('gogeta') && secondCard.includes('trunks')){
    flipCard(pair2, card.back);
    flipCard(pair4, card.back);
  }else if(firstCard.includes('gogeta') && secondCard.includes('vegeta')){
    flipCard(pair2, card.back);
    flipCard(pair5, card.back);
  }else if (firstCard.includes('gohan') && secondCard.includes('vegito')){
    flipCard(pair3, card.back);
    flipCard(pair1, card.back);
  }else if(firstCard.includes('gohan') && secondCard.includes('gogeta')){
    flipCard(pair3, card.back);
    flipCard(pair2, card.back);
  }else if(firstCard.includes('gohan') && secondCard.includes('trunks')){
    flipCard(pair3, card.back);
    flipCard(pair4, card.back);
  }else if(firstCard.includes('gohan') && secondCard.includes('vegeta')){
    flipCard(pair3, card.back);
    flipCard(pair5, card.back);
  }else if(firstCard.includes('trunks') && secondCard.includes('vegito')){
    flipCard(pair4, card.back);
    flipCard(pair1, card.back);
  }else if(firstCard.includes('trunks') && secondCard.includes('gogeta')){
    flipCard(pair4, card.back);
    flipCard(pair2, card.back);
  }else if(firstCard.includes('trunks') && secondCard.includes('gohan')){
    flipCard(pair4, card.back);
    flipCard(pair3, card.back);
  }else if(firstCard.includes('trunks') && secondCard.includes('vegeta')){
    flipCard(pair4, card.back);
    flipCard(pair5, card.back);
  }else if (firstCard.includes('vegeta') && secondCard.includes('vegito')){
    flipCard(pair5, card.back);
    flipCard(pair1, card.back);
  }else if(firstCard.includes('vegeta') && secondCard.includes('gogeta')){
    flipCard(pair5, card.back);
    flipCard(pair2, card.back);
  }else if(firstCard.includes('vegeta') && secondCard.includes('gohan')){
    flipCard(pair5, card.back);
    flipCard(pair3, card.back);
  }else if(firstCard.includes('vegeta') && secondCard.includes('trunks')){
    flipCard(pair5, card.back);
    flipCard(pair4, card.back);
    };
  };
};

//Fuction that checks if the cards do match.
const cardsMatch = () => {
  const match = [[1, 2],[3, 4], [5, 6], [7, 8], [9, 10]]

  for(let i = 0; i < match.length; i++){
  const cardPairs = match[i];

  const firstCard = document.getElementById(cardPairs[0]).style.background;
  const secondCard = document.getElementById(cardPairs[1]).style.background;

  if (firstCard.includes('vegito') && secondCard.includes('vegito')){
    flipCard(pair1, card.front);
  }else if(firstCard.includes('gogeta') && secondCard.includes('gogeta')){
    flipCard(pair2, card.front);
  }else if( firstCard.includes('gohan') && secondCard.includes('gohan')){
    flipCard(pair3, card.front);
  }else if( firstCard.includes('trunks') && secondCard.includes('trunks')){
    flipCard(pair4, card.front);
  }else if( firstCard.includes('vegeta') && secondCard.includes('vegeta')){
    flipCard(pair5, card.front);
    };
  };
};

//Reset button (Mario is the button)
document.querySelector("button").addEventListener('click', () =>{
      tds.forEach((td) =>{
    td.style.background = card.back;
  })
})
