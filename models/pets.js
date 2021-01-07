const dbConnect = require('../infraestrutura/conexaoDB')
const fileUpload = require('../arquivos/fileUpload.js')

class Pets {

    adiciona(pet,res){
        
        const sql = 'INSERT INTO pets SET ?'

        fileUpload(pet.imagem,pet.nome, (newPath) => {
            const newPet = {    
                nome: pet.nome,
                imagem: newPath
            }
            dbConnect.query(sql,newPet,(err, resultado)  =>{
                if(err){
                    res.status(401).json(err)
                } else {
                    res.status(201).json(resultado)
                }
            })
        })
    }

    listaPet(res){
        const sql = 'SELECT * FROM pets'

        dbConnect.query(sql, (err, resultado) => {
            if(err){
                res.status(401).json(err)
            } else {
                res.status(201).json(resultado)
            }
        })
    }

    delete(id, res){

        const sql = 'DELETE FROM pets WHERE id = ?'

        dbConnect.query(sql, id, (err, resultado) => {
            if(err){
                res.status(401).json(err)
            } else {
                res.status(201).json(resultado)
            }
        })
    }

    altera(id, valores, res){
        const sql = 'UPDATE pets SET ? WHERE id = ?'
        dbConnect.query(sql, [valores,id], (err, resultado) => {
            if(err){
                res.status(401).json(err)
            } else {
                res.status(201).json(resultado)
            }
        })
    }
}

module.exports = new Pets();