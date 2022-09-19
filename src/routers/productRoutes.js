const express = require('express');
const produtoCon = require('../controllers/produtoCon');
const pMidle = require('../middlewares/pMidle');
const charactersMiddle = require('../middlewares/CaMid');

const router = express.Router();

router.get('/', produtoCon.funcProduto);

router.get('/:id', pMidle, produtoCon.funcProduto);

router.post('/', charactersMiddle, produtoCon.create);

router.delete('/:id', pMidle, produtoCon.deletandoP);

router.put(
  '/:id',
  charactersMiddle,
  pMidle,
  produtoCon.atualizandoProduto,
);

module.exports = router;
