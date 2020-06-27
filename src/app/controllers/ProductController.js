import * as Yup from 'yup';
import { Op } from 'sequelize';
import Product from '../models/Product';


class ProductController {
  async index(req, res) {
    const {filter, page = 1, limit = 20} = req.query; 

    const count = await Product.count();

    res.set('x-total-count', count)

    let products = [];

    if(filter) {
      products = await Product.findAll({
        where: {
          [Op.or]: [
            {
              name: {
                [Op.iLike]: `%${filter}%`
              }
            },
            {
              description: {
                [Op.iLike]: `%${filter}%`
              }
            },
            {
              category: {
                [Op.iLike]: `%${filter}%`
              }
            }
          ]
        },
        order: ['created_at'],
        limit: Number(limit),
        offset: (Number(page) - 1) * Number(limit)
      })      
    } else {
      products = await Product.findAll({
        order: ['created_at'],
        limit: Number(limit),
        offset: (Number(page) - 1) * Number(limit),
      });
    }

      
    return res.json(products);
  }

  async show(req, res) {
    const {id} = req.params;

    const product = await Product.findByPk(id);

    if(!product) {
      return res.status(400).json({error: 'Product does not exists'})
    }

    return res.status(200).json(product)
  }

  async store(req, res) {
    const schema = Yup.object({
      name: Yup.string().required(),
      description: Yup.string(),
      category: Yup.string().required(),
      price: Yup.number().required(),
      stock: Yup.number().required(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validation fails' });
    }

    const {id, name, description, category, price, stock} = await Product.create(req.body);
    return res.json({
      id,
      name,
      description,
      category,
      price,
      stock
    });
  }

  async update(req, res) {
    const schema = Yup.object({
      name: Yup.string().required(),
      description: Yup.string(),
      category: Yup.string().required(),
      price: Yup.number().required(),
      stock: Yup.number().required(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validation fails' });
    }

    const {id} = req.params;

    const product = await Product.findByPk(id);

    if(!product) {
      return res.status(400).json({error: 'Product does not exists'})
    }

    const productUpdated = await product.update(req.body);

    return res.json(productUpdated);

  } 

  async delete(req, res) {
    const { id } = req.params;
    const product = await Product.findByPk(id);

    // check if product exists
    if (!product) {
      return res.status(400).json({ error: 'Product does not exists' });
    }

    await product.destroy();

    return res.status(204).json();
  }
}

export default new ProductController();