// Your code here
const dodger = document.getElementById("dodger");
const game = document.getElementById('game');
game.addEventListener('mouseover',alert);

function alert() {
    game.style.backgroundColor = '#cccc';
}

dodger.style.backgroundColor = "#FF69B4";

document.addEventListener('keydown', function(doe){
    if (doe.key === 'ArrowLeft') {
        moveDodgerLeft();
    } else if (doe.key == 'ArrowRight') {
        moveDodgerRight();
    }
});

function moveDodgerLeft() {
    const leftNumber = dodger.style.left.replace("px","");
    const left = parseInt(leftNumber, 10);

    if (left > 0) {
        dodger.style.left = `${left - 10}px`;
    }
}

function moveDodgerRight() {
    const rightNumber = dodger.style.left.replace("px","");
    const right = parseInt(rightNumber, 10);

    if (right < 360) {
        dodger.style.left = `${right + 10}px`;
    }
}