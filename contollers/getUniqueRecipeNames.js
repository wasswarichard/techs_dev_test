/**
 implementing count the number of unique recipe names and writing to a json file
 */
module.exports =  data => {
    return new Promise((resolve , reject) => {
        try {
          const uniqueRecipeNames =  data.reduce((accumulator , currentValue) => {
                let loadedRecipeNames =  accumulator.map(name => { return name.recipe});
                if(!loadedRecipeNames.includes(currentValue.recipe)){
                    accumulator.push(currentValue)
                }
                return accumulator
            }, []);
          return resolve(uniqueRecipeNames);
        }catch (error) {
            return  reject(error);
        }
    })
}
