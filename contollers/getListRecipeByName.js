const  uniqueRecipeNames =  require('./getUniqueRecipeNames');
module.exports = (recipes, params) => {
    return new Promise ((resolve, reject) => {
        try {
            uniqueRecipeNames(recipes)
                .then(recipeNames => {
                    const matchedRecipeNames = recipeNames.filter(recipeName => {
                        return  params.some(param => recipeName.recipe.includes(param));
                    })
                    return resolve(matchedRecipeNames);
                })
                .catch(error => reject(error))
        } catch (error){
            reject(error);
        }
    });
}