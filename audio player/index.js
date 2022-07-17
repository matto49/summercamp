let currentTime = 0;
let endTime = 0;
let timeText = ""
let title = ""
let singer = ""
let isPlay = false
let lyricLine = [];
let lyricChange = 0;
let curLyric = 0;
let lrcArray = [];
let processBtnState = 0;
let originX = 0;
let lastActiveLyric = 0;
let lastCurrentLyric = 0;
let audio = document.getElementsByClassName("player")[0]
let playButton = document.getElementsByClassName("play")[0]
let processBar = document.getElementsByClassName("process-bar")[0]
let cover = document.getElementsByClassName("cover")[0]
let lyricDOM = document.getElementsByClassName("lyric")[0]
let rdyBar = document.getElementsByClassName("rdy")[0]
let curBar = document.getElementsByClassName("cur")[0]
let processBtn = document.getElementsByClassName("process-btn")[0]
let timeDOM = document.getElementsByClassName("time")[0]
let titleDOM = document.getElementsByClassName("title")
let singerDOM = document.getElementsByClassName("singer")
playButton.addEventListener("click", () => {
  if (isPlay) {
    pause()
  } else {
    play()
  }
})
audioInit()
processBtnInit(processBtn)
function audioInit() {
  // 不播放一下拿不到duration
  endTime = 244.924082
  title = "ワンダーラスト"
  singer = "sasakure.UK"
  setInterval(() => {
    if (isPlay) updateProcess()
  }, 100)
}
function play() {
  isPlay = true
  audio.play()
  console.log(audio.duration)
  cover.style.animationPlayState = "running";
  playButton.src = "./static/stop.svg"
}
function pause() {
  isPlay = false
  audio.pause()
  cover.style.animationPlayState = "paused";
  playButton.src = "./static/play.svg"
}
function processBtnInit(btn) {
  function moveFun(e) {
    const totalWidth = processBar.clientWidth
    let percent, moveX, newWidth;
    e.preventDefault();
    if (processBtnState) {
      moveX = (e.clientX || e.touches[0].clientX) - originX;
      newWidth = curBar.clientWidth + moveX;
      percent = newWidth / totalWidth;
      curBar.style.width = newWidth + "px"
      currentTimeText = (validateTime(percent * endTime / 60) + ":" + validateTime(percent * endTime % 60));
      originX = (e.clientX || e.touches[0].clientX);
    }
  }
  function startFun(e) {
    processBtnState = 1;
    originX = (e.clientX || e.touches[0].clientX);
  }
  function endFun() {
    if (processBtnState) {
      audio.currentTime = curBar.clientWidth / processBar.clientWidth * endTime;
      processBtnState = 0;
      updateProcess();
    }
  };
  btn.addEventListener('mousedown', startFun);
  document.body.addEventListener('mouseup', endFun);
  processBar.addEventListener('mousemove', moveFun);
}
function validateTime(number) {
  var value = (number > 10 ? number + '' : '0' + number).substring(0, 2);
  return isNaN(value) ? '00' : value;
}
function updateProcess() {
  let buffer = audio.buffered
  const bufferTime = buffer.length > 0 ? buffer.end(buffer.length - 1) : 0
  let currentTime = audio.currentTime
  timeDOM.textContent = validateTime(currentTime / 60) + ":" + validateTime(currentTime % 60) + "/" + (validateTime(endTime / 60) + ":" + validateTime(endTime % 60))
  curBar.style.width = bufferTime / endTime * 100 + '%';
  if (!processBtnState) {
    curBar.style.width = currentTime / endTime * 100 + '%';
    timeDOM.textContent = validateTime(currentTime / 60) + ":" + validateTime(currentTime % 60) + "/" + (validateTime(endTime / 60) + ":" + validateTime(endTime % 60))
  }
  for(let i = 0;i < lrcArray.length;i++) {

  }
    // console.log(parseTime(item.offset))
    // if (index === 0 && currentTime < parseTime(item.offset)) {
    //   lrcArray = index;
    //   lyricDOM.scrollTop = 60 * index
    //   return true
    // }
    // } else if (parseTime(Arr[index - 1].offset) < currentTime && currentTime < parseTime(item.offset)) {
    //   lrcArray = index;
    //   console.log(lrcArray)
    //   lyricDOM.scrollTop = 60 * index
    //   return true
    // }
  // })
}
const lyric = "[00:49.98]ふと旅に出たくなるように　ヒトは皆\n[00:58.24]眠る場所を求めるものだと　君は云うけど―。\n[01:06.70]僕が\"終末\"を知ったときには　此処はもう\n[01:15.31]暖かくも寒くもない速度で落ちていた\n[01:23.02]\n[01:34.34]\"カミサマ\"が　もしも居たとしても\n[01:42.19]大きな空　溢れるほどの虹　架けてくれなくても良い\n[01:50.81]『唯一つ　願いをかけるとしたら…？』\n[01:57.93]君のもとへ\"うた\"を届けたい\n[02:01.68]メグル　メグル　最後の　廻音（メロディ）\n[02:07.68]君が笑ってくれるのなら　僕は\n[02:12.80]消えてしまっても　構わないから\n[02:16.25]君が涙の海に身を投げても\n[02:21.21]握りしめた手　離さないから\n[02:24.69]白い嘘だらけの世界なんてもう\n[02:29.40]消えてしまっても　構わないから\n[02:33.01]『旅の終わりの夢に見た存在（もの）に　僕は－\n[02:39.41]なれますように　なれますように』\n[02:41.92]\n[03:21.46]オワラナイ　ウタヲ　ウタオウ\n[03:25.65]僕ガ　終ワッテ　シマウ　マエニ　…\n[03:29.78]オワラナイ　ウタヲ　ウタオウ\n[03:34.00]僕ガ　終ワッテ　シマウ　マエニ　…\n[03:38.23]オワラナイ　ウタヲ　ウタオウ\n[03:42.52]僕ガ　終ワッテ　シマウ　マエニ　…\n[03:46.45]オワラナイ　ウタヲ　ウタオウ\n[03:50.64]僕ガ　終ワッテ　シマウ　マエニ　…\n[03:54.91]オワラナイ　ウタヲ　ウタオウ\n[03:59.04]僕ガ　終ワッ　…\n[04:01.73]\n"
const tlyric = "[00:49.98]就像突然想要去旅行  每个人都会\n[00:58.24]追求自己沉睡的地方  你是这么说的 但是\n[01:06.70]当我知道什么是“终结”时  这里也早已\n[01:15.31]用一种不冷不热的速度坠落\n[01:34.34]“神明”如果存在的话\n[01:42.19]那个把广大天空  几乎占满的彩虹  不放上去也无所谓\n[01:50.81]『那如果  能许下一个愿望的话…？』\n[01:57.93]我想将歌传达给你\n[02:01.68]巡回  巡游  最后的  巡音（旋律）\n[02:07.68]只要你会露出笑容的话  那我\n[02:12.80]就算消失了  也没有关系\n[02:16.25]就算你投身泪之海\n[02:21.21]我也决不会放弃  紧握住的手\n[02:24.69]这个充斥白色谎言的世界\n[02:29.40]就算消失了  也没有关系\n[02:33.01]『在旅行结束的梦中所看到的存在  我——\n[02:39.41]希望能变成那样  希望能变成那样』\n[03:21.46]唱出  不会结束的  歌谣吧\n[03:25.65]在  我  终结  之前  …\n[03:29.78]唱出  不会结束的  歌谣吧\n[03:34.00]在  我  终结  之前  …\n[03:38.23]唱出  不会结束的  歌谣吧\n[03:42.52]在  我  终结  之前  …\n[03:46.45]唱出  不会结束的  歌谣吧\n[03:50.64]在  我  终结  之前  …\n[03:54.91]唱出  不会结束的  歌谣吧\n[03:59.04]在  我  终  …\n"
parseLrc(lyric, tlyric)
function parseLrc(lyric, tLyric) {
  let arr = lyric.split("\n");
  // let tArr = tLyric.split("\n");
  // let tLrcArray = [];
  let html = "";
  for (let i = 0; i < arr.length; i++) {
    const tempArray = arr[i].split("]");
    if (tempArray.length > 1) {
      const offset = tempArray[0].substring(1, tempArray[0].length - 1);
      const text = tempArray[1];
      lrcArray.push({ "offset": offset, "text": text });
      if (text != "") {
        html += "<p data-time=" + parseTime(offset).toFixed(1) + " class='lyric-content'>" + text + "</p>";
      }
      // if (tLyric) {
      //   console.log(arr)
      //   console.log(tArr)
      //   const tTempArray = tArr[i].split("]")
      //   const tText = tTempArray[1];
      //   tLrcArray.push({ "offset": offset, "text": text });
      //   //去掉内容为空的数据
      //   if (tText != "") {
      //     html += "<p time=" + parseTime(offset).toFixed(1) + " class='translation'>" + tText + "</p>";
      //   }
      // }
    }
  }
  lyricDOM.innerHTML += html;
  lyricLine = document.getElementsByClassName("lyric-content")
}
function parseTime(time) {
  var tl = time.split(":");
  switch (tl.length) {
    case 1:
      return parseFloat(tl[0]);
    case 2:
      return parseFloat(tl[0]) * 60 + parseFloat(tl[1]);
    case 3:
      return parseFloat(tl[0]) * 3600 + parseFloat(tl[1]) * 60 + parseFloat(tl[2]);
  }
}
function scrollLyric(e) {
  const scrollHeight = lyricDOM.scrollTop - 32
  const lineHeight = 36.8
  curLyric = Math.floor(scrollHeight / lineHeight + 1)
  lyricLine[curLyric].classList.add("active")
  //不知道为啥lyricLine不给用数组方法
  if (lastActiveLyric !== curLyric) lyricLine[lastActiveLyric].classList.remove("active")
  lastActiveLyric = curLyric
}
function shiftLyric() {
  let currentTime = parseTime(lrcArray[curLyric].offset)
  audio.currentTime = currentTime
  timeDOM.textContent = (validateTime(currentTime / 60) + ":" + validateTime(currentTime % 60)) + "/" + (validateTime(endTime / 60) + ":" + validateTime(endTime % 60))
  curBar.style.width = currentTime / endTime * 100 + '%';
  if (lastCurrentLyric !== curLyric) {
    lyricLine[lastCurrentLyric].classList.remove("current")
    lyricLine[curLyric].classList.remove("active")
    lyricLine[curLyric].classList.add("current")
  }
  lastCurrentLyric = curLyric
}
lyricDOM.addEventListener("scroll", scrollLyric)
lyricDOM.addEventListener("click", shiftLyric)
