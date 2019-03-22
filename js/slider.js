function openModal() {
  document.getElementById('myModal').style.display = "block"
}

function closeModal() {
  document.getElementById('myModal').style.display = "none"
}

var cardIndex = 1;
showCards(cardIndex);

function plusCards(n) {
  showCards(cardIndex += n);
}

function currentCard(n) {
  showCards(cardIndex = n);
}

function showCards(n) {
  var i;
  var cards = document.getElementsByClassName("myCards");
  
  if (n > cards.length) {cardIndex = 1}
  if (n < 1) {cardIndex = cards.length}
  for (i = 0; i < cards.length; i++) {
      cards[i].style.display = "none"
  }
  
  cards[cardIndex-1].style.display = "block";
  
}
