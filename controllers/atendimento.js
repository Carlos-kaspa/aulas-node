const Atendimento = require('../models/atendimento')
module.exports = (app) => {

        app.get("/atendimento" , (req, res) => {
            Atendimento.lista(res)
        });

        app.get("/atendimento/:id" , (req, res) => {
            const id = parseInt(req.params.id)

            Atendimento.buscaId(id, res)
        });

        app.post("/atendimento", (req,res) => {
            const atendimento = req.body
            Atendimento.adiciona(atendimento, res)
        });

        app.delete("/atendimento/:id" , (req, res) =>{
            const id = parseInt(req.params.id)
            Atendimento.delete(id, res)
        });

        app.patch("/atendimento/:id" , (req , res) => {
            const id = parseInt(req.params.id)
            const valores = req.body

            Atendimento.altera(id,valores,res)
        });



};