import * as Yup from 'yup';
import User from '../models/User';
import '../../database';
import AppError from '../../errors/AppError';

class UserController {
  async store(req, res) {
    const schema = Yup.object({
      name: Yup.string().required(),
      email: Yup.string().email().required(),
      password: Yup.string().required().min(3),
    });

    if (!(await schema.isValid(req.body))) {
      throw new AppError('Validation fails', 400)
    }

    const userExists = await User.findOne({where: {email: req.body.email}});

    if (userExists) {
      throw new AppError('User already exists', 400)
    }

    const {id, name, email} = await User.create(req.body);
    return res.json({
      id,
      name,
      email
    });
  }
 
}

export default new UserController();