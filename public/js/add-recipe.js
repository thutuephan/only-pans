const recipeForm = document.querySelector(".new-recipe-form");
const ingredientsInput = document.querySelector("#ingredients-input");
const ingredientsButton = document.querySelector("#ingredients-button");
const directionsInput = document.querySelector("#directions-input");
const directionsButton = document.querySelector("#directions-button")
const ingredientsDisplay = document.querySelector("#showIngredients");
const directionsDisplay = document.querySelector("#showDirections");
const removeButton = document.querySelector(".removeButton");


async function newFormHandler(event) {
    event.preventDefault();

    

    const recipe_name = document.querySelector('#dish_name').value;
    const ingredients = pushIngredients();
    const directions = pushDirections();
    const recipe_type = document.querySelector('#recipe_type').value;
    // const user_id = req.session.user_id;
    // is this the correct route?
    console.log({
        recipe_name,
        ingredients,
        directions,
        recipe_type,
        // user_id,
    },);
    const response = await fetch(`/recipes`, {
        method: 'POST',
        body: {
            recipe_name,
            ingredients,
            directions,
            recipe_type,
            // user_id,
        },
        headers: {
            'Content-Type': 'application/json',
        },
    });

    if (response.ok) {
        document.location.replace('/');// look into functionality of this...
      } else {
        alert('Failed to add recipe');
      }
};

// THIS LOGIC CREATES LIST ITEMS FOR INGREDIENTS
ingredientsButton.addEventListener("click", function(event) {
    event.preventDefault();

    const ingredientsText = ingredientsInput.value.trim();

    if (ingredientsText === "") {
        return;
    }
    
    let li = document.createElement("li");
    let p = document.createElement("p");
    p.textContent = ingredientsText;
    p.classList.add("ingredientsValue");

    let button = document.createElement("button");
    button.innerHTML = "<i class='fas fa-trash-alt'></i> Remove";
    button.type = "button";
    
    button.classList.add("removeButton");
    button.classList.add("btn-danger");
    button.classList.add("btn");
    li.appendChild(p);
    li.appendChild(button);
    ingredientsDisplay.appendChild(li);

    ingredientsInput.value = "";
});

// THIS LOGIC REMOVES SPECIFIC INGREDIENT LIST ITEMS
$(document).on("click", ".removeButton", function(event) {
    event.preventDefault();

    $(this).parent().remove();
});


function pushIngredients() {
    console.log($(".ingredientsValue"));
    let ingredientsValueList = $(".ingredientsValue");
    ingredientsValueList = ingredientsValueList.map((el) => el.textContent);
    console.log(ingredientsValueList);
    return ingredientsValueList;
}

// THIS LOGIC CREATES LIST ITEMS FOR DIRECTIONS
directionsButton.addEventListener("click", function(event) {
    event.preventDefault();

    const directionsText = directionsInput.value.trim();

    if (directionsText === "") {
        return;
    }
    
    let li = document.createElement("li");
    let p = document.createElement("p");
    p.textContent = directionsText;
    p.classList.add("directionsValue");

    let button = document.createElement("button");
    button.innerHTML = "<i class='fas fa-trash-alt'></i> Remove";
    button.type = "button";
    button.classList.add("removeButton");
    button.classList.add("btn-danger");
    button.classList.add("btn");
    li.appendChild(p);
    li.appendChild(button);
    directionsDisplay.appendChild(li);

    directionsInput.value = "";
});

// THIS LOGIC REMOVES SPECIFIC DIRECTION LIST ITEMS
$(document).on("click", ".removeButton", function(event) {
    event.preventDefault();

    $(this).parent().remove();
});


function pushDirections() {
    console.log($(".directionsValue"));
    const directionsValueList = $(".directionsValue").map((el) => el.textContent);
    console.log(directionsValueList);
    return directionsValueList;
}





document
    .querySelector('.new-recipe-form')
    .addEventListener('submit', newFormHandler);
