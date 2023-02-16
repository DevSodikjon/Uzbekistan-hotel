const btn = document.querySelector(".forBtn");
const select = document.querySelector(".selectsmy");
const options = document.querySelectorAll(".options");
// const options = document.querySelectorAll(".allDiv");
let arr = [
  " ikkita alohida to'shakli ikki kishilik yotoq",
  "ikkita alohida to'shakli ikki kishilik yotoq",
  "Uchta alohida to'shakli uch kishilik yotoq",
];

for (let i = 1; i < arr.length; i++) {
  btn.textContent = arr[0];
  const selectOp = document.createElement("li");
  const img = document.createElement("img");
  const h4 = document.createElement("h4");
  img.src = "./img/x2.png";
  h4.textContent = arr[i];
  selectOp.append(h4);
  selectOp.append(h4);
  selectOp.append(img);
  // selectOp.append(div);
  // selectOp.textContent = arr[i];
  selectOp.classList.add("options");
  console.log(selectOp);
  select.append(selectOp);
  selectOp.addEventListener("click", () => {
    arr.unshift(selectOp.textContent);
    btn.textContent = selectOp.textContent;
    select.classList.remove("enable");
  });
}

btn.addEventListener("click", () => {
  select.classList.toggle("enable");
});
