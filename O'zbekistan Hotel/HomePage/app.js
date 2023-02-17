const btn = document.querySelector(".forBtn");
const select = document.querySelector(".selectsmy");
const options = document.querySelectorAll(".options");
// const options = document.querySelectorAll(".allDiv");
let arr = [
  {
    title: " ikkita alohida to'shakli ikki kishilik yotoq",
    img: "./img/x2.png"
  },
  {
    title: " ikkita alohida to'shakli ikki kishilik yotoq",
    img: "./img/x2.png"
  },
  {
    title: "Uchta alohida to'shakli uch kishilik yotoq",
    img: "./img/x3.png"
  },
  
];

for (let i = 1; i < arr.length; i++) {
  const img1 = document.querySelector(".aDiv-child2");
  const p = document.querySelector(".aDiv-child");
  p.textContent = arr[0].title;
  img1.src = arr[0].img;

  const selectOp = document.createElement("li");
  const img = document.createElement("img");
  const h4 = document.createElement("h4");
  let imgSrc = arr[i].img;
  img.src = imgSrc;
  h4.textContent = arr[i].title;
  selectOp.append(h4);
  selectOp.append(h4);
  selectOp.append(img);
  selectOp.classList.add("options");
  // console.log(selectOp);
  select.append(selectOp);
  selectOp.addEventListener("click", () => {
    arr.pop();
    arr.unshift({ title: h4.textContent, img: imgSrc });
    p.textContent = arr[0].title;
    img1.src = arr[0].img;
    select.classList.remove("enable");
    console.log(arr);
  });
}

btn.addEventListener("click", () => {
  select.classList.toggle("enable");
});
