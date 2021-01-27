/**
 implementing Count the number of occurences for each unique recipe name and writing to a json file
 */
const getUniqueRecipeNames =  require('./getUniqueRecipeNames');
module.exports = recipes => {
    return new Promise((resolve, reject) => {
        try {
            let countPerRecipe = [];
            getUniqueRecipeNames(recipes)
                .then(uniqueRecipeNames => {
                    uniqueRecipeNames
                        .forEach(uniqueRecipeName => {
                        const occurrence =  recipes.filter(nonUniqueRecipeName => {
                            return nonUniqueRecipeName.recipe === uniqueRecipeName.recipe
                        });
                        countPerRecipe.push({
                            "recipe" : uniqueRecipeName.recipe,
                            "count": occurrence.length
                        })
                    });
                    resolve(countPerRecipe);
                })
                .catch(error => reject(error))
        } catch (error){
            return reject(error)
        }
    })
}
