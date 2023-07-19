const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();
const Cors = require('cors');
const db = require('./models/bundle.model');
app.use('/public', express.static('public'));
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(Cors());
db.sequelize.sync({ force: false })

const productRouter = require('./routes/produk');
app.use('/produk', productRouter);
const kategoriRouter = require('./routes/kategori');
app.use('/kategori', kategoriRouter);
const frontendRouter = require('./routes/frontend');
app.use('/frontend', frontendRouter);

module.exports = app;