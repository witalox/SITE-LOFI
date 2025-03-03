let audio = document.getElementById('audio');
let playpausebutton = document.getElementById('play-pause');
let progressBar = document.getElementById('progresso-barra');
let currentTimeText = document.getElementById('current-time');
let totalTimeText = document.getElementById('total-time');

function toggleplay() {
    if (audio.paused) {
        audio.play();
        playpausebutton.textContent = '❚❚';
    } else {
        audio.pause();
        playpausebutton.textContent = '▶';
    }
}

audio.addEventListener('timeupdate', function() {
    let progresso = (audio.currentTime / audio.duration) * 100;
    progressBar.value = progresso;

    let currentMinutes = Math.floor(audio.currentTime / 60);
    let currentSeconds = Math.floor(audio.currentTime % 60);
    currentTimeText.textContent = `${currentMinutes}:${currentSeconds < 10 ? '0' + currentSeconds : currentSeconds}`;
});

audio.addEventListener('loadedmetadata', function() {
    let totalMinutes = Math.floor(audio.duration / 60);
    let totalSeconds = Math.floor(audio.duration % 60);
    totalTimeText.textContent = `${totalMinutes}:${totalSeconds < 10 ? '0' + totalSeconds : totalSeconds}`;
});

progressBar.addEventListener('input', function() {
    let newTime = (progressBar.value / 100) * audio.duration;
    audio.currentTime = newTime;
});
