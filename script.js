const GameBoard = (function() {
    const gameBoard = [];
    const hanger = document.querySelector('.game-board');
    for (let i = 0; i < 9; i++) {
        const square = document.createElement('div');
        square.className = `square ${i}`;
        hanger.appendChild(square);
        gameBoard.push(square);
    }
    return {gameBoard};
})();

const CreatePlayer = function(name, marker) {
    return {name, marker};
};

const DisplayController = (function() {
    const display = GameBoard.gameBoard[0].innerHTML;
    display = 'X';
    return {display}
})();
