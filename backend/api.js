const express = require('express');
const router = express.Router();

const users = [{ user: 'admin', pass: '1234' }];
let products = [{ id: 1, name: 'Café', price: 5, category: 'Bebidas', image_url: '' }];
let orders = [];

router.post('/login', (req, res) => {
  const { user, pass } = req.body;
  const found = users.find(u => u.user === user && u.pass === pass);
  if (found) res.status(200).json({ success: true });
  else res.status(401).json({ success: false, message: 'Credenciales inválidas' });
});

router.get('/products', (req, res) => {
  res.json(products);
});

router.post('/products', (req, res) => {
  const { name, price, category, image_url } = req.body;
  const id = products.length ? products[products.length - 1].id + 1 : 1;
  products.push({ id, name, price, category, image_url });
  res.status(201).json({ message: 'Producto agregado' });
});

router.delete('/products/:id', (req, res) => {
  const id = parseInt(req.params.id);
  products = products.filter(p => p.id !== id);
  res.json({ message: 'Producto eliminado' });
});

router.get('/orders', (req, res) => {
  res.json(orders);
});

module.exports = router;
