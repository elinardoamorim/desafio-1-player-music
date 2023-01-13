let music = document.querySelector('audio');

document.querySelector('.playerThree .play-music').addEventListener('click', playMusic);
document.querySelector('.playerThree .stop-music').addEventListener('click', stopMusic);

music.addEventListener('timeupdate', updateBar);

function playMusic(){
  music.play();
  document.querySelector('.playerThree .stop-music').style.display = 'block';
  document.querySelector('.playerThree .play-music').style.display = 'none';
}

function stopMusic(){
  music.pause();
  document.querySelector('.playerThree .play-music').style.display = 'block';
  document.querySelector('.playerThree .stop-music').style.display = 'none';
}