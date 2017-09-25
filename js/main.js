//array to store cards
var cards = [
{
	rank: 'queen',
	suit: 'hearts',
	cardImage: 'images/queen-of-hearts.png'
},
{
	rank: 'queen',
	suit: 'diamonds',
	cardImage: 'images/queen-of-diamonds.png'
},
{
	rank: 'king',
	suit: 'hearts',
	cardImage: 'images/king-of-hearts.png'
},
{
	rank: 'king',
	suit: 'diamonds',
	cardImage: 'images/king-of-diamonds.png'
}
];

//array to store selected cards
var cardsInPlay = [];

//score display
var score =  0;

var settingScore = function (){
document.getElementById('score').textContent = "Score "+score;
};

settingScore();

//checking cards for same rank property
var checkForMatch = function(){
	if (cardsInPlay[0] === cardsInPlay[1]) {
		score += 100;
		settingScore();
		alert("You found a match!");
 } else {
      alert("Sorry, try again.");
  }
};


//function storing selected card and checking for match
var flipCard = function(){
	
	var cardId = this.getAttribute('data-id');
	console.log('User flipped ' + cards[cardId].rank);
	cardsInPlay.push(cards[cardId].rank);
	console.log(cards[cardId].cardImage);
	console.log(cards[cardId].suit);
	this.setAttribute('src', cards[cardId].cardImage);


if(cardsInPlay.length === 2){
	checkForMatch();
	cardsInPlay.length = 0;
}};

var createBoard = function (){
//checking for existing board of cards and removing it
	if(document.getElementById('game-board').firstChild){
		var myNode = document.getElementById('game-board');
		while (myNode.firstChild){
		myNode.removeChild(myNode.firstChild);
		}
	}

//creating new board
	for( var i=0; i<cards.length; i++){

		var cardElement = document.createElement('img');
		cardElement.setAttribute('src','images/back.png');
		cardElement.setAttribute('data-id', i);
		cardElement.addEventListener('click', flipCard);
		document.getElementById('game-board').appendChild(cardElement);
	}
};

createBoard();

//listener for creating new board of cards
var buttonListen = document.getElementById('new_game');
buttonListen.addEventListener('click', createBoard);






