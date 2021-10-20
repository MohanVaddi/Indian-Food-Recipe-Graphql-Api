
# Indian Food Recipe API
- This API contains over 6500 recipes from all around India.
- API Endpoint: https://indian-food-recipe-graphql-api.herokuapp.com/graphql 

## Apollo Studio Sandbox:
- Try Quering this graph in the [Sandbox Explorer](https://studio.apollographql.com/sandbox/explorer) 
- Use this Endpoint Url: ```https://indian-food-recipe-graphql-api.herokuapp.com/graphql``` in the [Sandbox Explorer](https://studio.apollographql.com/sandbox/explorer) to Query this graph.


## Accessing the graph:
- You can send operations to this graph at [API Endpoint](https://indian-food-recipe-graphql-api.herokuapp.com/graphql)

## Graph Schema :
```js
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
```

## Running operations :
### Get details of all Recipes:

```js
query Query {
  recipe {
    TranslatedRecipeName
    TranslatedIngredients
    TotalTimeInMins
    Cuisine
    Servings
    Course
    Diet
    TranslatedInstructions
  }
}
```

### Get a random Indian Recipe:

```js
query Query {
  random {
    id
    Srno
    TranslatedRecipeName
    RecipeName
    Ingredients
    TranslatedIngredients
    PrepTimeInMins
    CookTimeInMins
    TotalTimeInMins
    Servings
    Cuisine
    Diet
    Course
    Instructions
    TranslatedInstructions
    URL
  }
}
```
### Find recipe by Srno.:

```js
query Query($srno: String!) {
  find(srno: $srno) {
      //recipe fields you need.
  }
}
```
### Find recipe by Name:

```js
query Query($recipeName: String!) {
  findByName(recipeName: $recipeName) { 
      //recipe fields you need.
  }
}
```

### References:
- [Indian Food Recipe Dataset](https://www.kaggle.com/kanishk307/6000-indian-food-recipes-dataset) provided by [@kanishk307](https://github.com/kanishk307).
