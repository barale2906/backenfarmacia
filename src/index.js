import app from './app.js'
import {sequelize} from './database/bd.js'



async function main(){
    try{
        //await sequelize.authenticate();
        await sequelize.sync({force:false})
        console.log("conectado")
        app.listen(4000)
        console.log('Server is listening on port: ', 4000)
    } catch(err) {
        console.error('upps', err)
    }
}

main();