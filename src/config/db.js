const { connect } = require("mongoose");
const config = require("./config");

const conectDB = async () => {
    try {
        await connect(config.mongoose.url);
        console.log("Base de Datos Online");
    } catch (error) {
        console.log(error);
        throw new Error("Error a la hora de iniciar la base de datos");
    }
};

module.exports = {
    conectDB,
};
