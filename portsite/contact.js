// CALLING ELEMENTS
const background = document.querySelector(".background");
const row = document.querySelector(".rows");

// ARRAYS
const icons = [
  '<i class="icon fa-solid fa-desktop"></i>',
  '<i class="icon fa-solid fa-headphones"></i>',
  '<i class="icon fa-solid fa-paperclip"></i>',
  '<i class="icon fa-solid fa-computer-mouse"></i>',
  '<i class="icon fa-solid fa-mug-hot"></i>',
  '<i class="icon fa-solid fa-power-off"></i>',
  '<i class="icon fa-brands fa-stack-overflow"></i>',
  '<i class="icon fa-solid fa-heart"></i>',
  '<i class="icon fa-solid fa-code"></i>',
  '<i class="icon fa-solid fa-flask"></i>',
  '<i class="icon fa-solid fa-sun"></i>',
  '<i class="icon fa-solid fa-moon"></i>',
  '<i class="icon fa-solid fa-motorcycle"></i>',
];

const createIcons = () => {
  for (let i = 0; i < icons.length; i++) {
    row.innerHTML += icons[i];
  }
};

for (let i = 0; i < 10; i++) {
  createIcons();
}
for (let i = 0; i < 25; i++) {
  let clone = row.cloneNode(true);
  row.after(clone);
}
