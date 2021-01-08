const fs =  require('fs');
const data = require('./data.json');
// const data = JSON.parse(fs.readFileSync('./data.json', "utf-8"));

/**
 implementing writing to a json file
 */
const writeToFile = (filePath, file) =>  {
    fs.writeFile(`./${filePath}`, JSON.stringify(file), err => {
        if (err){
            console.log(err);
        }else {
            console.log('File successfully written!')
        }
    });
}

/**
 implementing count the number of unique recipe names and writing to a json file
 */
const uniqueRecipeNames = data.reduce((accumulatorumulator , currentValue) => {
    let loadedRecipeNames =  accumulatorumulator.map(name => { return name.recipe});
    if(!loadedRecipeNames.includes(currentValue.recipe)){
        accumulatorumulator.push(currentValue)
    }
    return accumulatorumulator
}, []);
const uniqueRecipeCount = {
    'unique_recipe_count' : uniqueRecipeNames.length
}
writeToFile('unique_recipe_count.json', uniqueRecipeCount);

/**
 implementing Count the number of occurences for each unique recipe name and writing to a json file
 */
const count_per_recipe = [];
uniqueRecipeNames.forEach(uniqueRecipeName => {
    const occurrence =  data.filter(nonUniqueRecipeName => {
        return nonUniqueRecipeName.recipe === uniqueRecipeName.recipe
    })
    const uniqueRecipeCount = {
        "recipe" : uniqueRecipeName.recipe,
        "count": occurrence.length
    }
    count_per_recipe.push(uniqueRecipeCount)
});
const countPerRecipe =  {
    "count_per_recipe": count_per_recipe
}
writeToFile('count_per_recipe.json', countPerRecipe);


/**
 implementing Find the postcode with most delivered recipes and writing to a json file
 */
let postCodes = [];
data.forEach(recipe => {
    postCodes.push(recipe.postcode)
});
let postCodeCounts = postCodes.reduce((accumulator, currentValue) => {
    accumulator[currentValue] = (accumulator[currentValue] || 0) + 1;
    return accumulator;
}, {});
const mostDeliveredPostCodeCount = Math.max(...Object.values(postCodeCounts))
let mostDeliveredPostCode = Object.keys(postCodeCounts).filter(code => postCodeCounts[code] === mostDeliveredPostCodeCount);
const busiest_postcode = {
    "busiest_postcode" : {
        "postcode" : mostDeliveredPostCode,
        "delivery_count" : mostDeliveredPostCodeCount
    }
}
writeToFile('busiest_postcode.json', busiest_postcode);


/**
 List the recipe names (alphabetically ordered) that contain in their name one of the following words:
 Potato
 Veggie
 Mushroom and writing to a json file
 */

const recipeNamesArray = [];
data.forEach(recipeName => {
    recipeNamesArray.push(recipeName.recipe)
});
const sortedSearchPotatoResult = [];
recipeNamesArray.forEach(name => {
    if (name.includes('potato')){
        sortedSearchPotatoResult.push(name)
    }
});
const sortedSearchVeggieResult = [];
recipeNamesArray.forEach(name => {
    if (name.includes('Veggie')){
        sortedSearchVeggieResult.push(name)
    }
});
const sortedSearchMushroomResult = [];
recipeNamesArray.forEach(name => {
    if (name.includes('Mushroom')){
        sortedSearchMushroomResult.push(name)
    }
});
const match_by_name =  {
    "potato" : sortedSearchPotatoResult,
    "veggie" : sortedSearchVeggieResult,
    "mushroom" : sortedSearchMushroomResult
}
writeToFile('match_by_name.json', match_by_name);
