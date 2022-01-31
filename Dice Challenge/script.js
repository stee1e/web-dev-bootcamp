function rollTheDice() {
    setTimeout(function() {
        var diceNumber1 = Math.floor(Math.random() * 6) + 1;
        var diceNumber2 = Math.floor(Math.random() * 6) + 1;

        document.querySelector(".img1").setAttribute("src",
            "dice" + diceNumber1 + ".png");

        document.querySelector(".img2").setAttribute("src",
            "dice" + diceNumber2 + ".png");

        if (diceNumber1 === diceNumber2) {
            document.querySelector("h2").innerHTML = "Draw!";
        } else if (diceNumber1 < diceNumber2) {
            document.querySelector("h2").innerHTML = (player2 + " WINS!");
        } else {
            document.querySelector("h2").innerHTML = (player1 + " WINS!");
        }
    }, 2500);

}