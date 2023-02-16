const form = document.querySelector(".form");
const value = document.querySelector(".value");
const x2 = document.querySelector(".x2");
const x3 = document.querySelector(".x3");
const myX2 = document.querySelector("#optionsx2");
// const options = document.querySelectorAll(".options");
const selectP = document.querySelectorAll(".selectP");
const optionP = document.querySelectorAll(".optionP");
const optionP2 = document.querySelectorAll(".optionP2");
const table_content = document.querySelector(".table_content");
const _selected = document.querySelectorAll("._selected");

// *** Rooms *** \\

value.addEventListener(
  "click",
  (showBads = () => {
    if (x2.classList.contains("_modal")) {
      x2.classList.remove("_modal");
    } else {
      x2.classList.add("_modal");
    }
  })
);

value.addEventListener(
  "click",
  (showBads2 = () => {
    if (x3.classList.contains("_modalx3")) {
      x3.classList.remove("_modalx3");
    } else {
      x3.classList.add("_modalx3");
    }
  })
);

function choosing() {
  console.log("fooo");
}

choosing();
showBads();
showBads2();


