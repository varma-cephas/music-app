const audio_player = document.querySelector(".audio-player");
const play_circle = document.querySelector(".play-circle");

const play_skip_forward = document.querySelector(".play-skip-forward");
const play_skip_back = document.querySelector(".play-skip-back");

const pause_icon_container = document.querySelector(".pause-icon-container");
const pause_circle = document.querySelector(".pause-circle");

const artist = document.querySelector(".artist");
const song_name = document.querySelector(".song-name")

const play_icon_container = document.querySelector(".play-icon-container");
let music_arr = ["01_Vries_Lose_Traction.mp3","02_Shawn_Pink_Type_Writer.mp3", "03_A_Ura_Lu_No_Reply.mp3", "04_Bax_Iv_Perspective.mp3", "05_Soft_Clouds_Falling_Behind.mp3"];
// let music_arr = ["assets/music/abc/01_Vries_Lose_Traction.mp3","assets/abc/music/02_Shawn_Pink_Type_Writer.mp3", "assets/music/abc/03_A_Ura_Lu_No_Reply.mp3", "assets/music/abc/04_Bax_Iv_Perspective.mp3", "assets/music/abc/05_Soft_Clouds_Falling_Behind.mp3"];

const music_player_duration = document.querySelector(".music-player-duration");

const music_seconds_consumed = document.querySelector(".music-seconds-consumed");
const music_minutes_consumed = document.querySelector(".music-minutes-consumed");

const music_minutes_remaining = document.querySelector(".music-minutes-remaining");
const music_seconds_remaining = document.querySelector(".music-seconds-remaining");

play_circle.addEventListener("click",()=>{
    audio_player.play();
    pause_icon_container.style.display = "block";
    play_icon_container.style.display = "none";
})

pause_circle.addEventListener("click",()=>{
    audio_player.pause();
    pause_icon_container.style.display = "none";
    play_icon_container.style.display = "block";
})
let keepVal = 0;

play_skip_forward.addEventListener("click",()=>{
    for(let x = 0; x < music_arr.length; x++){
        if(`${audio_player.src.split("/")[6]}` === music_arr[x]){
            if(`${audio_player.src.split("/")[6]}` === music_arr[5]){
                audio_player.setAttribute("src", `assets/music/${music_arr[0]}`)
                setTimeout(()=>{
                    music_minutes_remaining.textContent = Math.floor(audio_player.duration / 60);
                    if(Math.floor(audio_player.duration % 60) < 9){
                        music_seconds_remaining.textContent = Math.floor(audio_player.duration % 60) + '0';
                    }else{
                        music_seconds_remaining.textContent = Math.floor(audio_player.duration % 60);
                    }
                },2000)
            }else{
                keepVal++
                if(keepVal > 4){
                    keepVal = 0;
                }
                audio_player.setAttribute("src", `assets/music/${music_arr[keepVal]}`);
                audio_player.autoplay = true;
                pause_icon_container.style.display = "block";
                play_icon_container.style.display = "none";
                artist.textContent = `${audio_player.src.split("/")[6].split("_")[1]}`;
                song_name.textContent = `${audio_player.src.split("/")[6].split("_")[2]}`;
                setTimeout(()=>{
                    music_minutes_remaining.textContent = Math.floor(audio_player.duration / 60);
                    if(Math.floor(audio_player.duration % 60) < 9){
                        music_seconds_remaining.textContent = Math.floor(audio_player.duration % 60) + '0';
                    }else{
                        music_seconds_remaining.textContent = Math.floor(audio_player.duration % 60);
                    }
                },2000)
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
                audio_player.setAttribute("src", `assets/music/${music_arr[4]}`);
                setTimeout(()=>{
                    music_minutes_remaining.textContent = Math.floor(audio_player.duration / 60);
                },2000)
            }else{
                keepVal--
                if(keepVal === 0){
                    keepVal = 4;
                }
                audio_player.setAttribute("src", `assets/music/${music_arr[keepVal]}`);
                audio_player.autoplay = true;
                pause_icon_container.style.display = "block";
                play_icon_container.style.display = "none";
                artist.textContent =  audio_player.src.split("/")[6].split("_")[1];
                song_name.textContent = `${audio_player.src.split("/")[6].split("_")[2]}`;
                setTimeout(()=>{
                    music_minutes_remaining.textContent = Math.floor(audio_player.duration / 60);
                    if(Math.floor(audio_player.duration % 60) < 9){
                        music_seconds_remaining.textContent = Math.floor(audio_player.duration % 60) + '0';
                    }else{
                        music_seconds_remaining.textContent = Math.floor(audio_player.duration % 60);
                    }
                },2000)
                break;
            }
        }
    }
    // audio_player.setAttribute("src", music_arr[0]);
    // console.log(`${audio_player.src.split("/")[3] + '/' + audio_player.src.split("/")[4] + '/' + audio_player.src.split("/")[5]}`)
})


artist.textContent = `${audio_player.src.split("/")[6].split("_")[1]}`;
song_name.textContent = `${`${audio_player.src.split("/")[6].split("_")[2] + " "+ audio_player.src.split("/")[6].split("_")[3].split(".")[0]}`}`;

setTimeout(()=>{
    music_minutes_remaining.textContent = Math.floor(audio_player.duration / 60);
    if(Math.floor(audio_player.duration % 60) < 9){
        music_seconds_remaining.textContent = Math.floor(audio_player.duration % 60) + '0';
    }else{
        music_seconds_remaining.textContent = Math.floor(audio_player.duration % 60);
    }
},2000)

audio_player.addEventListener("loadedmetadata", ()=>{
    music_player_duration.max = audio_player.duration;
})

audio_player.addEventListener("timeupdate", ()=>{
    music_player_duration.value = audio_player.currentTime;
    if(Math.floor(audio_player.currentTime) <= 9){
        music_seconds_consumed.textContent = `0${Math.floor(audio_player.currentTime)}`;
    }else{
        music_seconds_consumed.textContent = Math.floor(audio_player.currentTime);
    }
    if(Math.floor(audio_player.currentTime) === 60){
        music_minutes_consumed.textContent = 1;
    }else if(Math.floor(audio_player.currentTime) === 120){
        music_minutes_consumed.textContent = 2;
    }else if(Math.floor(audio_player.currentTime) === 180){
        music_minutes_consumed.textContent = 3;
    }
})

music_player_duration.addEventListener("change",()=>{
    audio_player.currentTime = music_player_duration.value;
})

