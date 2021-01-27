/**
 implementing Find the postcode with most delivered recipes and writing to a json file
 */
module.exports = recipes => {
    return new Promise((resolve, reject) => {
        try {
            let postCodes = [];
            recipes.forEach(recipe => postCodes.push(recipe.postcode));
            let postCodeCounts = postCodes.reduce((accumulator, currentValue) => {
                accumulator[currentValue] = (accumulator[currentValue] || 0) + 1;
                return accumulator;
            }, {});
            const mostDeliveredPostCodeCount = Math.max(...Object.values(postCodeCounts));
            let mostDeliveredPostCode = Object.keys(postCodeCounts).filter(code => postCodeCounts[code] === mostDeliveredPostCodeCount);
            return resolve({
                "busiest_postcode" : {
                    "postcode" : mostDeliveredPostCode,
                    "delivery_count" : mostDeliveredPostCodeCount
                }
            });
        }
        catch (error){
            return reject(error)
        }
    })
}


















// let postCodes = [];
// data.forEach(recipe => {
//     postCodes.push(recipe.postcode)
// });
// let postCodeCounts = postCodes.reduce((accumulator, currentValue) => {
//     accumulator[currentValue] = (accumulator[currentValue] || 0) + 1;
//     return accumulator;
// }, {});
// const mostDeliveredPostCodeCount = Math.max(...Object.values(postCodeCounts))
// let mostDeliveredPostCode = Object.keys(postCodeCounts).filter(code => postCodeCounts[code] === mostDeliveredPostCodeCount);
// const busiest_postcode = {
//     "busiest_postcode" : {
//         "postcode" : mostDeliveredPostCode,
//         "delivery_count" : mostDeliveredPostCodeCount
//     }
// }
// app.get('/api/busiest/postcode', (req, res) => {
//     writeToFile('busiest_postcode.json', busiest_postcode);
//     res.send(busiest_postcode);
// });
