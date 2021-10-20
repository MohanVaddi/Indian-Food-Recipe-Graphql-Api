import { gql } from 'apollo-server-express';
export const typeDefs = gql`
    type Query {
        recipe: [Recipe!]!
        random: [Recipe!]!
        find(srno: String!): [Recipe!]!
        findByName(recipeName: String!): [Recipe!]!
    }
    type Recipe {
        id: ID!
        Srno: String
        RecipeName: String
        TranslatedRecipeName: String
        Ingredients: String
        TranslatedIngredients: String
        PrepTimeInMins: String
        CookTimeInMins: String
        TotalTimeInMins: String
        Servings: String
        Cuisine: String
        Course: String
        Diet: String
        Instructions: String
        TranslatedInstructions: String
        URL: String
    }
`;
