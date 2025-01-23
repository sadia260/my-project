
const drinks = [
  { name: "Mojito", category: "Cocktail", instructions: "Mix mint and rum." },
  { name: "Martini", category: "Cocktail", instructions: "Shake with ice." },
  { name: "Lemonade", category: "Non-Alcoholic", instructions: "Squeeze lemons." },
  
];

let selectedDrinks = [];


const displayDrinks = (drinkList) => {
  const drinkCardsContainer = document.getElementById("drink-cards");
  drinkCardsContainer.innerHTML = "";

  if (drinkList.length === 0) {
    drinkCardsContainer.innerHTML = "<p>No drinks found.</p>";
    return;
  }

  drinkList.forEach((drink, index) => {
    const card = document.createElement("div");
    card.classList.add("drink-card");
    card.innerHTML = `
      <h3>${drink.name}</h3>
      <p>Category: ${drink.category}</p>
      <p>Instructions: ${drink.instructions.substring(0, 15)}...</p>
      <button onclick="addToGroup('${drink.name}')">Add to Group</button>
      <button onclick="showDetails(${index})">Details</button>
    `;
    drinkCardsContainer.appendChild(card);
  });
};
const searchDrinks = () => {
  const query = document.getElementById("search-bar").value.toLowerCase();
  const filteredDrinks = drinks.filter(drink =>
    drink.name.toLowerCase().includes(query)
  );
  displayDrinks(filteredDrinks);
};


const addToGroup = (name) => {
  if (selectedDrinks.length >= 7) {
    alert("Cannot add more than 7 drinks!");
    return;
  }

  selectedDrinks.push(name);
  updateSelectedDrinks();
};


const updateSelectedDrinks = () => {
  const selectedDrinksContainer = document.getElementById("selected-drinks");
  selectedDrinksContainer.innerHTML = selectedDrinks
    .map(drink => <li>${drink}</li>)
    .join("");

  document.getElementById("drink-count").innerText = Total Drinks: ${selectedDrinks.length};
};


const showDetails = (index) => {
  const drink = drinks[index];
  const modal = document.getElementById("details-modal");
  document.getElementById("modal-title").innerText = drink.name;
  document.getElementById("modal-details").innerHTML = `
    <li>Category: ${drink.category}</li>
    <li>Instructions: ${drink.instructions}</li>
    <li>More Info: Example Detail 3</li>
    <li>Example Detail 4</li>
    <li>Example Detail 5</li>
  `;
  modal.classList.remove("hidden");
};


document.getElementById("close-modal").onclick = () => {
  document.getElementById("details-modal").classList.add("hidden");
};


document.getElementById("search-button").onclick = searchDrinks;


window.onload = () => displayDrinks(drinks);