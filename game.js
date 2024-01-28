let rockElement = document.querySelector("#rock");
let paperElement = document.querySelector("#paper");
let scissorsElement = document.querySelector("#siessor");
let results = document.querySelector("p");

let me = document.querySelector("#you");
let comp = document.querySelector("#com");
let meV = 1;
let compV = 1;

let rockValue = 1;
let paperValue = 2;
let scissorsValue = 3;

rockElement.addEventListener("click", (e) => {
  e.preventDefault();
  let compInp = Math.floor(Math.random() * 5);
  if (rockValue == compInp) {
    results.innerHTML = "The Match is Draw";
  } else if (rockValue > compInp) {
    results.innerHTML = "I am winner";
    me.innerHTML = `<h3>You: ${meV++}</h3>`;
  } else {
    results.innerHTML = "Computer is winner";
    comp.innerHTML = `<h3>Computer: ${compV++}</h3>`;
  }
  console.log(compInp);
});

paperElement.addEventListener("click", (e) => {
  e.preventDefault();
  let compInp = Math.floor(Math.random() * 5);
  if (paperValue == compInp) {
    results.innerHTML = "The Match is Draw";
  } else if (paperValue > compInp) {
    results.innerHTML = "I am winner";
    me.innerHTML = `<h3>You: ${meV++}</h3>`;
  } else {
    results.innerHTML = "Computer is winner";
    comp.innerHTML = `<h3>Computer: ${compV++}</h3>`;
  }
  console.log(compInp);
});
scissorsElement.addEventListener("click", (e) => {
  e.preventDefault();
  let compInp = Math.floor(Math.random() * 5);
  if (scissorsValue == compInp) {
    results.innerHTML = "The Match is Draw";
  } else if (scissorsValue > compInp) {
    results.innerHTML = "I am winner";
    me.innerHTML = `<h3>You: ${meV++}</h3>`;
  } else {
    results.innerHTML = "Computer is winner";
    comp.innerHTML = `<h3>Computer: ${compV++}</h3>`;
  }
  console.log(compInp);
});
