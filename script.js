let songs = [
  {titulo:'Run', band:'Leona Lewis', src:'music/Leona Lewis - Run.mp3', cover:'img/leonalewis.png'},
  {titulo:'Jar Of Hearts', band:'Christina Perri', src:'music/Christina Perri - Jar Of Hearts.mp3', cover:'img/christinaperri.png'},
  {titulo:'My Immortal', band:'Evanescence', src:'music/Evanescence - My Immortal.mp3', cover:'img/evanescence.png'}
];

let music = document.querySelector('audio');
let indexMusic = 0;

let durationMusic = document.querySelector('.time-end');
let image = document.querySelector('.frontCover');
let nameMusic = document.querySelector('h1');
let nameBand = document.querySelector('h2');

initialMusic(indexMusic);
// Eventos
document.querySelector('.play-music').addEventListener('click', playMusic);
document.querySelector('.stop-music').addEventListener('click', stopMusic);

document.querySelector('.prev-music').addEventListener('click', () => {
  indexMusic--;
  if(indexMusic < 0){
    indexMusic = songs.length - 1;
  }
  renderMusic(indexMusic);
});
document.querySelector('.next-music').addEventListener('click', () => {
  indexMusic++;
  if(indexMusic > songs.length - 1){
    indexMusic = 0;
  }
  renderMusic(indexMusic);
});

music.addEventListener('timeupdate', updateBar);

// Funções
function playMusic(){
  music.play();
  document.querySelector('.stop-music').style.display = 'block';
  document.querySelector('.play-music').style.display = 'none';
}

function stopMusic(){
  music.pause();
  document.querySelector('.play-music').style.display = 'block';
  document.querySelector('.stop-music').style.display = 'none';
}

function updateBar(){
  let bar = document.querySelector('.progress-bar');
  bar.style.width = Math.floor((music.currentTime / music.duration) * 100) + '%';
  let elapsedTime = document.querySelector('.time-start');
  elapsedTime.textContent = '0' + convertSegForMin(Math.floor(music.currentTime));  
}

function convertSegForMin(seconds){
  let fieldMinutes = Math.floor(seconds/60);
  let fieldSecond = seconds % 60;
  if(fieldSecond < 10){
    fieldSecond = '0' + fieldSecond;
  }
  return fieldMinutes + ':' + fieldSecond;
}

function initialMusic(index){
  music.setAttribute('src', songs[index].src);
  music.addEventListener('loadeddata', () => {
    nameMusic.textContent = songs[index].titulo;
    nameBand.textContent = songs[index].band;
    image.src = songs[index].cover;
    durationMusic.textContent = '0' + convertSegForMin(Math.floor(music.duration));
  });
}

function renderMusic(index){
  music.setAttribute('src', songs[index].src);
  music.addEventListener('loadeddata', () => {
    nameMusic.textContent = songs[index].titulo;
    nameBand.textContent = songs[index].band;
    image.src = songs[index].cover;
    durationMusic.textContent = '0' + convertSegForMin(Math.floor(music.duration));
    playMusic();
  });
}