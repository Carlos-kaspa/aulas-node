const Pet = require('../models/pets');

module.exports = app => { 

    app.post('/pet', (req, res) => {
        const pet = req.body

        Pet.adiciona(pet,res)     
    })

    app.get('/pet', (req,res) => {
        Pet.listaPet(res)
    })

    app.delete('/pet/:id', (req,res) =>{
        const id = parseInt(req.params.id)
        Pet.delete(id, res)
    })

    app.patch('/pet/:id', (req,res) => {
        const id = parseInt(req.params.id)
        const valores = req.body
        Pet.altera(id,valores,res)
    })
}