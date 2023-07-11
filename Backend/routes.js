const express = require('express');
const router = express.Router();
const User = require('./models/user.js');
const Product = require('./models/product.js');
const Cart = require('./models/cart.js');
const Order = require('./models/order.js');

router.get('/', (req, res) => {
  res.json({ message: 'Here is API!' });
});

router.get('/users', (req, res) => {
  User.find()
    .then((users) => res.json(users))
    .catch((error) => {
      console.error('An error occurred while fetching users:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    });
});

router.get('/products', (req, res) => {
  Product.find()
    .then((products) => res.json(products))
    .catch((error) => {
      console.error('An error occurred while fetching products:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    });
});

router.get('/carts', (req, res) => {
  Cart.find()
    .then((carts) => res.json(carts))
    .catch((error) => {
      console.error('An error occurred while fetching carts:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    });
});

router.get('/orders', (req, res) => {
  Order.find()
    .then((orders) => res.json(orders))
    .catch((error) => {
      console.error('An error occurred while fetching orders:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    });
});

module.exports = router;
