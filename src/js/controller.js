import * as model from './model.js';
import recipeView from './views/recipeView.js'
import 'core-js/stable';
import 'regenerator-runtime/runtime';

// https://forkify-api.herokuapp.com/v2

async function controlRecipes() {
  try {
    const id = window.location.hash.slice(1);

    if (!id) return;
    recipeView.renderSpinner();

    // Loading recipe
    await model.loadRecipe(id);

    // Rendering recipe
    recipeView.render(model.state.recipe)
    
  } catch (err) {
    alert(err);
  }
}

['hashChange', 'load'].forEach(ev => window.addEventListener(ev, controlRecipes));
