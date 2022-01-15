const Category = require('../models/categoryModel');

const categoryCtrl = {
  getCategories: async (req, res) => {
    try {
      const categories = await Category.find();
      res.json(categories);
    } catch (err) {
      return res.status(500).json({ msg: err.message });
    }
  },
  createCategory: async (req, res) => {
    try {
      // if user has role = 1 he's admin
      // Only admins can create, delete or update the category
      const { name } = req.body;
      const category = await Category.findOne({ name });
      if (category)
        return res.status(400).json({ msg: 'This category already exist.' });

      const newCategory = new Category({ name });

      await newCategory.save();
      res.json({ msg: 'category created' });
    } catch (err) {
      return res.status(500).json({ msg: err.message });
    }
  },
};
module.exports = categoryCtrl;
