const game = document.getElementById("game");
let turn = document.querySelector("p");

const boxclicks = document.querySelectorAll('.boxes');

    let Xisnext = true;


for (const cell of boxclicks) {
    cell.addEventListener('click', handleInput)
}

function handleInput (e) {

    classList = e.target.classList;
    const location = classList[1];

    if (classList[2] ==="X" || classList[2] ==='O') {
        return;
    }

    else if (Xisnext === true) {
        classList.add('X');
        Xisnext= false;
        turn.innerHTML = "O's Turn";
        turn.style.color= "Yellow"
        console.log(location);
    }

    else if (Xisnext === false) {
        classList.add('O');
        Xisnext=true;
        turn.innerHTML = "X's Turn";
        turn.style.color= "red"
        console.log(location);
    }

}
