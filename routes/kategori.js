const express = require('express');
const router = express.Router();
const kategori = require('../controllers/kategori.controller');
const Validate = require('../validation/kategori/kategori.validation')


router.get('/', kategori.findAll);
router.get('/:id', kategori.findOne);
router.post('/', Validate.createKategori, kategori.create);
router.put('/:id', Validate.createKategori, kategori.update);
router.delete('/:id', kategori.delete);

module.exports = router;
