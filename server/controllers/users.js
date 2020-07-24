import User from '../models/user.js';

const getAllUsers = () => {
  //
};

const getUserById = () => {
  //
};

const postUser = async (req, res) => {
  //
  const { newUsers } = req;

  const t = await sequelize.transaction();

  try {
    newUsers.forEach(item => {
      const user = User.create(
        {
          firstName: item.firstName,
          lastName: item.lastName,
          email: item.email,
        },
        { transaction: t }
      );
    });

    await t.commit();

    return JSON.stringify({
      statusCode: 201,
      message: `Se crearon ${newUsers.count} usuarios nuevos`,
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
