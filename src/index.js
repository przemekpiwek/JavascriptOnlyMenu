import { BrunchMenu } from "./brunch";
import { Dinner } from "./dinner";

const mainDiv = document.querySelector("#content");
const header = document.createElement("div");
const menuDiv = document.createElement("div");
const menuDivLeft = document.createElement("div");
const menuDivRight = document.createElement("div");
const options = document.createElement("div");
const menuList = document.createElement("ul");
const brunch = document.createElement("li");
const dinner = document.createElement("li");
const title = document.createElement("h1");

header.id = "header";
header.style.height = "100px";
header.style.display = "flex";
header.style.justifyContent = "left";
header.style.alignItems = "center";
header.style.marginLeft = "20px";
header.style.color = "white";
header.style.fontSize = "10px";
header.style.marginBottom = "100px";

menuDivLeft.id = "menuDivLeft";
menuDivRight.id = "menuDivRight";
menuDiv.id = "menu";
menuDiv.style.display = "flex";
menuDivLeft.style.flex = "1";
menuDivLeft.style.justifyContent = "center";
menuDivRight.style.flex = "1";
menuDivLeft.style.display = "flex";
menuDivRight.style.display = "flex";
menuDivRight.style.justifyContent = "center";
menuDivRight.style.alignItems = "center";

//creating menu titles
menuList.id = "menuList";
menuList.style.display = "flex";
menuList.style.justifyContent = "center";
menuList.style.flexDirection = "column";
options.setAttribute("display", "flex");
options.setAttribute("flex-direction", "column");
title.innerHTML = "Estiatorio Milos";
title.style.paddingLeft = "50px";
title.style.fontSize = "2em";
brunch.innerText = "Brunch";
dinner.innerText = "Dinner";

header.appendChild(title);
menuList.appendChild(brunch);
menuList.appendChild(dinner);
menuDivLeft.appendChild(menuList);

menuDiv.appendChild(menuDivLeft);
menuDiv.appendChild(menuDivRight);

mainDiv.appendChild(header);
mainDiv.appendChild(menuDiv);

brunch.addEventListener("mouseover", populateBrunch);
dinner.addEventListener("mouseover", populateDinner);

const clearContent = () => {
  const content = document.querySelector("#menuDivRight > div");
  if (content) {
    menuDivRight.removeChild(content);
  } else {
    return;
  }
};

function populateBrunch() {
  clearContent();
  BrunchMenu();
  brunch.style.color = "#182c41";
  dinner.style.color = "white";
}
function populateDinner() {
  clearContent();
  Dinner();
  dinner.style.color = "#182c41";
  brunch.style.color = "white";
}
