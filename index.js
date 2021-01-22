let array = [
	'dice1.png',
	'dice2.png',
	'dice3.png',
	'dice4.png',
	'dice5.png',
	'dice6.png',
];
let arrayNumber = [
	Math.floor(Math.random() * array.length),
	Math.floor(Math.random() * array.length),
	document.querySelector('.container h1'),
];
let anItemA = array[arrayNumber[0]];
let anItemB = array[arrayNumber[1]];
let images = document.querySelectorAll('.dice img');

if (arrayNumber[0] > arrayNumber[1]) {
	arrayNumber[2].textContent = 'Player 1 Won!';
} else if (arrayNumber[0] < arrayNumber[1]) {
	arrayNumber[2].textContent = 'Player 2 Won!';
} else {
	arrayNumber[2].textContent = 'Tied!';
}
images[0].setAttribute('src', `images/${anItemA}`);
images[1].setAttribute('src', `images/${anItemB}`);
