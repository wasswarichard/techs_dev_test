const http = require('http');
const url  = require('url');
const json =  require('./utilities/toJson');
const constants = require('./utilities/constants');
const uniqueRecipeCount =  require('./contollers/getUniqueRecipeNames');
const countPerRecipe =  require('./contollers/getCountPerRecipe');
const listRecipeBySearchName = require('./contollers/getListRecipeByName');
const busiestPostcode = require('./contollers/getBusiestPostcode');
const data = require('./data.json');

// const fs = require('fs');
// const path = require('path');
// let filesList;
// fs.readdir(path.resolve(__dirname), (err, files) =>{
//     filesList = files.filter((file) =>{
//         return path.extname(file).toLowerCase() === '.json'
//     });
//     console.log(filesList);
// });

const server = http.createServer((request, response) => {
    // handle http request here
    response.setHeader('Content-Type', 'application/json');
    response.setHeader('Content-disposition', 'attachment; filename= result.json');
    // extract recipe names search query params
    const url_parts =  url.parse(request.url);
    const query = url_parts.query;
    const search_words =  [];
    query && query.split('&').forEach(value => search_words.push(value.split('=')[1]));

    switch (request.method){
        case 'POST':
            switch (url_parts.pathname){
                case '/':
                    response.statusCode = 200;
                    return response.end(
                        json({
                            message: constants.running,
                        })
                    );
                case '/match_by_recipe_name':
                    try{
                        if(search_words.length > 0){
                            listRecipeBySearchName(data, search_words)
                                .then(recipes => {
                                    response.statusCode = 200;
                                    return response.end(json({recipes}))
                                })
                                .catch(error => {
                                    response.statusCode = 500;
                                    throw error;
                                });
                            return;
                        }else {
                            throw new Error('query params are missing')
                        }

                    }catch (error) {
                        return response.end(json({error : error.message}))
                    }
                default: {
                    response.statusCode = 400;
                    response.end(json({error: constants[response.statusCode]}))
                }
                return;
            }
        case 'GET':
            switch (url_parts.pathname){
                case '/':
                    response.statusCode = 200;
                    return response.end(
                        json({
                            message: constants.running,
                        })
                    );
                case '/unique_recipe_count':
                    try{
                        uniqueRecipeCount(data)
                            .then(recipes => {
                                response.statusCode = 200;
                                return response.end(json({recipes}))
                            })
                            .catch(error => {
                                response.statusCode = 500;
                                throw error;
                            });
                        return;
                    }catch (error) {
                        return response.end(json({error : error.message}))
                    }
                case '/count_per_recipe':
                    try{
                        countPerRecipe(data)
                            .then(recipes => {
                                response.statusCode = 200;
                                return response.end(json({recipes}))
                            })
                            .catch(error => {
                                response.statusCode = 500;
                                throw error;
                            });
                        return;
                    }catch (error) {
                        return response.end(json({error : error.message}))
                    }
                case '/busiest_postcode':
                    try{
                        busiestPostcode(data)
                            .then(recipes => {
                                response.statusCode = 200;
                                return response.end(json({recipes}))
                            })
                            .catch(error => {
                                response.statusCode = 500;
                                throw error
                            });
                        return ;
                    }catch (error){
                        return response.end(json({error: error.message}))
                     }
                default: {
                    response.statusCode = 400;
                    response.end(json({error: constants[response.statusCode]}))
                    }
                    return;
            }
        default: {
            response.statusCode = 400;
            response.end(json({error: constants[response.statusCode]}))
        }
    }
});
// const port = process.env.PORT || 3001;
const port  = 3002
const hostname = 'localhost';
server.listen(port, hostname, () => console.log(`Backend Server running on http://${hostname}:${port} ...`));
// act on any unhandled errors/exceptions
process.on('uncaughtException', (error) => {
    console.error(error.message);
});