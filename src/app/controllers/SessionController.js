import jwt from 'jsonwebtoken';

import authConfig from '../../config/auth';
import User from '../models/User';
import '../../database';
import AppError from '../../errors/AppError';

class SessionController{  
  async store(req, res) {
    const {email, password} = req.body;

    const user = await User.findOne({where: {email}});

    if(!user) {
      throw new AppError('Incorrect email/password combination', 401)
    }
    
    if(!(await user.checkPassword(password))) {
      throw new AppError('Incorrect email/password combination', 401)
    }

    const {id, name} = user;

    return res.json({
      user: {
        id,
        name,
        email
      },
      token: jwt.sign({ id }, authConfig.secret, {
        expiresIn: authConfig.expiresIn
      })
    })
  }
}

export default new SessionController();