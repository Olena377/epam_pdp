var video, playpausebtn, seekslider, currentTimeText, durationTimeText, muteBtn, volumeslider, oldVolume, fullSreenBtn;

function initializePlayer() {

    video = document.getElementById("myVideo");
    playpausebtn = document.getElementById("playpausebtn");
    seekslider = document.getElementById("seekslider");
    currentTimeText = document.getElementById("currentTimeText");
    durationTimeText = document.getElementById("durationTimeText");
    muteBtn = document.getElementById("muteBtn");
    volumeslider = document.getElementById("volumeslider");
    fullSreenBtn = document.getElementById("fullSreenBtn");

    currentTimeText.innerHTML = video.currentTime;


    playpausebtn.addEventListener("click", playPauseVideo, false);
    seekslider.addEventListener("change", videoSeek, false);
    video.addEventListener("timeupdate", seekTimeUpdate, false);
    muteBtn.addEventListener("click", videoMute, false);
    volumeslider.addEventListener("input", setVolume, false);
    fullSreenBtn.addEventListener("click", toggleFullScreen, false);
    currentTimeText.addEventListener("load", currentTime, false);
    durationTimeText.addEventListener("load", durationTime, false);
}

window.onload = initializePlayer;


function playPauseVideo() {
    if (video.paused == true) {
        video.play();
        playpausebtn.classList.remove("fa-play");
        playpausebtn.classList.add("fa-pause");

    } else {
        video.pause();
        playpausebtn.classList.remove("fa-pause");
        playpausebtn.classList.add("fa-play");
    }
}

function videoSeek() {
    var seekTo = video.duration * (seekslider.value / 100);
    video.currentTime = seekTo;
}
function currentTime() {
    //var curmins = Math.floor(video.currentTime / 60); ???????????
    //var cursecs = Math.floor(video.currentTime - curmins * 60);
    //curmins = "0"+curmins;
    //cursecs = "0"+cursecs;
    currentTimeText.innerHTML = video.currentTime;
}
function durationTime() {
    //var durmins = Math.floor(video.duration / 60); ??????????
    //var dursecs = Math.floor(video.duration - durmins * 60);
    //durmins = "0"+durmins;
    //dursecs = "0"+dursecs;
    durationTimeText.innerHTML = video.duration;
}
function seekTimeUpdate(){
    var time = video.currentTime * (100 / video.duration);
    seekslider.value = time;
    var curmins = Math.floor(video.currentTime / 60);
    var cursecs = Math.floor(video.currentTime - curmins * 60);
    var durmins = Math.floor(video.duration / 60);
    var dursecs = Math.floor(video.duration - durmins * 60);
    if(cursecs < 10){ cursecs = "0"+cursecs; }
    if(dursecs < 10){ dursecs = "0"+dursecs; }
    if(curmins < 10){ curmins = "0"+curmins; }
    if(durmins < 10){ durmins = "0"+durmins; }
    currentTimeText.innerHTML = curmins+":"+cursecs;
    durationTimeText.innerHTML = durmins+":"+dursecs;
}

function videoMute() {
    if (video.muted == true) {
        volumeslider.value = oldVolume;
        muteBtn.classList.remove("fa-volume-off");
        muteBtn.classList.add("fa-volume-up");
        video.muted = false;
    } else {
        oldVolume = volumeslider.value;
        volumeslider.value = 0;
        muteBtn.classList.remove("fa-volume-up");
        muteBtn.classList.add("fa-volume-off");
        video.muted = true;
    }
}

function setVolume() {
    video.volume = volumeslider.value / 100;
}

function toggleFullScreen() {
    if(video.requestFullScreen){
        video.requestFullScreen();
    } else if(video.webkitRequestFullScreen){
        video.webkitRequestFullScreen();
    } else if(video.mozRequestFullScreen){
        video.mozRequestFullScreen();
    }
}