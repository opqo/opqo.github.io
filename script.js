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