const boom = require('@hapi/boom');
const { models } = require('../libs/sequelize');

class UserService {
  constructor() {}

  async create(data) {
    const newUser = await models.User.create(data);
    return newUser;
  }

  async find() {
    const rta = await models.User.findAll();
    /*  const query = 'SELECT * FROM tasks';
      const rta = await pool.query(query); */
    return rta;
  }

  async findOne(id) {
    const rta = await models.User.findByPk(id);
    if (!rta) {
      throw boom.notFound('User not found');
    }
    return rta;
  }

  async update(id, changes) {
    const user = await this.findOne(id);
    const rta = await user.update(changes);
    return rta;
  }

  async delete(id) {
    const deleted_at = new Date().toISOString();

    const user = await this.findOne(id);
    //const rta = await user.update(deleted_at); */
    return { id: id, deleted_at: deleted_at };
  }
}

module.exports = UserService;
