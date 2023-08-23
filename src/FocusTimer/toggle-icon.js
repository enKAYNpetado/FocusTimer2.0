import * as sounds from "./sounds.js"
import state from "./state.js"

const buttonToggle = document.querySelector(".card")
const buttonToggle1 = document.querySelector(".card1")
const buttonToggle2 = document.querySelector(".card2")
const buttonToggle3 = document.querySelector(".card3")
const toggleColorIcon = document.querySelector(".black")
const toggleColorIcon1 = document.querySelector(".black1")
const toggleColorIcon2 = document.querySelector(".black2")
const toggleColorIcon3 = document.querySelector(".black3")
const toggleColorIconWhite = document.querySelector(".white")
const toggleColorIconWhite1 = document.querySelector(".white1")
const toggleColorIconWhite2 = document.querySelector(".white2")
const toggleColorIconWhite3 = document.querySelector(".white3")

buttonToggle.addEventListener("click", (event) => {
  buttonToggle1.classList.remove("blue")
  buttonToggle2.classList.remove("blue")
  buttonToggle3.classList.remove("blue")
  toggleColorIcon1.classList.remove("white")
  toggleColorIconWhite1.classList.add("white1")
  toggleColorIcon2.classList.remove("white")
  toggleColorIconWhite2.classList.add("white2")
  toggleColorIcon3.classList.remove("white")
  toggleColorIconWhite3.classList.add("white3")

  if (buttonToggle.classList.toggle("blue")) {
    sounds.forest.play()
    sounds.rain.pause()
    sounds.coffee.pause()
    sounds.fireplace.pause()
    toggleColorIcon.classList.add("white")
    toggleColorIconWhite.classList.remove("white")
  } else {
    sounds.forest.pause()
    toggleColorIcon.classList.remove("white")
    toggleColorIconWhite.classList.add("white")
  }
})

/*buttonToggle1.addEventListener("mouseover", function () {
  toggleColorIconWhite1.classList.remove("white1")
  toggleColorIcon1.classList.add("white")
})

buttonToggle1.addEventListener("mouseout", function () {
  toggleColorIconWhite1.classList.add("white1")
  toggleColorIcon1.classList.remove("white")
})*/

buttonToggle1.addEventListener("click", (event1) => {
  buttonToggle.classList.remove("blue")
  buttonToggle2.classList.remove("blue")
  buttonToggle3.classList.remove("blue")
  toggleColorIcon.classList.remove("white")
  toggleColorIconWhite.classList.add("white")
  toggleColorIcon2.classList.remove("white")
  toggleColorIconWhite2.classList.add("white2")
  toggleColorIcon3.classList.remove("white")
  toggleColorIconWhite3.classList.add("white3")

  if (buttonToggle1.classList.toggle("blue")) {
    sounds.rain.play()
    sounds.forest.pause()
    sounds.coffee.pause()
    sounds.fireplace.pause()
    toggleColorIcon1.classList.add("white")
    toggleColorIconWhite1.classList.remove("white1")
  } else {
    sounds.rain.pause()
    toggleColorIcon1.classList.remove("white")
    toggleColorIconWhite1.classList.add("white1")
  }
})

buttonToggle2.addEventListener("click", (event2) => {
  buttonToggle1.classList.remove("blue")
  buttonToggle.classList.remove("blue")
  buttonToggle3.classList.remove("blue")
  toggleColorIcon.classList.remove("white")
  toggleColorIconWhite.classList.add("white")
  toggleColorIcon1.classList.remove("white")
  toggleColorIconWhite1.classList.add("white1")
  toggleColorIcon3.classList.remove("white")
  toggleColorIconWhite3.classList.add("white3")

  if (buttonToggle2.classList.toggle("blue")) {
    sounds.coffee.play()
    sounds.rain.pause()
    sounds.forest.pause()
    sounds.fireplace.pause()
    toggleColorIcon2.classList.add("white")
    toggleColorIconWhite2.classList.remove("white2")
  } else {
    sounds.coffee.pause()
    toggleColorIcon2.classList.remove("white")
    toggleColorIconWhite2.classList.add("white2")
  }
})

buttonToggle3.addEventListener("click", (event3) => {
  buttonToggle1.classList.remove("blue")
  buttonToggle2.classList.remove("blue")
  buttonToggle.classList.remove("blue")
  toggleColorIcon.classList.remove("white")
  toggleColorIconWhite.classList.add("white")
  toggleColorIcon1.classList.remove("white")
  toggleColorIconWhite1.classList.add("white1")
  toggleColorIcon2.classList.remove("white")
  toggleColorIconWhite2.classList.add("white2")

  if (buttonToggle3.classList.toggle("blue")) {
    sounds.fireplace.play()
    sounds.rain.pause()
    sounds.forest.pause()
    sounds.coffee.pause()
    toggleColorIcon3.classList.add("white")
    toggleColorIconWhite3.classList.remove("white3")
  } else {
    sounds.fireplace.pause()
    toggleColorIcon3.classList.remove("white")
    toggleColorIconWhite3.classList.add("white3")
  }
})

/*
buttonToggle.addEventListener("mouseover", function () {
  toggleColorIconWhite.classList.remove("white")
  toggleColorIcon.classList.add("white")
})

buttonToggle.addEventListener("mouseout", function () {
  toggleColorIconWhite.classList.add("white")
  toggleColorIcon.classList.remove("white")
})
buttonToggle.addEventListener("mouseover", function () {
  toggleColorIconWhite.classList.remove("white")
  toggleColorIcon.classList.add("white")
})

buttonToggle.addEventListener("mouseout", function () {
  toggleColorIconWhite.classList.add("white")
  toggleColorIcon.classList.remove("white")
})*/
