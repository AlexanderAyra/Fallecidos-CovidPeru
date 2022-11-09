const { connect } = require('mongoose');

const conectDB = async () => {
    try {
        await connect(process.env.DB_PRUEBA);
        console.log('Base de Datos Online');
    } catch (error) {
        console.log(error);
        throw new Error('Error a la hora de iniciar la base de datos');

    }
}

module.exports = {
    conectDB
}