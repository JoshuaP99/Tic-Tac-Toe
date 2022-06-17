var turn, tiles, XO; 
winner = document.getElementById("winner")
tiles = document.querySelectorAll("#main div");
XO = 0;

//Grabs the replay button in the HTML with the id
//Creates an event listeners so when clicked it will execute the replay function
document.getElementById('replay').addEventListener('click', replay);

//The replay button will set up the game for play again which will clear the log
//This also sets the boxes back to blank so they can be set X and O again
function replay() {
    for (var i = 0; i < tiles.length; i++) {
        tiles[i].classList.remove("win");
        tiles[i].innerHTML = "";
        winner.innerHTML = "Begin";
        console.clear();
        XO = 0;
    }
}

//This function picks the winners based on the letters in the boxes
//The logic in determineWinner invokes this function when the rows allow a winner
function selectWinner(b1, b2, b3) {
    b1.classList.add("win");
    b2.classList.add("win");
    b3.classList.add("win");
    winner.innerHTML = b1.innerHTML + " wins";
}

//The determine winner function grabs all the individual tiles and compares them based on the letter
//If the letters match and are in a row that fits the criteria they will invoke the selectWinner function
function determineWinner() {
    var tile1, tile2, tile3, tile4, tile5, tile6, tile7, tile8, tile9;
    tile1 = document.getElementById("tile1");
    tile2 = document.getElementById("tile2");
    tile3 = document.getElementById("tile3");
    tile4 = document.getElementById("tile4");
    tile5 = document.getElementById("tile5");
    tile6 = document.getElementById("tile6");
    tile7 = document.getElementById("tile7");
    tile8 = document.getElementById("tile8");
    tile9 = document.getElementById("tile9");

    if (tile1.innerHTML !== "" && tile1.innerHTML === tile2.innerHTML && tile1.innerHTML === tile3.innerHTML)
    selectWinner(tile1, tile2, tile3);
    
    if (tile4.innerHTML !== "" && tile4.innerHTML === tile5.innerHTML && tile4.innerHTML === tile6.innerHTML)
    selectWinner(tile4, tile5, tile6);
    
    if (tile7.innerHTML !== "" && tile7.innerHTML === tile8.innerHTML && tile7.innerHTML === tile9.innerHTML)
    selectWinner(tile7, tile8, tile9);
    
    if (tile1.innerHTML !== "" && tile1.innerHTML === tile4.innerHTML && tile1.innerHTML === tile7.innerHTML)
    selectWinner(tile1, tile4, tile7);
    
    if (tile2.innerHTML !== "" && tile2.innerHTML === tile5.innerHTML && tile2.innerHTML === tile8.innerHTML)
    selectWinner(tile2, tile5, tile8);

    if (tile3.innerHTML !== "" && tile3.innerHTML === tile6.innerHTML && tile3.innerHTML === tile9.innerHTML)
    selectWinner(tile3, tile6, tile9);

    if (tile1.innerHTML !== "" && tile1.innerHTML === tile5.innerHTML && tile1.innerHTML === tile9.innerHTML)
    selectWinner(tile1, tile5, tile9);

    if (tile3.innerHTML !== "" && tile3.innerHTML === tile5.innerHTML && tile3.innerHTML === tile7.innerHTML)
    selectWinner(tile3, tile5, tile7);
}

//This loop will play everytime the tiles are clicked
//Each click will add to the XO variable and will determine the turn
//If the loop adds up to 9 for XO then the game will draw since there is no more tiles to click
for (var i = 0; i < tiles.length; i++) {
    tiles[i].onclick = function () {
        if (this.innerHTML !== "X" && this.innerHTML !== "O") {
            if (XO % 2 === 0) {
                console.log(XO);
                this.innerHTML = "X";
                winner.innerHTML = "O's Turn";
                determineWinner();
                XO += 1;
            } else {
                console.log(XO);
                this.innerHTML = "O";
                winner.innerHTML = "X's Turn Now";
                determineWinner();
                XO += 1;
            } if (XO === 9) {
                winner.innerHTML = "Game is draw";
                determineWinner();
            }
        }
    }
}