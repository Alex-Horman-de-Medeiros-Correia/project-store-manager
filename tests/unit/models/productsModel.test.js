const { expect } = require('chai');
const sinon = require('sinon');

const connection = require('../../../src/models/connection');
const pModel = require('../../../src/models/pModel');

const { products, productsFromDB } = require('./mocks/productsModelMocks');

describe('Testes no Model de products', function () {
  it('GET com o id do model products', async function () {
    sinon.stub(connection, 'execute').resolves([[productsFromDB[0]]]);

    const result = await pModel.encontrandoProdutoPeloId(1);

    expect(result).to.be.deep.equal(products[0]);
  });

  it("GET com os ids do models products", async function () {
    sinon.stub(connection, "execute").resolves([[productsFromDB[0]]]);

    const [result] = await pModel.encontrandoTodosOsIds();

    expect(result).to.be.deep.equal(products[0]);
  });

  this.afterEach(sinon.restore);
})
