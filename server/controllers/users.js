import User from '../models/user.js';
import sequelizeConnect from '../connection.js';

const getAllUsers = () => {
  return JSON.stringify({
    id: 2,
    name: 'Luis martin',
    description: 'Description',
  });
};

const getUserById = () => {
  //
};

const postUser = async req => {
  //
  console.log(` --------- postUser ---------------`);
  console.log(req);

  const t = await sequelizeConnect.transaction();

  try {
    const user = User.create(
      {
        firstName: item.firstName,
        lastName: item.lastName,
        email: item.email,
      },
      { transaction: t }
    );

    await t.commit();

    return JSON.stringify({
      statusCode: 201,
      message: user,
    });
  } catch (error) {
    await t.rollback();
    return JSON.stringify({
      statusCode: 500,
      message: 'Algo sucedio al realizar la transacion',
      error,
    });
  }
};

const putUser = () => {
  //
};

const deleteUser = () => {
  //
};

export { getAllUsers, getUserById, postUser, putUser, deleteUser };
