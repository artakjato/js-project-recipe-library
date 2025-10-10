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
          ${
            recipe.extendedIngredients.map(ingredient => ingredient.original).join("<br>") //map to loop through ingredients
          } 
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
