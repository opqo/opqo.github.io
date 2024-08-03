document.getElementById('playButton').addEventListener('click', function() {
    const audioPlayer = document.getElementById('audioPlayer');
    if (audioPlayer.paused) {
        audioPlayer.play();
        this.textContent = '❚❚';
    } else {
        audioPlayer.pause();
        this.textContent = '►';
    }
});

document.getElementById('speedUpButton').addEventListener('click', function() {
    const audioPlayer = document.getElementById('audioPlayer');
    let newSpeed = audioPlayer.playbackRate + 0.1;
    if (newSpeed > 2.0) newSpeed = 2.0;
    audioPlayer.playbackRate = newSpeed;
    document.getElementById('speedDisplay').textContent = newSpeed.toFixed(1) + 'x';
});

document.getElementById('slowDownButton').addEventListener('click', function() {
    const audioPlayer = document.getElementById('audioPlayer');
    let newSpeed = audioPlayer.playbackRate - 0.1;
    if (newSpeed < 0.5) newSpeed = 0.5;
    audioPlayer.playbackRate = newSpeed;
    document.getElementById('speedDisplay').textContent = newSpeed.toFixed(1) + 'x';
});
