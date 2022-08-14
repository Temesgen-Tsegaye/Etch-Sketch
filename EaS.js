let container = document.getElementById("container");
let gridNumberReciver = document.getElementById("gridNumberReciver");
let hoveringButton = document.getElementById("hoverChanging");
let randButton = document.getElementById("randomButton");
let erase = document.getElementById("erase");
let resetButton = document.getElementById("reset");

//function to calculate child divs width
function widthOfDiv(numberOfGrid) {
  let width = container.offsetWidth;

  return width / numberOfGrid;
}

//function to calculate height of child divs
function heightOfDiv(numberOfGrid) {
  let height = container.offsetHeight;

  return height / numberOfGrid;
}

//function to create divs and append them to the container
function createAndAppendDivs(numberOfGrid = 16) {
  let childDivHeight = heightOfDiv(numberOfGrid);
  let childDivWidth = widthOfDiv(numberOfGrid);
  let arrayOfDiv = new Array(numberOfGrid * numberOfGrid);

  for (i = 0; i < numberOfGrid * numberOfGrid; i++) {
    arrayOfDiv[i] = document.createElement("div");
  }
  for (i = 0; i < numberOfGrid * numberOfGrid; i++) {
    container.appendChild(arrayOfDiv[i]);
  }
  for (i = 0; i < numberOfGrid * numberOfGrid; i++) {
    arrayOfDiv[i].setAttribute(
      "style",
      `width:${childDivWidth}px;height:${childDivHeight}px; border-style:solid; border-color:white`
    );
  }

  return arrayOfDiv;
}

//function to append created divs to a container
function appendChildd(numberOfGrid) {
  let apenddivs = creatingDivs(numberOfGrid);
}

function main() {
  gridNumberReciver.addEventListener("input", function () {
    while (container.hasChildNodes()) {
      //loop remove created divs before creating other size
      container.removeChild(container.lastChild);
    }
    numberOfGrid = gridNumberReciver.value;

    createAndAppendDivs(numberOfGrid);
  });
}

function blackColoring() {
  hoveringButton.addEventListener("click", function () {
    container.addEventListener("mouseover", function (e) {
      if (e.target.matches("div")) {
        e.target.style.backgroundColor = "black";
      }
    });
  });
}
function randomNumberGenarator() {
  let randomNumber1 = Math.floor(Math.random() * 256);
  let randomNumber2 = Math.floor(Math.random() * 256);
  let randomNumber3 = Math.floor(Math.random() * 256);
  return `rgb(${randomNumber1},${randomNumber2},${randomNumber3}`;
}
function randomColorGenarator() {
  randButton.addEventListener("click", function () {
    container.addEventListener("mouseover", function (e) {
      if (e.target.matches("div")) {
        e.target.style.backgroundColor = randomNumberGenarator();
      }
    });
  });
}
function eraseCells() {
  erase.addEventListener("click", function () {
    container.addEventListener("mouseover", function (e) {
      if (e.target.matches("div")) {
        e.target.style.backgroundColor = "beige";
      }
    });
  });
}
function reseting() {
  resetButton.addEventListener("click", function () {
    document.location.reload();
    
  });
}
main();
blackColoring();
randomColorGenarator();
eraseCells();
reseting();
createAndAppendDivs();

