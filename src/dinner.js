export function Dinner() {
  const dinnerDivRight = document.getElementById("menuDivRight");
  const dinnerDiv = document.createElement("div");
  const dinnerTable = document.createElement("div");
  dinnerTable.classList.add("grid");
  dinnerTable.style.gridTemplateColumns = "1fr 1fr";
  dinnerTable.style.gridTemplateRows = "1fr 1fr 1fr";

  //menu item
  const dinnerCell1 = document.createElement("div");
  const dinnerCell1Dish = document.createElement("h1");
  const dinnerCell1Price = document.createElement("h1");
  const dinnerCell1Ingredients = document.createElement("h2");
  dinnerCell1Price.classList.add("price");
  dinnerCell1.classList.add("cell");

  dinnerCell1Dish.innerText = "American Red Snapper";
  dinnerCell1Price.innerText = "95";
  dinnerCell1Ingredients.innerText =
    "2 - 2.5 lbs. (serves 2-3). Grilled whole fish with Santorini capers, olive oil and lemon";

  dinnerCell1.appendChild(dinnerCell1Dish);
  dinnerCell1.appendChild(dinnerCell1Price);
  dinnerCell1.appendChild(dinnerCell1Ingredients);
  dinnerTable.appendChild(dinnerCell1);
  dinnerDiv.appendChild(dinnerTable);
  dinnerDivRight.appendChild(dinnerDiv);

  //menu item
  const dinnerCell2 = document.createElement("div");
  const dinnerCell2Dish = document.createElement("h1");
  const dinnerCell2Price = document.createElement("h1");
  const dinnerCell2Ingredients = document.createElement("h2");
  dinnerCell2Price.classList.add("price");
  dinnerCell2.classList.add("cell");

  dinnerCell2Dish.innerText = "Faroe Islands Salmon";
  dinnerCell2Price.innerText = "36";
  dinnerCell2Ingredients.innerText =
    "Simply grilled with Santorini piazzi-style beans and micro green salad";

  dinnerCell2.appendChild(dinnerCell2Dish);
  dinnerCell2.appendChild(dinnerCell2Price);
  dinnerCell2.appendChild(dinnerCell2Ingredients);
  dinnerTable.appendChild(dinnerCell2);
  dinnerDiv.appendChild(dinnerTable);
  dinnerDivRight.appendChild(dinnerDiv);

  //menu item
  const dinnerCell3 = document.createElement("div");
  const dinnerCell3Dish = document.createElement("h1");
  const dinnerCell3Price = document.createElement("h1");
  const dinnerCell3Ingredients = document.createElement("h2");
  dinnerCell3Price.classList.add("price");
  dinnerCell3.classList.add("cell");

  dinnerCell3Dish.innerText = "Shrimps and Scallops on a Skewer";
  dinnerCell3Price.innerText = "42";
  dinnerCell3Ingredients.innerText =
    "Radicchio and endive salad, with organic couscous";

  dinnerCell3.appendChild(dinnerCell3Dish);
  dinnerCell3.appendChild(dinnerCell3Price);
  dinnerCell3.appendChild(dinnerCell3Ingredients);
  dinnerTable.appendChild(dinnerCell3);
  dinnerDiv.appendChild(dinnerTable);
  dinnerDivRight.appendChild(dinnerDiv);

  //menu item
  const dinnerCell4 = document.createElement("div");
  const dinnerCell4Dish = document.createElement("h1");
  const dinnerCell4Price = document.createElement("h1");
  const dinnerCell4Ingredients = document.createElement("h2");
  dinnerCell4Price.classList.add("price");
  dinnerCell4.classList.add("cell");

  dinnerCell4Dish.innerText = '"Origin Green" Organic Salmon';
  dinnerCell4Price.innerText = "56";
  dinnerCell4Ingredients.innerText =
    "Simply grilled with Santorini piazzi-style bean and micro-green salad";

  dinnerCell4.appendChild(dinnerCell4Dish);
  dinnerCell4.appendChild(dinnerCell4Price);
  dinnerCell4.appendChild(dinnerCell4Ingredients);
  dinnerTable.appendChild(dinnerCell4);
  dinnerDiv.appendChild(dinnerTable);
  dinnerDivRight.appendChild(dinnerDiv);

  //menu item
  const dinnerCell5 = document.createElement("div");
  const dinnerCell5Dish = document.createElement("h1");
  const dinnerCell5Price = document.createElement("h1");
  const dinnerCell5Ingredients = document.createElement("h2");
  dinnerCell5Price.classList.add("price");
  dinnerCell5.classList.add("cell");

  dinnerCell5Dish.innerText = "Filet Mignon Shish Kebab";
  dinnerCell5Price.innerText = "42";
  dinnerCell5Ingredients.innerText =
    "Cubes of beef filet on a skewer with tomato, peppers and onions, served over rice pilaf";

  dinnerCell5.appendChild(dinnerCell5Dish);
  dinnerCell5.appendChild(dinnerCell5Price);
  dinnerCell5.appendChild(dinnerCell5Ingredients);
  dinnerTable.appendChild(dinnerCell5);
  dinnerDiv.appendChild(dinnerTable);
  dinnerDivRight.appendChild(dinnerDiv);

  //menu item
  const dinnerCell6 = document.createElement("div");
  const dinnerCell6Dish = document.createElement("h1");
  const dinnerCell6Price = document.createElement("h1");
  const dinnerCell6Ingredients = document.createElement("h2");
  dinnerCell6Price.classList.add("price");
  dinnerCell6.classList.add("cell");

  dinnerCell6Dish.innerText = "Crevettes Royales";
  dinnerCell6Price.innerText = "80";
  dinnerCell6Ingredients.innerText =
    "Spain's whole grilled shrimp served with a shot of sherry, with organic couscous";

  dinnerCell6.appendChild(dinnerCell6Dish);
  dinnerCell6.appendChild(dinnerCell6Price);
  dinnerCell6.appendChild(dinnerCell6Ingredients);
  dinnerTable.appendChild(dinnerCell6);
  dinnerDiv.appendChild(dinnerTable);
  dinnerDivRight.appendChild(dinnerDiv);
}
