const select22 = document.querySelector(".selecRoomNum");
const selecRoomNumNew = document.querySelector(".selecRoomNumNew");
const selecRoomNumOne = document.querySelector(".selecRoomNumOne");
const selecRoomNumSecond = document.querySelector(".selecRoomNumSecond");
const selecRoomNumThird = document.querySelector(".selecRoomNumThird");

const oneTable = document.querySelector(".oneTable");
const NewTable = document.querySelector(".NewTable");

// // console.log(select22);

// select22.forEach((el) => {
//   console.log(el.value);
//   onChange(el.value);
//   el.onchange = onChange;
//   function onChange(val) {
//     // commented
//     // let value = select22.value;
//     let value = el.options[el.selectedIndex].text;
//     // commented
//     // let text = select22.options[select22.selectedIndex].text;
//     console.log("value", value);
//     if (value > 0) {
//       oneTable.classList.add("blueBorder");
//     } else {
//       oneTable.classList.remove("blueBorder");
//     }
//   }
// });

// // select22.onchange = onChange;
// // commented

// // onChange();

// First \\

function onChange() {
  let value = select22.value;
  // let text = select22.options[select22.selectedIndex].text;
  // console.log(value, text);
  if (select22.value > 0) {
    oneTable.classList.add("blueBorder");
  } else {
    oneTable.classList.remove("blueBorder");
    // console.log("bbb");
  }
}
select22.onchange = onChange;

onChange();

// Second \\

function onChangeNew() {
  let value = selecRoomNumNew.value;
  let text = selecRoomNumNew.options[selecRoomNumNew.selectedIndex].text;
  console.log(value, text);
  if (selecRoomNumNew.value > 0) {
    oneTable.classList.add("blueBorderAgain");
  } else {
    oneTable.classList.remove("blueBorderAgain");
    console.log("bbagainb");
  }
}
selecRoomNumNew.onchange = onChangeNew;

onChangeNew();

// Third \\

function onChangeOne() {
  let value = selecRoomNumOne.value;
  let text = selecRoomNumOne.options[selecRoomNumOne.selectedIndex].text;
  // console.log(value, text);
  if (selecRoomNumOne.value > 0) {
    NewTable.classList.add("blueBorderAgain");
  } else {
    NewTable.classList.remove("blueBorderAgain");
    // console.log("bbagainb");
  }
}
selecRoomNumOne.onchange = onChangeOne;

onChangeOne();

// Fourth \\

function onChangeSecond() {
  let value = selecRoomNumSecond.value;
  let text = selecRoomNumSecond.options[selecRoomNumSecond.selectedIndex].text;
  // console.log(value, text);
  if (selecRoomNumSecond.value > 0) {
    NewTable.classList.add("blueBorderSecond");
  } else {
    NewTable.classList.remove("blueBorderSecond");
    // console.log("bbagainb");
  }
}
selecRoomNumSecond.onchange = onChangeSecond;

onChangeSecond();



// Fifth \\


function onChangeFivth() {
  let value = selecRoomNumThird.value;
  let text = selecRoomNumThird.options[selecRoomNumThird.selectedIndex].text;
  // console.log(value, text);
  if (selecRoomNumThird.value > 0) {
    NewTable.classList.add("blueBorderThird");
  } else {
    NewTable.classList.remove("blueBorderThird");
    // console.log("bbagainb");
  }
}
selecRoomNumThird.onchange = onChangeFivth;

onChangeFivth();