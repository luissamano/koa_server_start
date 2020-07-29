const { Sequelize } = require('sequelize');

const sequelizeConnect = new Sequelize(
  'postgres://mrrobot:pa33w0rd@localhost:5432/ecomercedb',
  {
    logging: console.log,
  }
);

try {
  sequelizeConnect.authenticate();
  console.log('Connection has been established successfully.');
} catch (error) {
  console.error('Unable to connect to the database:', error);
}

export default sequelizeConnect;
