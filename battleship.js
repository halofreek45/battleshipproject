// sets grid rows and columns and the size of each square
var rows = 10;
var cols = 10;
var squareSize = 50;

// gets the container element
var gameBoardContainer = document.getElementById("gameboard");
// you can use this to convert your letters into numbers for use
// with the 2D array
var letterConversion = {
	"A": 0,
	"B": 1,
	"C": 2,
	"D": 3,
	"E": 4,
	"F": 5,
	"G": 6,
	"H": 7,
	"I": 8,
	"J": 9
}

// makes the grid columns and rows
for (i = 0; i < cols; i++) {
	for (j = 0; j < rows; j++) {
////Use i for Columns and j for rows////
		// creates a new div HTML element for each grid square and makes it the right size
		var square = document.createElement("div");
		gameBoardContainer.appendChild(square);

    // give each div element a unique id based on its row and column, like "s00"

		square.id = 's' + j + i;
		square.className = "boardSquare";
  //console.log(square.id);

var columnLetter = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J"]

var rowDisplay = i + 1;

	  square.textContent = columnLetter[j] + rowDisplay;

		// set each grid square's coordinates: multiples of the current row or column number
		var topPosition = j * squareSize;
		var leftPosition = i * squareSize;

		// use CSS absolute positioning to place each grid square on the page
		square.style.top = topPosition + 'px';
		square.style.left = leftPosition + 'px';
	}
}

// Hardcoded 2D array to indicate where the ships are placed
var gameBoard = [
				[0,0,0,1,1,1,1,0,0,0],
				[0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,1,0,0,0],
				[0,0,0,0,0,0,1,0,0,0],
				[1,0,0,0,0,0,1,1,1,1],
				[1,0,0,0,0,0,0,0,0,0],
				[1,0,0,1,0,0,0,0,0,0],
				[1,0,0,1,0,0,0,0,0,0],
				[1,0,0,0,0,0,0,0,0,0]
				]

var fireInput;
var inputColumn;
var inputRow;
var targetedBox;
var firstInput;
var secondInput

//console.log(gameBoard[][]);

function fireTorpedo() {

console.log("Click Function works");

fireInput = document.getElementById("gameBoardInput").value;
firstInput = fireInput.substring(0, 1);
secondInput = fireInput.substring(1, 2);
console.log(firstInput);
//inputColumn = letterConversion.J; // This logs 9 which coressponds in the letterConversion but how do you use a Variable instead of a letter?

}
//Add Latin Numbers :) Maybe as an end thing?
