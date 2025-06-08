const express = require('express');
const apiRoutes = require('./api');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());
app.use('/api', apiRoutes);

app.listen(3000, () => {
  console.log('Backend corriendo en http://localhost:3000');
});
