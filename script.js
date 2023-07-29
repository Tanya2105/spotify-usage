console.log("Welcome To Spotify");
let songIndex =0;
let audioElement = new Audio ('1.mp3');
let masterplay = document.getElementById('masterplay');
let myProgressBar=document.getElementById('MyProgressBar')
let gif=document.getElementById('gif')
let masterSongName = document.getElementById('masterSongName');
let songItem=Array.from(document.getElementsByClassName('songItem'));
let songs=[
    {songname:"Maan meri Jaan",filePath:" 1.mp3",coverPath:"c1.jpg"},
    {songname:"Bedardaya",filePath:" 2.mp3",coverPath:"c2.jpg"},
    {songname:"Obsessed",filePath:"3.mp3",coverPath:"c3.jpg"},
]
songItem.forEach((element,i)=>{
    

   element.getElementsByTagName("img")[0].src=songs[i].coverPath;
   element.getElementsByClassName("songname")[0].innerText = songs[i].songname; 
})




//audioElement.play();
//handle play/pause click
masterplay.addEventListener('click', ()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();       
        masterplay.classList.remove('fa-play-circle');
        masterplay.classList.add('fa-pause-circle');
        gif.style.opacity = 1;
    }
    else{
        audioElement.pause();
        masterplay.classList.remove('fa-pause-circle');
        masterplay.classList.add('fa-regular fa-circle-play');
        gif.style.opacity = 0;
    }

})



//listen to events
audioElement.addEventListener('timeupdate',()=>{
    console.log('timeupdate');
    //update seekbar
    progress=parseInt((audioElement.currentTime/audioElement.duration)*100)
    console.log(progress)
    myProgressBar.value=progress;

}
)

myProgressBar.addEventListener("change",()=>{
    audioElement.currentTime=myProgressBar.value*audioElement.duration/100;
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
        audioElement.src = `${songIndex+1}.mp3`;
        masterSongName.innerText = songs[songIndex].songname;
        audioElement.play();
        gif.style.opacity = 1;
        masterplay.classList.remove('fa-play-circle');
        masterplay.classList.add('fa-pause-circle');
        

    })
})
document.getElementById('next').addEventListener('click',()=>{
    if(songIndex>=2){
        songIndex=0
    }
    else{
        songIndex +=1
    }
    audioElement.src = `${songIndex+1}.mp3`;
        masterSongName.innerText = songs[songIndex].songname;
        audioElement.play();
        gif.style.opacity = 1;
        masterplay.classList.remove('fa-play-circle');
        masterplay.classList.add('fa-pause-circle');
})
document.getElementById('previous').addEventListener('click',()=>{
    if(songIndex<=0){
        songIndex=0
    }
    else{
        songIndex -=1
    }
    audioElement.src = `${songIndex+1}.mp3`;
        masterSongName.innerText = songs[songIndex].songname;
        audioElement.play();
        gif.style.opacity = 1;
        masterplay.classList.remove('fa-play-circle');
        masterplay.classList.add('fa-pause-circle');

})


