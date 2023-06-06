import Card from "./card.js";
let cardsCount1;
function startQuestion() {
  let cardsCount1 = prompt("Выберите количество карточек от 2 до 10");
  console.log(cardsCount1);
  cardsCount1 <= 10 && cardsCount1 >= 2 && cardsCount1 % 2 === 0
    ? ((cardsCount1 = cardsCount1 * cardsCount1), console.log("ok"))
    : ((cardsCount1 = 4), console.log("not ok"));
  return cardsCount1;
  window.cardsCount1 = cardsCount1;
}
window.cardsCount1 = cardsCount1;
function newGame(container, cardsCount1) {
  console.log(cardsCount1);
  //Поле игры
  let cardsNumberArray = [],
    cardsArray = [],
    firstCard = null,
    secondCard = null;
  for (let i = 1; i <= cardsCount1 / 2; i++) {
    cardsNumberArray.push(i);
    cardsNumberArray.push(i);
  }
  cardsNumberArray = cardsNumberArray.sort(() => Math.random() - 0.5);
  for (const cardNumber of cardsNumberArray) {
    cardsArray.push(new Card(container, cardNumber, flip));
  }
  //Логика
  function flip(card) {
    if (firstCard !== null && secondCard !== null) {
      if (firstCard.number != secondCard.number) {
        firstCard.open = false;
        secondCard.open = false;
        firstCard = null;
        secondCard = null;
      }
    }
    if (firstCard == null) {
      firstCard = card;
    } else {
      if (secondCard == null) {
        secondCard = card;
      }
    }
    if (firstCard !== null && secondCard !== null) {
      if (firstCard.number == secondCard.number) {
        firstCard.success = true;
        secondCard.success = true;
        firstCard = null;
        secondCard = null;
      }
    }
    //Сброс и запуск заново
    if (
      document.querySelectorAll(".card.success").length ==
      cardsNumberArray.length
    ) {
      alert("You are the Winner!");
      (container.innerHTML = ""),
        (cardsNumberArray = []),
        (cardsArray = []),
        (firstCard = null),
        (secondCard = null),
        startQuestion(),
        newGame(container, cardsCount1);
    }
  }
}
startQuestion();
newGame(document.getElementById("game"), cardsCount1);
