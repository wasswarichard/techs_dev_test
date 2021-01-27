/**
 implementing writing to a json file
 */
const fs =  require('fs');
const writeToFile = (filePath, file) =>  {
    fs.writeFile(`./${filePath}`, JSON.stringify(file), err => {
        if (err){
            console.log(err);
        }else {
            console.log('File successfully written!')
        }
    });
}
module.exports = writeToFile();

