import Recipe from './Recipe.model.js';
export const resolvers = {
    Query: {
        recipe: async () => {
            try {
                const result = await Recipe.find({});
                return result;
            } catch (err) {
                return err;
            }
        },
        random: async () => {
            try {
                const rand = Math.floor(Math.random() * 6000 + 1);
                const result = await Recipe.find({ Srno: `${rand}` });
                return result;
            } catch (err) {
                console.log(err);
            }
        },
        find: async (_, { srno }) => {
            try {
                const result = await Recipe.find({ Srno: `${srno}` });
                return result;
            } catch (err) {
                console.log(err);
            }
        },

        findByName: async (_, { recipeName }) => {
            try {
                const result = await Recipe.find({ RecipeName: recipeName });
                return result;
            } catch (err) {
                console.log(err);
            }
        },
    },
    // Mutation: {
    //     findRecipe: async (_, { srno }) => {
    //         const result = await Recipe.find({
    //             Srno: srno,
    //         });
    //         return result;
    //     },
    // },
};
