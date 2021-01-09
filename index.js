const express = require('express');
const  app = express();
const fs =  require('fs');
const data = require('./data.json');

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
app.get('/api/unique/recipe/count', (req, res) => {
    writeToFile('unique_recipe_count.json', uniqueRecipeCount);
    res.send(uniqueRecipeCount);
});


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
app.get('/api/count/per/recipe', (req, res) => {
    writeToFile('count_per_recipe.json', countPerRecipe);
    res.send(countPerRecipe);
});

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
app.get('/api/busiest/postcode', (req, res) => {
    writeToFile('busiest_postcode.json', busiest_postcode);
    res.send(busiest_postcode);
});

const recipeNamesArray = [];
data.forEach(recipeName => {
    recipeNamesArray.push(recipeName.recipe)
});
let sortedSearchResults = [];
const matchByName = (searchParam) => recipeNamesArray.forEach(name => {
    if (name.includes(searchParam)){
        sortedSearchResults.push(name)

    }
});
app.get('/api/match/name/potato', (req , res) => {
    const searchParam = 'potato';
    matchByName(searchParam);
    res.send(sortedSearchResults);
});
app.get('/api/match/name/veggie', (req , res) => {
    const searchParam = 'Veggie';
    matchByName(searchParam);
    res.send(sortedSearchResults);
});
app.get('/api/match/name/mushroom', (req , res) => {
    const searchParam = 'Mushroom';
    matchByName(searchParam);
    res.send(sortedSearchResults);
});

const port = process.env.PORT || 3000;
const hostname = 'localhost';
app.listen(port, () => console.log(`Backend Server running on port http://${hostname}:${port} ...`))