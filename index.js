const configExpress = require('./config/configExpress');
const dbConnect = require('./infraestrutura/conexaoDB');
const Tabelas = require('./infraestrutura/tabelas')

dbConnect.connect(err =>{
    if(err){
        console.log(err);
    } else {
        
        const app = configExpress();
        Tabelas.init(dbConnect);

        console.log('conectado ao db')

        
        app.listen(3000, () => {
            console.log('Server is litening on Port 3000')
        });
    }
});



