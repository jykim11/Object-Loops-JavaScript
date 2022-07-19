// given the recipes bellow put them all on the HTML page using loops

let recipesArray = [
    {
        title: "Green Thai Curry",
        time: 30,
        calories: 750,
        ingredients: ["350g Chicken Thigh", "1 cup (250ml) chicken or vegetable broth", "14oz coconut milk", "1 - 3 tsp fish sauce", "1 - 3 tsp white sugar ", "1/8 tsp salt", "2 Japanese eggplants or Zuccini", "2 Yukon Potato"]
    },
    {
        title: "Bacon Mac & Cheese",
        time: 40,
        calories: 500,
        ingredients: ["12oz baccon", "2 tablespoons flour", "2 1/2 cups water", "4 cups milk", "16oz short uncooked pasta", "1/2 teaspoon salt", "1/4 teaspoon", "garlic powder", "1/4 teaspoon onion powder", "1/2 teaspoon smoked paprika", "1/4 teaspoon pepper", "4 cups shredded cheddar cheese", "1 tablespoon chopped parsley"]
    },
    {
        title: "Broccoli Pesto Pasta",
        time: 40,
        calories: 690,
        ingredients: ["1 lb cooked pasta", "4 cups broccoli florets", "2 cups basil leaves, lightly packed", "2 garlic cloves", "1/4 cup pine nuts", "1 cup extra virgin olive oil", "1/2 tbsp salt", "1 cup Parmigiano-Reggiano, grated"]
    },
    {
        title: "Sesame Garlic Ramen Noodles",
        time: 25,
        calories: 380,
        ingredients: ["3 Packs instant ramen noodles, flavor packets discarded", "1/4 cup low sodium soy sauce", "1/4 cup oyster sauce", "1 tbsp rice vinegar", "1 tbsp brown sugar, optional", "1/2-1 cup chili sauce", "1/4 cup water", "2 tbsp toasted sesame oil", "3 cloves garlic, minced", "1tbsp freshly grated ginger", "4-6 green onions, thinly sliced", "1 tbsp sesame seeds"]
    }
]

// Your code goes here:

// Each recipe should be in its own div, that can be recCont. We are declaring it here since we will want to change its value with each itteration of the loop.

let recipeContainer;
let recipes = document.querySelector('.recipes');
// HINT: Using .map will be very helpful when itterating through the ingredients array.

for (let i = 0; i < recipesArray.length; i++) {
    recipeContainer = document.createElement("div");

    // map method to get the ingredients.
    let ingredients = recipesArray[i].ingredients.map(ingredient => {
        return ingredient;
    }).join('<br />');

    recipeContainer.innerHTML = `
    <div class="allRecipes">
    <div class="title">${recipesArray[i].title}</div>
    <br>
    <div class="information">
    <b><u>Time to cook</u> : </b>${recipesArray[i].time}
    <br>
    <b><u>Calories</u> : </b> ${recipesArray[i].calories}
    <br>
    <b><u>Ingredients</u></b>
    <br>
    ${ingredients} </div>
    </div>`;

    recipes.appendChild(recipeContainer);
}