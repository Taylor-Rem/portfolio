// BUTTONS
const checkBox = document.querySelectorAll(".unmute");
const button = document.querySelectorAll(".button");
const slider = document.querySelectorAll(".slider");

// SOUNDS
const audio = [
  (drumsOne = new Audio("audio/Drums1.wav")),
  (drumsTwo = new Audio("audio/Drums2.wav")),
  (drumsThree = new Audio("audio/Drums3.wav")),
  (bassOne = new Audio("audio/Bass1.wav")),
  (bassTwo = new Audio("audio/Bass2.wav")),
  (bassThree = new Audio("audio/Bass3.wav")),
  (pianoOne = new Audio("audio/Piano1.wav")),
  (pianoTwo = new Audio("audio/Piano2.wav")),
  (pianoThree = new Audio("audio/Piano3.wav")),
];

// PLAY AUDIO
const playAudio = () => {
  for (let i = 0; i < audio.length; i++) {
    audio[i].load();
    audio[i].play();
  }
};

// STOP AUDIO
const stopAudio = () => {
  for (let i = 0; i < audio.length; i++) {
    checkBox[i].checked = false;
    audio[i].pause();
    audio[i].currentTime = 0;
  }
  clearTimeout(timeout);
  counter = 0;
};

// CHECK MUTED
const checkMuted = () => {
  for (let i = 0; i < audio.length; i++) {
    if (checkBox[i].checked) {
      audio[i].muted = false;
    } else {
      audio[i].muted = true;
    }
  }
};

// CHANGE VOLUME
const volumeSliders = (num) => {
  for (let i = 0 + num * 3; i <= 2 + num * 3; i++) {
    audio[i].volume = slider[num].value;
  }
};
for (let i = 0; i < slider.length; i++) {
  volumeSliders(i);
  slider[i].addEventListener("mousemove", () => {
    volumeSliders(i);
  });
}

// COUNTER
let isPlaying = false;
let counter = 0;

// count up
doCounting = () => {
  if (counter === 0) {
    playAudio();
    checkMuted();
  } else if (counter % 4 === 0) {
    checkMuted();
  }
  counter <= 14 ? counter++ : (counter = 0);
  if (!isPlaying) counter = 0;
};
// loop counting
const startAudioLoop = () => {
  timeout = setTimeout(() => {
    doCounting();
    console.log(counter);
    startAudioLoop();
  }, 462);
};

// COLOR BUTTONS
const colorButton = () => {
  if (!isPlaying) {
    button[0].style.backgroundColor = "#fff";
    button[0].style.color = "#000";
    button[1].style.backgroundColor = "#710000";
    button[1].style.color = "#fff";
  } else {
    button[0].style.backgroundColor = "#710000";
    button[0].style.color = "#fff";
    button[1].style.backgroundColor = "#fff";
    button[1].style.color = "#000";
  }
};

// EVENT LISTENERS
// start button
button[0].addEventListener("click", () => {
  if (!isPlaying) {
    startAudioLoop();
    isPlaying = true;
  }
  colorButton();
});
// stop button
button[1].addEventListener("click", () => {
  isPlaying = false;
  stopAudio();
  colorButton();
});

// TEXT HOVER EFFECT
const musmac = document.querySelectorAll(".musmac");

for (let i = 0; i < musmac.length; i++) {
  musmac[i].addEventListener("mouseover", () => {
    musmac[i].style.cursor = "default";
    musmac[i].style.color = "#d25858";
    musmac[i].style.transition = "all .5s";
    musmac[i].style.transform = "translateY(-5px)";
  });
  musmac[i].addEventListener("mouseleave", () => {
    musmac[i].style.color = "#fff";
    musmac[i].style.transform = "translateY(0px)";
  });
}

// PARALLAX SCROLL EFFECT
const space = document.querySelector(".space");
const moon = document.querySelector(".moon");
const mountain = document.querySelector(".mountain");
const trees = document.querySelector(".trees");
const welcomeText = document.querySelector(".website-welcome");

window.addEventListener("scroll", () => {
  const value = window.scrollY;
  if (value <= 320) {
    trees.style.top = value * 1.5 + "px";
  }
  moon.style.top = value * -1 + "px";
  // moon.style.left = value * -0.5 + "px";
  // moon.style.rotate = value * -0.3 + "deg";
  if (value <= 240) {
    welcomeText.style.top = value * -2 + "px";
    space.style.top = value * 0.3 + "px";
  }
});
