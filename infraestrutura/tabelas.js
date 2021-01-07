class Tabelas {

    init(dbConnect) {
        this.dbConnect = dbConnect

        console.log('tabelas chamadas')
        this.criarAtendimentos()
        this.criarPet()
    }

    criarAtendimentos(){

        const sql = 'CREATE TABLE IF NOT EXISTS Atendimentos (id int NOT NULL AUTO_INCREMENT, cliente varchar(50) NOT NULL, pet varchar(20), servico varchar(20) NOT NULL,status varchar(10) NOT NULL, observacoes text, PRIMARY KEY(id))'            
        
        
        this.dbConnect.query(sql,err =>{
            if(err){
                console.log(err)
            } else {
                console.log('tabela de atendimentos criada com sucesso')
            }
        })
    }

    criarPet(){
        const sql = 'CREATE TABLE IF NOT EXISTS pets (id int NOT NULL AUTO_INCREMENT, nome varchar(20) NOT NULL, imagem varchar(200), PRIMARY KEY (id))'

                
        this.dbConnect.query(sql,err =>{
            if(err){
                console.log(err)
            } else {
                console.log('tabela de pets criada com sucesso')
            }
        })
    }

}

module.exports = new Tabelas