const express = require('express');
const router = express.Router();
const produk = require('../controllers/produk.controller');
const handleUpload = require('../libs/handleUpload')
const Validate = require('../validation/produk/produck.validation');


router.get('/', produk.findAll);
router.get('/:id', produk.findOne);
router.post('/', handleUpload.single('image'), Validate.createProduk, produk.create);
router.put('/:id', handleUpload.single('image'), Validate.createProduk, produk.update);
router.delete('/:id', produk.delete);




module.exports = router;
