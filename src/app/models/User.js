import Sequelize, {Model} from 'sequelize';
import bcrypt from 'bcryptjs';

class User extends Model {
  static init(sequelize) {
    super.init({
      id: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
        allowNull: false,
        primaryKey: true
      },
      name: Sequelize.STRING,
      email: Sequelize.STRING,
      password: Sequelize.STRING
    }, {
      sequelize
      }
    );

    this.addHook('beforeSave', async (user) => {
      if (user.password) {
        user.password = await bcrypt.hash(user.password, 8)
      }
    });

    return this;

  }

  checkPassword(password) {
    return bcrypt.compare(password, this.password)
  }

  
}

export default User;