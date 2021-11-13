const { Recipe } = require('../models');

const recipeData = [
    {
        "recipe_name": "Maple, Walnut and Bacon Brie Bites",
        "ingredients": "8 mini Brie wheels, 1/4 cup chopped toasted walnuts, 1 tablespoon pure maple syrup, 1 teaspoon apple-cider vinegar, 5 slices cooked bacon (chopped), Sliced scallions (for garnish)",
        "directions": ["1. Preheat the oven to 250 degrees F", "2. On a baking sheet or ovensafe serving platter, bake the Brie wheels until warm to the touch and slightly oozy, 3 to 5 minutes. 3. In a small bowl, combine the walnuts, maple syrup, vinegar and bacon. Top each warmed Brie bite with a spoonful of the maple syrup mixture. Garnish with scallions. Serve immediately."],
        "recipe_type": "starters",
        "recipe_time": 15,
        'category_id': 1
    },
    {
        "recipe_name": "Fresh Strawberry Cupcakes",
        "ingredients": ["1 2/3 cups flour", "1 tsp baking powder", "1/4 tsp baking soda", "1/2 tsp salt", "3/4 cup unsalted butter, melted" , "1 cup sugar" , "2 tsp vanilla extract" , "2 eggs" ,  "1/2 cup sour cream" ,  "1/4 cup + 2 tsp milk" , "1 1/2 cup chopped strawberries"],
        "directions": ["Preheat oven to 350 F" , "Sift flour, baking powder, baking soda & salt. Set aside" , "Whisk melted butter, sugar and vanilla" , "add eggs - whisk well" , "add sour cream - whisk well" , "add milk - whisk well" , "add dry ingredients - fold in gently" , "add strawberries - fold in gently" , "fill cupcake liners a little over halfway. Bake 18-20 minutes, or until a toothpick comes out clean"],
        "recipe_type": "desserts",
        "recipe_time": 30,
        'category_id': 4
    },
    {
        "recipe_name": "Spatchcocked Turkey",
        "ingredients": ["1 Turkey, 8-12 pounds" , "10 garlic cloves, peeled and lightly crushed" , "1/2 teaspoon dried thyme" , "1/3 cup butter, melted" , "Salt and Pepper to taste"],
        "directions": ["Preheat oven to 450 F" , "Place turkey on stable cutting board, breast side down, and cut out backbone. Turn over, and press on it to flatten it out" , "Place turkey, breast side up, on roasting pan. Tuck garlic and and thyme under the bird, and in the nooks of the wings and legs" , "Roast for 20 minutes, or until it starts to brown. Remove from oven, baste with pan juices, and return to oven. Reduce temp to 400 F" , "Check turkey after 15 minutes. Remove when thigh meat reads 165 F. Check in multiple places to ensure proper cook-through" , "Let turkey rest for 10 minutes before carving. Serve with garlic cloves and pan juices"],
        "recipe_type": "entrees",
        "recipe_time": 45,
        'category_id': 2
    },
    {
        "recipe_name": "Deviled Eggs",
        "ingredients": ["12 large eggs" , "1/2 cup mayonnaise" , "1 tbsp Dijon mustard" , "1 to 2 dashes hot sauce" , "Salt and Pepper to taste" , "Finely chopped chives for garnish" , "Smoked Paprika for dusting"],
        "directions": ["Place eggs in single layer in saucepan, cover with 1 inch of water, and bring to boil" , "Lower heat to medium-low and simmer for 10 minutes. Transfer to bowl of ice water to cool completely, then peel the eggs" , "Slice eggs in half lengthwise, wiping the blade clean between each cut. Remove yolks to a separate bowl" , "Mash yolks with the mayonnaise, Dijon, hot sauce, salt and pepper. Transfer to large resealable plastic bag and snip off one corner with scissors" , "Place egg whites on platter, then evenly pipe the yolk filling into each egg. Top with chives and a sprinkle of Smoked Paprika" , "Refrigerate for 20-25 minutes prior to serving"],
        "recipe_type": "starters",
        "recipe_time": 40,
        'category_id': 1
    },
    {
        "recipe_name": "Creamed Corn",
        "ingredients": ["2(10 ounce) packages frozen corn kernels, thawed" , "1 cup heavy cream" , "1 tsp salt" , "2 tbsp granulated sugar" , "1/4 tsp freshly ground black pepper" , "2 tbsp butter" , "1 cup whole milk" , "2 tbsp all-purpose flour" , "1/4 cup freshly grated Parmesan cheese"],
        "directions": ["In a skillet over medium heat, combine corn, heavy cream, salt, sugar, pepper, and butter." , "Whisk together the milk and flour, and stir into the corn mixture" , "Cook, stirring over medium heat until mixture is thickened and corn is cooked through" , "Remove from heat, and stir in Parmesan until melted. Serve hot"],
        "recipe_type": "sides",
        "recipe_time": 15,
        'category_id': 3
    }
];

const seedRecipes = () => Recipe.bulkCreate(recipeData);

module.exports = seedRecipes;
