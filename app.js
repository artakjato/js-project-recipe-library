//Added background color to the buttons
document.querySelectorAll('.filter-buttons a')
  .forEach(a => a.style.backgroundColor = '#d4f5e7');

document.querySelectorAll('.sorting-buttons a')
  .forEach(a => a.style.backgroundColor = 'lightPink');

//Adding an event listener
// document.getElementById("balkan").addEventListener("click", displayFilterText);

// function displayFilterText() {
//   const paragraph = document.createElement('p');
//   document.getElementById("filter-text").append(paragraph);
//   paragraph.append("Up for some meat with everything?");
// }

//Mock up data
const mockupRecipes = [
  {
    id: 1,
    title: "Vegan Lentil Soup",
    image: "./chicken.webp",
    readyInMinutes: 30,
    servings: 4,
    sourceUrl: "https://example.com/vegan-lentil-soup",
    diets: ["vegan"],
    cuisine: "Mediterranean",
    ingredients: [
      "red lentils",
      "carrots",
      "onion",
      "garlic",
      "tomato paste",
      "cumin",
      "paprika",
      "vegetable broth",
      "olive oil",
      "salt"
    ],
    pricePerServing: 2.5,
    popularity: 85
  },
  {
    id: 2,
    title: "Vegetarian Pesto Pasta",
    image: "./chicken.webp",
    readyInMinutes: 25,
    servings: 2,
    sourceUrl: "https://example.com/vegetarian-pesto-pasta",
    diets: ["vegetarian"],
    cuisine: "Italian",
    ingredients: [
      "pasta",
      "basil",
      "parmesan cheese",
      "garlic",
      "pine nuts",
      "olive oil",
      "salt",
      "black pepper"
    ],
    pricePerServing: 3.0,
    popularity: 92
  },
  {
    id: 3,
    title: "Gluten-Free Chicken Stir-Fry",
    image: "./chicken.webp",
    readyInMinutes: 20,
    servings: 3,
    sourceUrl: "https://example.com/gluten-free-chicken-stir-fry",
    diets: ["gluten-free"],
    cuisine: "Asian",
    ingredients: [
      "chicken breast",
      "broccoli",
      "bell pepper",
      "carrot",
      "soy sauce (gluten-free)",
      "ginger",
      "garlic",
      "sesame oil",
      "cornstarch",
      "green onion",
      "sesame seeds",
      "rice"
    ],
    pricePerServing: 4.0,
    popularity: 78
  },
  {
    id: 4,
    title: "Dairy-Free Tacos",
    image: "./chicken.webp",
    readyInMinutes: 15,
    servings: 2,
    sourceUrl: "https://example.com/dairy-free-tacos",
    diets: ["dairy-free"],
    cuisine: "Mexican",
    ingredients: [
      "corn tortillas",
      "ground beef",
      "taco seasoning",
      "lettuce",
      "tomato",
      "avocado"
    ],
    pricePerServing: 2.8,
    popularity: 88
  },
  {
    id: 5,
    title: "Middle Eastern Hummus",
    image: "./chicken.webp",
    readyInMinutes: 10,
    servings: 4,
    sourceUrl: "https://example.com/middle-eastern-hummus",
    diets: ["vegan", "gluten-free"],
    cuisine: "Middle Eastern",
    ingredients: [
      "chickpeas",
      "tahini",
      "garlic",
      "lemon juice",
      "olive oil"
    ],
    pricePerServing: 1.5,
    popularity: 95
  },
  {
    id: 6,
    title: "Quick Avocado Toast",
    image: "./chicken.webp",
    readyInMinutes: 5,
    servings: 1,
    sourceUrl: "https://example.com/quick-avocado-toast",
    diets: ["vegan"],
    cuisine: "Mediterranean",
    ingredients: [
      "bread",
      "avocado",
      "lemon juice",
      "salt"
    ],
    pricePerServing: 2.0,
    popularity: 90
  },
  {
    id: 7,
    title: "Beef Stew",
    image: "./chicken.webp",
    readyInMinutes: 90,
    servings: 5,
    sourceUrl: "https://example.com/beef-stew",
    diets: [],
    cuisine: "European",
    ingredients: [
      "beef chunks",
      "potatoes",
      "carrots",
      "onion",
      "garlic",
      "tomato paste",
      "beef broth",
      "red wine",
      "bay leaves",
      "thyme",
      "salt",
      "black pepper",
      "butter",
      "flour",
      "celery",
      "mushrooms"
    ],
    pricePerServing: 5.5,
    popularity: 80
  },
  {
    id: 8,
    title: "Balkan style Baked beans",
    image: "Tavce_gravce.jpg",
    readyInMinutes: 60,
    servings: 4,
    sourceUrl: "https://bakinghermann.com/tavce-gravce-macedonian-baked-beans/",
    diets: [],
    cuisine: "Balkan",
    ingredients: [
      "500gr. white beans",
      "1 onion",
      "5 teaspoons red pepper",
      "1 teaspoon salt"
    ],
    pricePerServing: 5.5,
    popularity: 80
  },
];

//rendering recipes
let cards = document.querySelector('.cards');

function renderRecipes(recipes) {
  cards.innerHTML = "";
  recipes.forEach(recipe => {
    cards.innerHTML += `
      <div class="recipe-card"> 
      <div class="image-wrapper">
      <a href="${recipe.sourceUrl}"target="_blank">
      <img
          class="food-image"
          src="Tavce_gravce.jpg"
          alt="Baked beans sprinkled with a few mint leaves in a baking pot"
          />
          </div>
          <div class="text-wrapper">
          <h3>${recipe.title}</h3>
          <hr class="solid">
          <p><strong>Cuisine:</strong>${recipe.cuisine}</p>
          <p><strong>Preparation time:</strong> ${recipe.readyInMinutes}</p>
          <hr class="solid">
          <p><strong>Ingredients:</strong><br>
         ${recipe.ingredients.join("<br>")}
          </a>
          </p>
          </div>
          </div>
          `
  })
};

renderRecipes(mockupRecipes);

const allButton = document.querySelector('#all').addEventListener('click', () => renderRecipes(mockupRecipes));

const balkanButton = document.querySelector('#balkan').addEventListener('click', () => {
  const balkanRecipe = mockupRecipes.filter(recipe => recipe.cuisine == 'Balkan');
  renderRecipes(balkanRecipe);
});