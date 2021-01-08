const { throws } = require('assert');
const fs = require('fs');


module.exports = (path,filename,callback) => {

    const fileName = path.split('.') //separa os elementos do path criando um array
    const fileExtension = fileName.slice(-1) //o ultimo índice do array é a extensão o arquivo
    // const fileExtension = path.extname(path) path.extname também busca qual é a extensão do arquivo
    const newPath = `./assets/imagens/${filename}.${fileExtension}`
  
    switch(fileExtension[0]){
        case 'jpg':
        case 'jpeg':
        case 'png':
        case 'bitmap':
            dataStream(path,newPath)
            break;

        default:
            throw "formato de arquivo inválido"   
    }

    

    function dataStream(path,newPath){
        fs.createReadStream(path)
        .pipe(fs.createWriteStream(newPath))
        .on('finish',() => callback(newPath))
    }
}
