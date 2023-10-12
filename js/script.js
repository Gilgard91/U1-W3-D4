const numeriTabellone = [];
const tabellone = document.getElementById("tombola-container");
const createNumbers = function () {
  

  for (let i = 1; i < 91; i++) {
    numeriTabellone.push(i);
    const numCellDiv = document.createElement("h3");
    numCellDiv.classList.add("numero");

    const numCellContent = document.createElement("h3");
    numCellContent.innerText = i;

    numCellDiv.appendChild(numCellContent);
    tabellone.appendChild(numCellDiv);
  }
  console.log(numeriTabellone);
};

window.onload = () => {
  createNumbers();
};

const button = document.getElementById("numButton");

button.onclick = function randomNumber() {
  const randomized = Math.floor(Math.random() * numeriTabellone.length);
  const randomNum = tabellone.children[randomized];
  randomNum.classList.add("selected");
};
console.log(numeriTabellone[randomized]);
