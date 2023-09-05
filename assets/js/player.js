$('#player-controls-play').on('click', function() {
    document.getElementById('player-audio').play();
});

$('#pause').on('click', function() {
    document.getElementById('player-audio').pause();
});

$('#player-audio').on('timeupdate', function() {
    $('#player-progress-bar').attr("value", this.currentTime / this.duration);
});
