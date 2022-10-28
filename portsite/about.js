// DECLARING VARIABLES
const wrapper = document.querySelector("#tiles");
const content = document.querySelectorAll(".about-section");
const colors = ["#111", "#00807C", "#1626d0", "#6a1616", "#2E4C46", "#fff"];
let count = 0;
let columns = 0,
  rows = 0;

// CLICK EVENT HANDLER
const handleOnClick = (index) => {
  count < content.length - 1 ? count++ : (count = 0);
  console.log(count);
  anime({
    targets: ".tile",
    backgroundColor: colors[count % (colors.length - 1)],
    delay: anime.stagger(20, {
      grid: [columns, rows],
      from: index,
    }),
  });
  content.forEach((e) => {
    e.classList.remove("hidden");
    e.style.opacity = "0";
  });
  if (count < content.length) {
    content[count].style.opacity = "100";
  }
};

// CREATE TILE
const createTile = (index) => {
  const tile = document.createElement("div");
  tile.classList.add("tile");
  tile.onclick = (e) => handleOnClick(index);
  return tile;
};

// CREATE ALL TILES
const createTiles = (quantity) => {
  Array.from(Array(quantity)).map((tile, index) => {
    wrapper.appendChild(createTile(index));
  });
};

// PUT TILES IN GRID
const createGrid = () => {
  wrapper.innerHTML = "";

  columns = Math.floor(document.body.clientWidth / 35);
  rows = Math.floor(document.body.clientHeight / 35);

  wrapper.style.setProperty("--columns", columns);
  wrapper.style.setProperty("--rows", rows);

  createTiles(columns * rows);
};

createGrid();

// WINDOW RESIZE
window.onresize = () => createGrid();
