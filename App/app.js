window.onload = function() {
    document.getElementById('start-game').addEventListener('click', function() {
        document.getElementById('start-container').style.display = 'none';
        document.getElementById('game-screen').style.display = 'block';
    });
};