const Products = require('../models/productModel');

// Filter, sorting and paginating
class APIfeatures {
  constructor(query, queryString) {
    this.query = query;
    this.queryString = queryString;
  }
  filtering() {}
  sorting() {}
  paginating() {}
}

const productCtrl = {
  getProducts: async (req, res) => {
    try {
      console.log(req.query);
      const features = new APIfeatures(Products.find(), req.query);
      const products = await features.query;
      res.json(products);
    } catch (err) {
      return res.status(500).json({ msg: err.message });
    }
  },
  createProduct: async (req, res) => {
    try {
      const {
        product_id,
        title,
        price,
        description,
        content,
        images,
        category,
      } = req.body;
      if (!images) return res.status(400).json({ msg: 'No image uploaded' });

      const product = await Products.findOne({ product_id });
      if (product)
        return res.status(400).json({ msg: 'This product already exists' });

      const newProduct = new Products({
        product_id,
        title: title.toLowerCase(),
        price,
        description,
        content,
        images,
        category,
      });
      await newProduct.save();
      res.json('Product created.');
    } catch (err) {
      return res.status(500).json({ msg: err.message });
    }
  },
  deleteProduct: async (req, res) => {
    try {
      await Products.findByIdAndDelete(req.params.id);
      res.json({ msg: 'The product has been deleted.' });
    } catch (err) {
      return res.status(500).json({ msg: err.message });
    }
  },
  updateProduct: async (req, res) => {
    try {
      const {
        product_id,
        title,
        price,
        description,
        content,
        images,
        category,
      } = req.body;
      if (!images) return res.status(400).json({ msg: 'No image uploaded.' });

      await Products.findByIdAndUpdate(
        { _id: req.params.id },
        {
          product_id,
          title: title.toLowerCase(),
          price,
          description,
          content,
          images,
          category,
        }
      );
      res.json({ msg: 'product updated.' });
    } catch (err) {
      return res.status(500).json({ msg: err.message });
    }
  },
};

module.exports = productCtrl;
