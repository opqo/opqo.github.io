document.getElementById('playButton').addEventListener('click', function() {
    const audioPlayer = document.getElementById('audioPlayer');
    if (audioPlayer.paused) {
        console.log('Playing audio...');
        audioPlayer.play();
        this.textContent = '❚❚';
    } else {
        console.log('Pausing audio...');
        audioPlayer.pause();
        this.textContent = '►';
    }
});
