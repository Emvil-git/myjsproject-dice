document.querySelector('#lets-roll').addEventListener('click', function(event){
    p1DiceValue = Math.floor(Math.random() * 6) + 1;
    p2DiceValue = Math.floor(Math.random() * 6) + 1;
    console.log(p1DiceValue);
    console.log(p2DiceValue);
    let p1DiceSrc = 'dice-images/p1-dice-face-' + p1DiceValue + '.png';
    let p2DiceSrc = 'dice-images/p2-dice-face-' + p2DiceValue + '.png';
    document.getElementById("p1-dice").src = p1DiceSrc;
    document.getElementById("p2-dice").src = p2DiceSrc;

    if (p1DiceValue > p2DiceValue) {
        document.getElementById("top-label").innerHTML = "PLAYER 1 WINS!!!";
        document.getElementById("top-label").style.backgroundColor = '#d22228';
        var audio = new Audio('sfx/button-press.mp3');
        audio.play();
    }
    else if (p1DiceValue < p2DiceValue) {
        document.getElementById("top-label").innerHTML = "PLAYER 2 WINS!!!";
        document.getElementById("top-label").style.backgroundColor = '#3b4ba0';
        var audio = new Audio('sfx/button-press.mp3');
        audio.play();
    }else{
        document.getElementById("top-label").innerHTML = "IT'S A DRAW!!!";
        document.getElementById("top-label").style.backgroundColor = "black";
        var audio = new Audio('sfx/button-draw.mp3');
        audio.play();
    }

});
