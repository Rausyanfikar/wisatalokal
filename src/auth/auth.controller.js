import { createUser, getUserbyName } from '../users/users.model.js';
import jwtController from 'jsonwebtoken';

export const authLogin = async (req, res) => {
  const { name, password } = req.body;

  if (!name && !password) {
    return res.status(400).json({
      meta: {
        code: 400,
        message: 'wrong password',
      },
      data: {},
    });
  }

  const user = await getUserbyName(name);

  if (!user) {
    return res.status(404).json({
      meta: {
        code: 404,
        message: 'Name not found',
      },
      data: {},
    });
  }
  if (user.password === password) {
    const token = jwtController.sign(
      {
        role: user.role,
        id: user.id,
      },
      process.env.JWT_SECRET,
      {
        expiresIn: '2d',
      }
    );
    return res.status(200).json({
      meta: {
        code: 200,
        message: 'Success login',
      },
      data: {
        token: token,
      },
    });
  }
};

export const authRegister = async (req, res) => {
  const { name, email, password } = req.body;

  if (!(name && password && email)) {
    return res.status(400).json({
      meta: {
        code: 400,
        message: 'Some input are required',
      },
      data: {},
    });
  }
  const respModel = await createUser(name, email, password);
  return res.status(200).json({
    meta: {
      code: 200,
      message: 'Success add user',
    },
    data: {
      id: respModel,
    },
  });
};
