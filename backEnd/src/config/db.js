import {Sequelize}  from "sequelize";

const sequelize = new Sequelize("adopcionmascotas","adopcionMascotas","adopcion123",{
    dialect: "mysql",
    host: "localhost"
});


// Verifica la conexión
try {
    await sequelize.authenticate();
    console.log('Conexión a la base de datos establecida correctamente.');
  } catch (error) {
    console.error('No se pudo conectar a la base de datos:', error);
  }
  
  // Exporta el objeto sequelize
  export default sequelize;

