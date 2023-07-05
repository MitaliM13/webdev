console.log("Welcome to Spotify");

// Initialize the Variables
let songIndex = 0;
let audioElement = new Audio('songs/1.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let masterSongName = document.getElementById('masterSongName');
let songItems = Array.from(document.getElementsByClassName('songItem'));

let songs = [
    {songName: "Jump - (Demo ver)", filePath: "Song/1.mp3", coverPath: "covers/bts4.png"},
    {songName: "Bts - Young Love", filePath: "Song/2.mp3", coverPath: "covers/bts4.png"},
    {songName: "Boy in luv(Demo Ver)", filePath: "Song/3.mp3", coverPath: "covers/bts4.png"},
    {songName: "Quotation Mark", filePath: "Song/4.mp3", coverPath: "covers/bts4.png"},
    {songName: "I Need You(Demo Ver)", filePath: "Song/5.mp3", coverPath: "covers/bts4.png"},
    {songName: "Boyz With Fun ", filePath: "Song/6.mp3", coverPath: "covers/bts4.png"},
    {songName: "Tony Montana", filePath: "Song/7.mp3", coverPath: "covers/bts4.png"},
    {songName: "Young Forever", filePath: "Song/8.mp3", coverPath: "covers/bts4.png"},
    {songName: "Spring Day", filePath: "Song/9.mp3", coverPath: "covers/bts4.png"},
    {songName: "DNA", filePath: "Song/10.mp3", coverPath: "covers/bts4.png"},
    {songName: "Epiphany", filePath: "Song/11.mp3", coverPath: "covers/bts4.png"},
    {songName: "Seesaw", filePath: "songs/12.mp3", coverPath: "covers/bts4.png"},
    {songName: "Still With You", filePath: "Song/13.mp3", coverPath: "covers/bts4.png"},
]

songItems.forEach((element, i)=>{ 
    element.getElementsByTagName("img")[0].src = songs[i].coverPath; 
    element.getElementsByClassName("songName")[0].innerText = songs[i].songName; 
})
 

// Handle play/pause click
masterPlay.addEventListener('click', ()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity = 1;
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
        gif.style.opacity = 0;
    }
})
// Listen to Events
audioElement.addEventListener('timeupdate', ()=>{ 
    // Update Seekbar
    progress = parseInt((audioElement.currentTime/audioElement.duration)* 100); 
    myProgressBar.value = progress;
})

myProgressBar.addEventListener('change', ()=>{
    audioElement.currentTime = myProgressBar.value * audioElement.duration/100;
})

const makeAllPlays = ()=>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
        element.classList.remove('fa-pause-circle');
        element.classList.add('fa-play-circle');
    })
}

Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.addEventListener('click', (e)=>{ 
        makeAllPlays();
        songIndex = parseInt(e.target.id);
        e.target.classList.remove('fa-play-circle');
        e.target.classList.add('fa-pause-circle');
        audioElement.src = `songs/${songIndex+1}.mp3`;
        masterSongName.innerText = songs[songIndex].songName;
        audioElement.currentTime = 0;
        audioElement.play();
        gif.style.opacity = 1;
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
    })
})

document.getElementById('next').addEventListener('click', ()=>{
    if(songIndex>=9){
        songIndex = 0
    }
    else{
        songIndex += 1;
    }
    audioElement.src = `songs/${songIndex+1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');

})

document.getElementById('previous').addEventListener('click', ()=>{
    if(songIndex<=0){
        songIndex = 0
    }
    else{
        songIndex -= 1;
    }
    audioElement.src = `songs/${songIndex+1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
})