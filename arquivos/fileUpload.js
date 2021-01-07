const fs = require('fs');


module.exports = (path,filename,callback) => {

    const fileName = path.split('.') //separa os elementos do path criando um array
    const fileExtension = fileName.slice(-1) //o ultimo índice do array é a extensão o arquivo
    // const fileExtension = path.extname(path) path.extname também busca qual é a extensão do arquivo
    
    const newPath = `./assets/imagens/${filename}.${fileExtension}`

    console.log(newPath)

    fs.createReadStream(path)
    .pipe(fs.createWriteStream(newPath))
    .on('finish',() => callback(newPath))
}
