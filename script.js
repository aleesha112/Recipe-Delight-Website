document.addEventListener('DOMContentLoaded', () => {
    const recipeDetails = {
        pancake: {
            title: "Delicious Pancakes",
            image: "pancakes.jpg",
            description: "Pancake: Whisk 1 cup flour, 2 tablespoons sugar, 2 teaspoons baking powder, and 1/2 teaspoon salt. Mix with 1 cup milk, 1 egg, and 2 tablespoons melted butter. Cook in a hot pan until bubbles form, then flip. 🥞🍯."
        },
        spaghetti: {
            title: "Spaghetti Carbonara",
            image: "sapghatti.jpg",
            description: "Spaghetti Carbonara: Cook 250g spaghetti. In a bowl, mix 2 eggs, 1 cup Parmesan cheese, and 1/2 teaspoon black pepper. Cook 150g pancetta until crispy, toss with spaghetti, then mix in egg mixture. 🍝🥓"
        },
        chicken: {
            title: "Chicken Curry",
            image: "chicken curry.png",
            description: "Chicken Curry: Sauté 500g chicken with 1 chopped onion, 2 cloves garlic, and 1 tablespoon ginger. Add 2 tablespoons curry powder, 1 can coconut milk, and 1 cup chopped tomatoes. Simmer until chicken is cooked. 🍛🍗"
        },
        cake: {
            title: "Chocolate Cake",
            image: "chocolate cake.jpg",
            description: "Chocolate Cake: Mix 1 ¾ cups flour, ¾ cup cocoa powder, 1 ½ teaspoons baking powder, and 1 ½ cups sugar. Combine with 2 eggs, 1 cup milk, and ½ cup oil. Bake at 175°C (350°F) for 30-35 minutes. 🍫🎂"
        },
        biryani: {
            title: "Delicious Biryani",
            image: "biryani.png",
            description: "Biryani: Marinate 500g meat in 1 cup yogurt and biryani spices. Layer with 2 cups partially cooked basmati rice, fried onions, and saffron milk in a pot. Cook on low heat until done. 🍚🍗"
        },
        "chinese-rice": {
            title: "Chinese Rice",
            image: "chinese-rice.png",
            description: "Chinese Rice: Stir-fry 1 cup chopped vegetables and 2 cloves garlic in 2 tablespoons oil. Add 2 cups cooked rice, 2 tablespoons soy sauce, and 1 teaspoon sesame oil. Cook until heated through. 🍚🥢"
        },
        custard: {
            title: "Classic Custard",
            image: "custard.png",
            description: "Custard: Heat 2 cups milk with 1 teaspoon vanilla. Whisk 4 eggs with ½ cup sugar. Slowly add hot milk to eggs, then cook until thickened. Chill before serving. 🍮🥄"
        },
        "fruit-trifle": {
            title: "Fruit Trifle",
            image: "fruit-trifle.png",
            description: "Fruit Trifle: Layer 4 cups sponge cake cubes with 2 cups fresh fruit, 2 cups custard, and 1 cup whipped cream. Repeat layers and chill before serving. 🍓🍰"
        },
        lasagna: {
            title: "Classic Lasagna",
            image: "lasagna.png",
            description: "Lasagna: Layer 12 cooked lasagna noodles with 2 cups ricotta cheese mixed with spinach, 4 cups meat sauce, and 2 cups shredded mozzarella. Bake at 190°C (375°F) for 45 minutes. 🍝🧀"
        },
        tacos: {
            title: "Spicy Tacos",
            image: "tacos.png",
            description: "Tacos: Cook 500g ground beef with taco seasoning. Serve in taco shells with 1 cup shredded lettuce, 1 cup diced tomatoes, 1 cup cheese, and salsa. Add sour cream and lime juice. 🌮🌶️"
        },
        muffins: {
            title: "Blueberry Muffins",
            image: "muffins.png",
            description: "Muffins: Mix 2 cups flour, 1 cup sugar, 2 teaspoons baking powder, and ½ teaspoon salt. Combine with 1 cup milk, 2 eggs, and ¼ cup melted butter. Fold in 1 cup blueberries and bake at 190°C (375°F) for 20-25 minutes. 🧁🫐"
        },
        sushi: {
            title: "California Roll Sushi",
            image: "sushi.png",
            description: "Sushi: Prepare 2 cups sushi rice with rice vinegar. Lay a nori sheet on a bamboo mat, spread rice, and add crab sticks, avocado, and cucumber. Roll tightly, slice, and serve with soy sauce. 🍣🥑"
        },
        "chicken-malai-tikka": {
            title: "Chicken Malai Tikka & Chicken Malai Boti",
            image: "chicken-malai-tikka.jpg",
            description: "Chicken Malai Tikka: Marinate 500g chicken pieces in 1 cup yogurt, 2 tablespoons lemon juice, 2 tablespoons ginger-garlic paste, and 1 tablespoon garam masala. Let it rest for 2 hours. Grill or bake at 200°C (390°F) for 20-25 minutes until golden brown. 🍗🔥"
        },
        "beef-korma": {
            title: "Beef Korma",
            image: "beef-korma.jpg",
            description: "Beef Korma: Cook 500g beef chunks with 1 chopped onion, 2 cloves garlic, 1 tablespoon ginger, and 2 tablespoons korma paste. Add 1 cup yogurt and 1 cup coconut milk, simmer until beef is tender (about 1 hour). Garnish with cilantro. 🥘🍛"
        },
        "chapli-kabab": {
            title: "Chapli Kabab",
            image: "chapli-kabab.jpg",
            description: "Chapli Kabab: Mix 500g minced beef with 1 chopped onion, 1 teaspoon cumin seeds, 1 teaspoon coriander seeds, 1 tablespoon chili flakes, and fresh coriander. Shape into patties and fry until crispy. 🌶️🍖"
        },
        "chicken-jalfrezi": {
            title: "Chicken Jalfrezi",
            image: "chicken-jalfrezi.jpg",
            description: "Chicken Jalfrezi: Sauté 500g chicken pieces with 1 chopped onion, 2 cloves garlic, 1 chopped bell pepper, and 2 tomatoes. Add 2 tablespoons jalfrezi paste and cook until chicken is done and sauce is thickened. 🌶️🍗"
        },
        "chicken-soup": {
            title: "Chicken Soup",
            image: "chicken-soup.jpg",
            description: "Chicken Soup: Boil 500g chicken with 1 chopped onion, 2 carrots, 2 celery stalks, and 4 cups chicken broth. Simmer for 45 minutes, then shred the chicken and return it to the pot. Add herbs and salt to taste. 🍲🍗"
        },
        "yak-stew": {
            title: "Yak Stew",
            image: "yak-stew.jpg",
            description: "Yak Stew: Cook 500g yak meat with 1 chopped onion, 2 cloves garlic, 1 cup beef broth, and 2 carrots. Simmer for 1-2 hours until meat is tender. Add salt and pepper to taste. 🐂🍲"
        },
        "White sauce pasta": {
            title: "White Sauce Pasta",
            image: "White sauce pasta.jpg",
            description: "White Sauce Pasta: Cook 300g pasta. In a pan, melt 2 tablespoons butter, add 2 tablespoons flour, and slowly whisk in 1 cup milk. Stir in 1/2 cup Parmesan cheese and 1 clove garlic. Mix with pasta and serve. 🍝🧀"
        },
        "reshmi-kabab": {
            title: "Reshmi Kabab",
            image: "reshmi-kabab.jpg",
            description: "Reshmi Kabab: Marinate 500g chicken in 1 cup yogurt, 2 tablespoons cream, 1 tablespoon ginger-garlic paste, and 1 tablespoon spices. Grill or bake at 200°C (390°F) for 20 minutes. 🍗✨"
        }
    };

    document.querySelectorAll('.read-more').forEach(button => {
        button.addEventListener('click', (event) => {
            event.preventDefault();
            const recipeCard = button.closest('.recipe-card');
            const recipeId = recipeCard.getAttribute('data-recipe');
            showRecipe(recipeId);
        });
    });

    function showRecipe(recipeId) {
        const recipe = recipeDetails[recipeId];
        if (!recipe) {
            console.error('Recipe not found:', recipeId);
            return;
        }

        // Update the recipe details section
        const recipeDetailsSection = document.getElementById('recipe-details');
        if (recipeDetailsSection) {
            document.getElementById('recipe-title').textContent = recipe.title;
            document.getElementById('recipe-image').src = recipe.image;
            document.getElementById('recipe-image').alt = recipe.title;
            document.getElementById('recipe-description').textContent = recipe.description;

            recipeDetailsSection.classList.add('show'); // Show the section
        }
    }

    window.closeRecipe = function() {
        document.getElementById('recipe-details').classList.remove('show');
    };
});

document.addEventListener('DOMContentLoaded', () => {
    const cookingSection = document.getElementById('cooking-section');
    
    // Show the animation section (example)
    setTimeout(() => {
        cookingSection.style.display = 'block';
    }, 1000); // Delay before animation starts (in milliseconds)
});




