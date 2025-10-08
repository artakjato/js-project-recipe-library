//API fetch
const recipeAPIKey = "2eacd5e91c954f8f9792e8cf8db80895";
const URL = `https://api.spoonacular.com/recipes/random?number=12&apiKey=${recipeAPIKey}`;
let mockupRecipes = []; //Array to hold mockup data

function fetchRecipes() {
  fetch(URL)
    .then(response => {
      if (response.status === 402) { //Check if API limit is exceeded
        alert('Payment required: Please check your Spoonacular API subscription.');
      }
      return response; // Return the response for further processing otherwise it gets blocked
    })
    .then(response => response.json()).then(data => mockupRecipes = data.recipes)
}

fetchRecipes();


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
// const mockupRecipes = [
//   {
//     id: 1,
//     title: "Vegan Lentil Soup",
//     image: "./chicken.webp",
//     readyInMinutes: 30,
//     servings: 4,
//     sourceUrl: "https://example.com/vegan-lentil-soup",
//     diets: ["vegan"],
//     cuisine: "Swedish",
//     ingredients: [
//       "red lentils",
//       "carrots",
//       "onion",
//       "garlic",
//       "tomato paste",
//       "cumin",
//       "paprika",
//       "vegetable broth",
//       "olive oil",
//       "salt"
//     ],
//     pricePerServing: 2.5,
//     popularity: 85
//   },
//   {
//     id: 2,
//     title: "Vegetarian Pesto Pasta",
//     image: "./chicken.webp",
//     readyInMinutes: 25,
//     servings: 2,
//     sourceUrl: "https://example.com/vegetarian-pesto-pasta",
//     diets: ["vegetarian"],
//     cuisine: "USA",
//     ingredients: [
//       "pasta",
//       "basil",
//       "parmesan cheese",
//       "garlic",
//       "pine nuts",
//       "olive oil",
//       "salt",
//       "black pepper"
//     ],
//     pricePerServing: 3.0,
//     popularity: 92
//   },
//   {
//     id: 3,
//     title: "Gluten-Free Chicken Stir-Fry",
//     image: "./chicken.webp",
//     readyInMinutes: 20,
//     servings: 3,
//     sourceUrl: "https://example.com/gluten-free-chicken-stir-fry",
//     diets: ["gluten-free"],
//     cuisine: "USA",
//     ingredients: [
//       "chicken breast",
//       "broccoli",
//       "bell pepper",
//       "carrot",
//       "soy sauce (gluten-free)",
//       "ginger",
//       "garlic",
//       "sesame oil",
//       "cornstarch",
//       "green onion",
//       "sesame seeds",
//       "rice"
//     ],
//     pricePerServing: 4.0,
//     popularity: 78
//   },
//   {
//     id: 4,
//     title: "Dairy-Free Tacos",
//     image: "./chicken.webp",
//     readyInMinutes: 15,
//     servings: 2,
//     sourceUrl: "https://example.com/dairy-free-tacos",
//     diets: ["dairy-free"],
//     cuisine: "USA",
//     ingredients: [
//       "corn tortillas",
//       "ground beef",
//       "taco seasoning",
//       "lettuce",
//       "tomato",
//       "avocado"
//     ],
//     pricePerServing: 2.8,
//     popularity: 88
//   },
//   {
//     id: 5,
//     title: "Middle Eastern Hummus",
//     image: "./chicken.webp",
//     readyInMinutes: 10,
//     servings: 4,
//     sourceUrl: "https://example.com/middle-eastern-hummus",
//     diets: ["vegan", "gluten-free"],
//     cuisine: "USA",
//     ingredients: [
//       "chickpeas",
//       "tahini",
//       "garlic",
//       "lemon juice",
//       "olive oil"
//     ],
//     pricePerServing: 1.5,
//     popularity: 95
//   },
//   {
//     id: 6,
//     title: "Quick Avocado Toast",
//     image: "./chicken.webp",
//     readyInMinutes: 5,
//     servings: 1,
//     sourceUrl: "https://example.com/quick-avocado-toast",
//     diets: ["vegan"],
//     cuisine: "Swedish",
//     ingredients: [
//       "bread",
//       "avocado",
//       "lemon juice",
//       "salt"
//     ],
//     pricePerServing: 2.0,
//     popularity: 90
//   },
//   {
//     id: 7,
//     title: "Beef Stew",
//     image: "./chicken.webp",
//     readyInMinutes: 90,
//     servings: 5,
//     sourceUrl: "https://example.com/beef-stew",
//     diets: [],
//     cuisine: "Balkan",
//     ingredients: [
//       "beef chunks",
//       "potatoes",
//       "carrots",
//       "onion",
//       "garlic",
//       "tomato paste",
//       "beef broth",
//       "red wine",
//       "bay leaves",
//       "thyme",
//       "salt",
//       "black pepper",
//       "butter",
//       "flour",
//       "celery",
//       "mushrooms"
//     ],
//     pricePerServing: 5.5,
//     popularity: 80
//   },
//   {
//     id: 8,
//     title: "Balkan style Baked beans",
//     image: "Tavce_gravce.jpg",
//     readyInMinutes: 60,
//     servings: 4,
//     sourceUrl: "https://bakinghermann.com/tavce-gravce-macedonian-baked-beans/",
//     diets: [],
//     cuisine: "Balkan",
//     ingredients: [
//       "500gr. white beans",
//       "1 onion",
//       "5 teaspoons red pepper",
//       "1 teaspoon salt"
//     ],
//     pricePerServing: 5.5,
//     popularity: 80
//   },
// ];

let cards = document.querySelector('.cards');

function renderRecipes(recipes) {
  //cleans the .cards container 
  cards.innerHTML = "";
  // Returns empty state

  if (!Array.isArray(recipes) || recipes.length === 0) {
    cards.innerHTML = `
  <div class="empty-state">
      <div class="empty-gif">
      <img 
        src="https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExeWZvYmNweG5jaTM5bGUzOXlxNHpwNm4yaXJwYjZ3Mjdia2MwZjZpcCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/jKaFXbKyZFja0/giphy.gif" 
        alt="No recipes found" 
      />
      </div>
    <p>No recipes found. Try a different filter</p>
  </div>
    `;
    return;
  }
  //loops over each recipe in the array
  recipes.forEach(recipe => {
    cards.innerHTML += `
      <div class="recipe-card"> 
      <div class="image-wrapper">
      <a href="${recipe.sourceUrl}" target="_blank">  
      <img
          class="food-image"
          src="${recipe.image}"
          alt="Baked beans sprinkled with a few mint leaves in a baking pot"
          />
          </div>
          <div class="text-wrapper">
          <h3>${recipe.title}</h3>
          <hr class="solid">
          <p><strong>Cuisine:</strong>${recipe.cuisines}</p>
          <p><strong>Preparation time:</strong> ${recipe.readyInMinutes}</p>
          <hr class="solid">
          <p><strong>Ingredients:</strong><br>    
          ${recipe.extendedIngredients.join("<br>")}
          </a>
          </p>
          </div>
          </div>
          `
  })
};
//Initial render of all recipes
renderRecipes(mockupRecipes);

//const allButton = document.querySelector('#all').addEventListener('click', () => renderRecipes(mockupRecipes));

function filterRecipes(value) {
  if (value === "all") {
    renderRecipes(mockupRecipes);
    return;
  }
  const filtered = mockupRecipes.filter(r => r.diets.includes(value));
  renderRecipes(filtered);
}
//display ALL recipes 
document.querySelector('#all').addEventListener('click', (e) => {
  e.preventDefault(); // stops page from jumping to "#"
  renderRecipes(mockupRecipes); // show all recipes
});

// const europeanButton = document.querySelector('#european').addEventListener('click', () => {
//   const europeanRecipe = mockupRecipes.filter(recipe => {
//     console.log(recipe); 
//     return recipe.cuisines.some(cuisine => cuisine == 'European');
//   });
//   renderRecipes(europeanRecipe);
// });

const vegetarianButton = document.querySelector('#vegetarian').addEventListener('click', () => {
 const vegetarianRecipe = mockupRecipes.filter(recipe => {
  console.log(recipe.diets);
  return recipe.diets.some(diet => diet.includes('vegetarian'));
 });
  renderRecipes(vegetarianRecipe);
})

const glutenFreeButton = document.querySelector('#gluten-free').addEventListener('click', () => {
  const glutenFreeRecipe = mockupRecipes.filter(recipe => {
  return recipe.diets.some(diet => diet.includes('gluten free'));
  });
  renderRecipes(glutenFreeRecipe);
})

// const americanButton = document.querySelector('#american').addEventListener('click', () => {
//   const americanRecipe = mockupRecipes.filter(recipe => {
//     return recipe.cuisines.some(cuisine => cuisine =='American');
//   });
//   renderRecipes(americanRecipe);

const dairyFreeButton = document.querySelector ('#dairy-free').addEventListener('click', () => {
  const dairyFreeRecipe = mockupRecipes.filter(recipe => {
  console.log(recipe.diets);
  return recipe.diets.some(diet => diet.includes('dairy free'));
  });
  renderRecipes(dairyFreeRecipe);
})

//empty button
const funFreeButton = document.querySelector('#fun-free').addEventListener('click', () => {
  const funFreeRecipe = mockupRecipes.filter(recipe => recipe.cuisine == 'fun free');
  renderRecipes(funFreeRecipe);
});


//descending button
const descendingButton = document.querySelector('#descending').addEventListener('click', () => {
  const descendingRecipes = [...mockupRecipes].sort((a, b) => b.readyInMinutes - a.readyInMinutes);
  renderRecipes(descendingRecipes);
});


// mockupRecipes.sort((a,b) creates a new array - so USE [...mockupRecipes].sort((a, b)

//ascending button
const ascendingButton = document.querySelector('#ascending').addEventListener('click', () => {
  const ascendingRecipes = [...mockupRecipes].sort((a, b) => a.readyInMinutes - b.readyInMinutes);
  renderRecipes(ascendingRecipes);
});

//shuffles recipes
const surpriseButton = document.querySelector('#surprise');
surpriseButton.addEventListener('click', () => {
  if (!mockupRecipes || mockupRecipes.length === 0) {
    renderRecipes([]); // or showEmptyState('No recipes yet');
    return;
  }

  const index = Math.floor(Math.random() * mockupRecipes.length);
  const selected = mockupRecipes[index];

  // If renderRecipes expects an array, pass a single-item array:
  renderRecipes([selected]);

});
