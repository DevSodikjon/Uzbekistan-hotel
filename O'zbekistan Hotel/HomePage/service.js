const allServiceAnchor = document.querySelector(".allService");
const types_block = document.querySelector(".types_block");

// All Services

allServiceAnchor.addEventListener(
  "click",
  (toggle = (e) => {
    e.preventDefault()
    if (types_block.style.display === "none") {
      types_block.style.display = "flex";
      allServiceAnchor.textContent = "Kamroq xizmat turlarini ko'rsatish";
    } else {
      types_block.style.display = "none";
      allServiceAnchor.textContent = "Barcha xizmat turlarini ko'rsatish";
    }
  })
);

toggle();
