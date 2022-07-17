let currentTime = 0;
let endTime = 0;
let title = ""
let singer = ""
let isPlay = false
let audio = document.getElementsByClassName("player")[0]
let playButton = document.getElementsByClassName("play")[0]
let processBar = document.getElementsByClassName("process-bar")[0]
let cover = document.getElementsByClassName("cover")[0]
let curBar = document.getElementsByClassName("cur")[0]
let processBtn = document.getElementsByClassName("process-btn")[0]
let timeDom = document.getElementsByClassName("time")[0]
let titleDom = document.getElementsByClassName("title")
let singerDom = document.getElementsByClassName("singer")
function audioInit() {
  endTime = 314
  title = "ワンダーラスト"
  singer = "sasakure.UK"
}
function play() {
  isPlay = true
  audio.play()
  cover.style.animationPlayState = "running";
  playButton.src = "./static/stop.svg"
}
function pause() {
  isPlay = false
  audio.pause()
  cover.style.animationPlayState = "paused";
  console.log(playButton)
  playButton.src = "./static/play.svg"
}
playButton.addEventListener("click", () => {
  if (isPlay) {
    pause()
  } else {
    play()
  }
})
audioInit()
