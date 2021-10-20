import mongoose from 'mongoose';

const RecipeSchema = new mongoose.Schema({
    Srno: {
        type: String,
    },
    RecipeName: {
        type: String,
    },
    TranslatedRecipeName: {
        type: String,
    },
    Ingredients: {
        type: String,
    },
    TranslatedIngredients: {
        type: String,
    },
    PrepTimeInMins: {
        type: String,
    },
    CookTimeInMins: {
        type: String,
    },
    TotalTimeInMins: {
        type: String,
    },
    Servings: {
        type: String,
    },
    Cuisine: {
        type: String,
    },
    Course: {
        type: String,
    },
    Diet: {
        type: String,
    },
    Instructions: {
        type: String,
    },
    TranslatedInstructions: {
        type: String,
    },
    URL: {
        type: String,
    },
});

const Recipe = mongoose.model('Recipe', RecipeSchema);

export default Recipe;
