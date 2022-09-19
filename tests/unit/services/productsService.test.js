const { expect } = require('chai');
const sinon = require('sinon');
const pModel = require('../../../src/models/pModel');
const products = require('../../../src/services/validations/product.service');
const { produtoComId } = require('./mocks/productsServiceMocks');

describe('Verificando o service products', function () {
  describe('Procura de id que não existe', function () {
    it("id inexistente", async function () {
      sinon.stub(pModel, "findByProductId").resolves(undefined);

      const body = { Id: 1 };
      const error = await products.getWaitingProducts(body);
      expect(error.type).to.equal(null);
      expect(error.message).to.equal(undefined);
    });
  });
});
