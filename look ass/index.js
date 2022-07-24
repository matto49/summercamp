let drawerShow = false
let modalContentShow = false
let videoIsPause = false
let floatBarItemIsClicked = false
const floatNav = document.querySelector(".float-navbar")
const heros = document.querySelectorAll(".hero")
window.addEventListener("scroll", navbarChange);
const heroImage = document.querySelector(".hero-image")
const heroName = document.querySelector(".hero-name")
const heroDetails = document.querySelector(".details")
const menu = document.querySelector(".menu")
const navbarDrawer = document.querySelector(".navbar-drawer")
const overlay = document.querySelector(".overlay")
const games = document.querySelector(".games")
const modalContent = document.querySelector(".modalContent")
const pause = document.querySelector(".pause")
const video = document.querySelector(".video")
const floatBarItem = document.querySelector(".float-navbar .block")
import { herosInfo } from './static/heroinfo.js'
// 顶部栏悬浮/吸顶
function navbarChange() {
  if (window.pageYOffset > 50) {
    floatNav.classList.add("fixed")
    floatNav.classList.remove("float")
  } else {
    floatNav.classList.remove("fixed")
    floatNav.classList.add("float")
  }
}
// 切换英雄
heros.forEach((ele, index) => {
  ele.addEventListener("mouseenter", () => {
    heroImage.style.backgroundImage = `url('https://d1u1mce87gyfbn.cloudfront.net/hero/${herosInfo[index].src}/full-portrait.png')`
    heroName.textContent = herosInfo[index].name
    heroDetails.textContent = herosInfo[index].description
  })
});
// 手机拉出侧边栏
menu.addEventListener("click", () => {
  navbarDrawer.classList.add("isopen")
  overlay.classList.remove("hidden")
  drawerShow = true;
})
games.addEventListener("click", () => {
  modalContent.classList.remove("hidden")
  overlay.classList.remove("hidden")
  modalContentShow = true
})
overlay.addEventListener("click", () => {
  if (drawerShow) {
    drawerShow = false
    navbarDrawer.classList.remove("isopen")
    overlay.classList.add("hidden")
  }
  if (modalContentShow) {
    modalContent.classList.add("hidden")
    overlay.classList.add("hidden")
  }
})
pause.addEventListener("click", () => {
  if (videoIsPause) {
    video.play()
    pause.classList.remove("is-pause")
    videoIsPause = false
  } else {
    video.pause()
    pause.classList.add("is-pause")
    videoIsPause = true
  }
})
floatBarItem.addEventListener("click", () => {
  if (floatBarItemIsClicked) {
    floatBarItem.classList.remove("clicked")
    floatBarItemIsClicked = false
  } else {
    floatBarItem.classList.add("clicked")
    floatBarItemIsClicked = true
  }
})
document.addEventListener("click", (e) => {
  if (floatBarItemIsClicked) {
    if (!getParentNodes(e.target).includes(floatBarItem)) {
      floatBarItem.classList.remove("clicked")
      floatBarItemIsClicked = false
    }
  }
})
// 确认是否点击了元素外的东西
function getParentNodes(node) {
  let nodeArr = []
  while (node) {
    nodeArr.push(node)
    node = node.parentNode
  }
  return nodeArr
}
