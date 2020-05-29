export function BrunchMenu() {
  const brunchDivRight = document.getElementById("menuDivRight");
  const brunchDiv = document.createElement("div");
  const brunchTable = document.createElement("div");
  brunchTable.classList.add("grid");
  brunchTable.style.gridTemplateColumns = "1fr 1fr";
  brunchTable.style.gridTemplateRows = "1fr 1fr 1fr";

  //menu item
  const brunchCell1 = document.createElement("div");
  const brunchCell1Dish = document.createElement("h1");
  const brunchCell1Price = document.createElement("h1");
  const brunchCell1Ingredients = document.createElement("h2");
  brunchCell1Price.classList.add("price");
  brunchCell1.classList.add("cell");

  brunchCell1Dish.innerText = "Grilled Octopus";
  brunchCell1Price.innerText = "32";
  brunchCell1Ingredients.innerText = "Capers, onions, Santorini fava";

  brunchCell1.appendChild(brunchCell1Dish);
  brunchCell1.appendChild(brunchCell1Price);
  brunchCell1.appendChild(brunchCell1Ingredients);
  brunchTable.appendChild(brunchCell1);
  brunchDiv.appendChild(brunchTable);
  brunchDivRight.appendChild(brunchDiv);

  //menu item
  const brunchCell2 = document.createElement("div");
  const brunchCell2Dish = document.createElement("h1");
  const brunchCell2Price = document.createElement("h1");
  const brunchCell2Ingredients = document.createElement("h2");
  brunchCell2Price.classList.add("price");
  brunchCell2.classList.add("cell");

  brunchCell2Dish.innerText = "Holland Peppers";
  brunchCell2Price.innerText = "16";
  brunchCell2Ingredients.innerText =
    "Red, yellow, and orange Holland peppers grilled with olive oil, aged balsamic vinegar, roasted garlic";

  brunchCell2.appendChild(brunchCell2Dish);
  brunchCell2.appendChild(brunchCell2Price);
  brunchCell2.appendChild(brunchCell2Ingredients);
  brunchTable.appendChild(brunchCell2);
  brunchDiv.appendChild(brunchTable);
  brunchDivRight.appendChild(brunchDiv);

  //menu item
  const brunchCell3 = document.createElement("div");
  const brunchCell3Dish = document.createElement("h1");
  const brunchCell3Price = document.createElement("h1");
  const brunchCell3Ingredients = document.createElement("h2");
  brunchCell3Price.classList.add("price");
  brunchCell3.classList.add("cell");

  brunchCell3Dish.innerText = "Greek Salad";
  brunchCell3Price.innerText = "29";
  brunchCell3Ingredients.innerText =
    "Vine ripened tomatoes, cucumbers, olives, onions, peppers, Greek barrel-aged feta and extra virgin olive oil";

  brunchCell3.appendChild(brunchCell3Dish);
  brunchCell3.appendChild(brunchCell3Price);
  brunchCell3.appendChild(brunchCell3Ingredients);
  brunchTable.appendChild(brunchCell3);
  brunchDiv.appendChild(brunchTable);
  brunchDivRight.appendChild(brunchDiv);

  //menu item
  const brunchCell4 = document.createElement("div");
  const brunchCell4Dish = document.createElement("h1");
  const brunchCell4Price = document.createElement("h1");
  const brunchCell4Ingredients = document.createElement("h2");
  brunchCell4Price.classList.add("price");
  brunchCell4.classList.add("cell");

  brunchCell4Dish.innerText = "Organic Heirloom Beets";
  brunchCell4Price.innerText = "16";
  brunchCell4Ingredients.innerText = "Mint yogurt and roasted garlic";

  brunchCell4.appendChild(brunchCell4Dish);
  brunchCell4.appendChild(brunchCell4Price);
  brunchCell4.appendChild(brunchCell4Ingredients);
  brunchTable.appendChild(brunchCell4);
  brunchDiv.appendChild(brunchTable);
  brunchDivRight.appendChild(brunchDiv);

  //menu item
  const brunchCell5 = document.createElement("div");
  const brunchCell5Dish = document.createElement("h1");
  const brunchCell5Price = document.createElement("h1");
  const brunchCell5Ingredients = document.createElement("h2");
  brunchCell5Price.classList.add("price");
  brunchCell5.classList.add("cell");

  brunchCell5Dish.innerText = "Whole Lobster Salad";
  brunchCell5Price.innerText = "64";
  brunchCell5Ingredients.innerText = "Fennel, endive, radicchio, Metaxa brandy";

  brunchCell5.appendChild(brunchCell5Dish);
  brunchCell5.appendChild(brunchCell5Price);
  brunchCell5.appendChild(brunchCell5Ingredients);
  brunchTable.appendChild(brunchCell5);
  brunchDiv.appendChild(brunchTable);
  brunchDivRight.appendChild(brunchDiv);

  //menu item
  const brunchCell6 = document.createElement("div");
  const brunchCell6Dish = document.createElement("h1");
  const brunchCell6Price = document.createElement("h1");
  const brunchCell6Ingredients = document.createElement("h2");
  brunchCell6Price.classList.add("price");
  brunchCell6.classList.add("cell");

  brunchCell6Dish.innerText = "Grilled Vegetables";
  brunchCell6Price.innerText = "29";
  brunchCell6Ingredients.innerText =
    "Eggplant, zucchini, fennel, peppers, Akawai cheese";

  brunchCell6.appendChild(brunchCell6Dish);
  brunchCell6.appendChild(brunchCell6Price);
  brunchCell6.appendChild(brunchCell6Ingredients);
  brunchTable.appendChild(brunchCell6);
  brunchDiv.appendChild(brunchTable);
  brunchDivRight.appendChild(brunchDiv);
}
