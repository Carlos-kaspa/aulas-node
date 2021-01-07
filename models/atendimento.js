const dbConnect = require('../infraestrutura/conexaoDB')
const moment = require('moment')


class Atendimento {

    adiciona(atendimento, res) {
        const dataCriacao =  moment().format('YYYY-MM-DD HH:MM:SS')
        const data = moment(atendimento.data, 'DD/MM/YYYY').format('YYYY-MM-DD HH:MM:SS')
        console.log(dataCriacao)

        const validDate = moment(data).isSameOrAfter(dataCriacao) //retorna boolean caso a data de agendamento seja igual ou maior à de criação
        const validClient = atendimento.cliente.length >= 3 //valida a quantidade de caracteres do nome do cliente, em boolean

        const validation = [
            {
                name: "data",
                message: "data inválida",
                valid: validDate

            },
            {
                name: "cliente",
                message: "nome inválido, nome deve ter ao menos 3 caracteres",
                valid:validClient
            }
        ]

        const error = validation.filter(validation => !validation.valid)

        if(error.length > 0){
            res.status(400).json(error)
        }else{
            const atendimentoComData = {...atendimento, dataCriacao, data}
            const sql = 'INSERT INTO Atendimentos SET ?'

            dbConnect.query(sql,atendimentoComData, (err,resultado) =>{
                if(err){
                    res.status(400).json(err)
                } else {
                    res.status(201).json(resultado)
                }
            })
        }    
    }

    lista(res){

        const sql = 'SELECT * FROM Atendimentos;'

        dbConnect.query(sql,(err,resultado) => {
            if(err){
                res.status(400).json(err)
            } else {
                res.status(201).json(resultado)
            }
        })
    }

    buscaId(id,res){

        const sql = 'SELECT * FROM atendimentos WHERE id = ?;'

        dbConnect.query(sql, id , (err,resultado) => {
            if(err){
                res.status(400).json(err)
            } else {
                res.status(201).json(resultado)
            }
        })
    }

    delete(id, res){
        
        const sql = 'DELETE FROM atendimentos WHERE id = ? '

        dbConnect.query(sql, id , (err,resultado) => {
            if(err){
                res.status(400).json(err)
            } else {
                res.status(201).json(resultado)
            }
        })
    }

    altera(id, valores, res){
        if(valores.data){
            valores.data = moment(valores.data, 'DD/MM/YYYY').format('YYYY-MM-DD HH:MM:SS')
        }
        
        const sql = 'UPDATE atendimentos SET ? WHERE id = ?'

        dbConnect.query(sql, [valores,id], (err, resultado) =>{
            if(err){
                res.status(401).json(err)
            } else {
                res.status(201).json(resultado)
            }
        })
    }
}

module.exports = new Atendimento()    