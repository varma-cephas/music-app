const audio_player = document.querySelector(".audio-player");
const play_circle = document.querySelector(".play-circle");

const play_skip_forward = document.querySelector(".play-skip-forward");
const play_skip_back = document.querySelector(".play-skip-back");

const pause_icon_container = document.querySelector(".pause-icon-container");
const pause_circle = document.querySelector(".pause-circle");

const artist = document.querySelector(".artist");
const song_name = document.querySelector(".song-name")

const play_icon_container = document.querySelector(".play-icon-container");
let music_arr = ["assets/music/01_Vries_Lose_Traction.mp3","assets/music/02_Shawn_Pink_Type_Writer.mp3", "assets/music/03_A_Ura_Lu_No_Reply.mp3", "assets/music/04_Bax_Iv_Perspective.mp3", "assets/music/05_Soft_Clouds_Falling_Behind.mp3"];

// const music_player_duration = document.querySelector(".music-player-duration");

play_circle.addEventListener("click",()=>{
    audio_player.play();
    pause_icon_container.classList.toggle("showPauseButton")
    play_icon_container.classList.toggle("hidePlayButton")
})

pause_circle.addEventListener("click",()=>{
    audio_player.pause();
    play_icon_container.classList.toggle("hidePlayButton")
    pause_icon_container.classList.toggle("showPauseButton")
})
let keepVal = 0;

play_skip_forward.addEventListener("click",()=>{
    for(let x = 0; x < music_arr.length; x++){
        if(`${audio_player.src.split("/")[6]}` === music_arr[x]){
            if(`${audio_player.src.split("/")[6]}` === music_arr[5]){
                audio_player.setAttribute("src", music_arr[0])
            }else{
                keepVal++
                if(keepVal > 4){
                    keepVal = 0;
                }
                console.log('here')
                audio_player.setAttribute("src", music_arr[keepVal]);
                audio_player.autoplay = true;
                artist.textContent = `${audio_player.src.split("/")[5].split("_")[1]}`;
                song_name.textContent = `${audio_player.src.split("/")[6].split("_")[2]}`;
                break;
            }
        }
    }
    // audio_player.setAttribute("src", music_arr[0]);
    // console.log(`${audio_player.src.split("/")[3] + '/' + audio_player.src.split("/")[4] + '/' + audio_player.src.split("/")[5]}`)
})


play_skip_back.addEventListener("click", ()=>{
    for(let x = 0; x < music_arr.length; x++){
        if(`${audio_player.src.split("/")[6]}` === music_arr[x]){
            if(`${audio_player.src.split("/")[6]}` === music_arr[0]){
                audio_player.setAttribute("src", music_arr[music_arr.length]);
            }else{
                keepVal--
                if(keepVal === 0){
                    keepVal = 4;
                }
                console.log('heresfdd')
                audio_player.setAttribute("src", music_arr[keepVal]);
                audio_player.autoplay = true;
                artist.textContent =  audio_player.src.split("/")[6].split("_")[1];
                song_name.textContent = `${audio_player.src.split("/")[6].split("_")[2]}`;
                break;
            }
        }
    }
    // audio_player.setAttribute("src", music_arr[0]);
    // console.log(`${audio_player.src.split("/")[3] + '/' + audio_player.src.split("/")[4] + '/' + audio_player.src.split("/")[5]}`)
})


artist.textContent = `${audio_player.src.split("/")[6].split("_")[1]}`;
song_name.textContent = `${`${audio_player.src.split("/")[6].split("_")[2] + " "+ audio_player.src.split("/")[6].split("_")[3].split(".")[0]}`}`;

// music_player_duration.addEventListener("change",()=>{
//     // music_player_duration.max = audio_player.duration;
// })

