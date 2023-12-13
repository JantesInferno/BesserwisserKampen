window.onload = function() {
    document.querySelector('#start-game').addEventListener('click', function() {
        document.querySelector('#start-container').style.display = 'none';
        document.querySelector('#game-screen').style.display = 'block';
    });
};

