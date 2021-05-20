const packageJson = require('../package.json');
const schema = require('@uniswap/token-lists/src/tokenlist.schema.json');
const { expect } = require('chai');
const { getAddress } = require('@ethersproject/address');
const Ajv = require('ajv');
const buildList = require('../src/buildList');

const ajv = new Ajv({ allErrors: true, format: 'full' });
const validator = ajv.compile(schema);

describe('buildList', () => {
  const defaultTokenList = buildList();

  
  it('validates', () => {
    expect(validator(defaultTokenList)).to.equal(true);
  });
 
});
