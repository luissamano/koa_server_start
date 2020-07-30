const { Sequelize } = require('sequelize');

const sequelizeConnect = new Sequelize(
  'postgres://mrrobot:pa33w0rd@localhost:5432/ecomercedb',
  {
    logging: console.log,
  }
);

try {
  sequelizeConnect.authenticate();
  console.log('Conexion establecidad de manera correcta.');
} catch (error) {
  console.error('No se pudo realizar la conexion:', error);
}

export default sequelizeConnect;
