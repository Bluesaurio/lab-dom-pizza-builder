// Write your Pizza Builder JavaScript in this file.

// Constants
const basePrice = 10;
const ingredients = {
  pepperoni: { name: 'pepperoni', price: 1 },
  mushrooms: { name: 'Mushrooms', price: 1 },
  greenPeppers: { name: 'Green Peppers', price: 1 },
  whiteSauce: { name: 'White sauce', price: 3 },
  glutenFreeCrust: { name: 'Gluten-free crust', price: 5 }
};

// Initial value of the state (the state values can change over time)
const state = {
  pepperoni: true,
  mushrooms: true,
  greenPeppers: true,
  whiteSauce: false,
  glutenFreeCrust: false
};

// This function takes care of rendering the pizza based on the state
// This function is triggered once at the beginning and every time the state is changed
function renderEverything() {
  renderPepperoni();
  renderMushrooms();
  renderGreenPeppers();
  renderWhiteSauce();
  renderGlutenFreeCrust();

  renderButtons();
  renderPrice();
}

function renderPepperoni() {
  document.querySelectorAll('.pep').forEach((onePep) => {
    if (state.pepperoni) {
      onePep.style.visibility = 'visible';
    } else if (!state.pepperoni) {
      onePep.style.visibility = 'hidden';
    }
  });
}

let mushroomNode = document.querySelectorAll('.mushroom');
let mushroomButtonNode = document.querySelector('.btn.btn-mushrooms');

function renderMushrooms() {
  // Iteration 1: set the visibility of `<section class="mushroom">`

  mushroomNode.forEach((eachMushroom) => {
    if (state.mushrooms) {
      eachMushroom.style.visibility = 'visible';
    } else if (!state.mushrooms) {
      eachMushroom.style.visibility = 'hidden';
    }
  });
}

mushroomButtonNode.addEventListener('click', () => {
  if (state.mushrooms) {
    state.mushrooms = false;
  } else if (!state.mushrooms) {
    state.mushrooms = true;
  }
  renderEverything();
});
//--------------------------------------------------------------------------

let greenPepperNode = document.querySelectorAll('.green-pepper');
let greenPepperButtonNode = document.querySelector('.btn.btn-green-peppers');

function renderGreenPeppers() {
  // Iteration 1: set the visibility of `<section class="green-pepper">`

  greenPepperNode.forEach((eachGreenPepper) => {
    if (state.greenPeppers) {
      eachGreenPepper.style.visibility = 'visible';
    } else if (!state.greenPeppers) {
      eachGreenPepper.style.visibility = 'hidden';
    }
  });
}

greenPepperButtonNode.addEventListener('click', () => {
  if (state.greenPeppers) {
    state.greenPeppers = false;
  } else if (state.greenPeppers === false) {
    state.greenPeppers = true;
  }
  renderEverything();
});
// ----------------------------------------------------------------------------

let whiteSauceNode = document.querySelector('.sauce');
let whiteSauceButtonNode = document.querySelector('.btn.btn-sauce');

function renderWhiteSauce() {
  // Iteration 2: add/remove the class "sauce-white" of `<section class="sauce">`
  if (state.whiteSauce === true) {
    whiteSauceNode.classList.remove('sauce-white');
  } else if (!state.whiteSauce) {
    whiteSauceNode.classList.add('sauce-white');
  }
}
whiteSauceButtonNode.addEventListener('click', () => {
  if (state.whiteSauce === false) {
    state.whiteSauce = true;
  } else if (state.whiteSauce === true) {
    state.whiteSauce = false;
  }
  renderEverything();
});

// ---------------------------------------------------------------------------
let crustNode = document.querySelector('.crust');
let crustButtonNode = document.querySelector('.btn.btn-crust');

function renderGlutenFreeCrust() {
  if (state.glutenFreeCrust === true) {
    crustNode.classList.remove('crust-gluten-free');
  } else if (state.glutenFreeCrust === false) {
    crustNode.classList.add('crust-gluten-free');
  }
  // Iteration 2: add/remove the class "crust-gluten-free" of `<section class="crust">`
}
crustButtonNode.addEventListener('click', () => {
  if (state.glutenFreeCrust === true) {
    state.glutenFreeCrust = false;
  } else if (state.glutenFreeCrust === false) {
    state.glutenFreeCrust = true;
  }
  renderEverything();
});

// --------------------------------------------------------------------------
let allButtonsNode = document.querySelectorAll('.btn');
function renderButtons() {
  if (allButtonsNode.classList === 'active') {
    allButtonsNode.classList.remove('active');
  }
  // Iteration 3: add/remove the class "active" of each `<button class="btn">`
}

// -----------------------------------------------------------------------------
let listPriceNode = document.querySelector('.panelPrice li');

function renderPrice() {
  if (state.pepperoni === true) {
    listPriceNode.style.display = 'flex';
  }
  // Iteration 4: change the HTML of `<aside class="panel price">`
}

renderEverything();

// Iteration 1: Example of a click event listener on `<button class="btn btn-pepperoni">`
document
  .querySelector('.btn.btn-pepperoni')
  .addEventListener('click', function () {
    state.pepperoni = !state.pepperoni;
    renderEverything();
  });

// Iteration 1: Add click event listener on `<button class="btn btn-mushrooms">`

// Iteration 1: Add click event listener on `<button class="btn btn-green-peppers">`

// Iteration 2: Add click event listener on `<button class="btn btn-sauce">`

// Iteration 2: Add click event listener on `<button class="btn btn-crust">`
