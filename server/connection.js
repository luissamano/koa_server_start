const { Sequelize } = require('sequelize');

const sequelize = new Sequelize(
  'postgres://mrrobot:pa33w0rd@localhost:5432/ecomercedb',
  {
    logging: logger.debug.bind(logger), // Alternative way to use custom logger, displays all messages
  }
);

try {
  await sequelize.authenticate();
  console.log('Connection has been established successfully.');
} catch (error) {
  console.error('Unable to connect to the database:', error);
}

export default sequelize;
