import { expect } from 'chai';
import { camelToPascal, encodeQueryString, decodeQueryString } from './helperFunctions';

describe('camelToPascal()', () => {
  it('should, when given a camel cased string, return the same string in Pascal Case', () => {
    expect(camelToPascal('firstName')).to.deep.equal('First Name');
  });
  it('should return a Pascal Cased string when given a Pascal Cased String', () => {
    expect(camelToPascal('HelloWorld')).to.deep.equal('Hello World');
  });
  it('should throw a new error when invalid input is given', () => {
    expect(camelToPascal(4)).to.deep.equal('whoops');
  });
});

describe('encodeQueryString() and decodeQueryString() functions', () => {
  it('should hash and encode query string then decode it', () => {
    const message = 'testing 123';
    const encoded = encodeQueryString(message);
    const decoded = decodeQueryString(encoded);
    expect(decoded).to.equal(message);
  });

  it('should hash, endcode, and decode queryString that is a JS Object', () => {
    const message = { test: 123 };
    const encoded = encodeQueryString(JSON.stringify(message));
    const decoded = decodeQueryString(encoded);
    expect(JSON.parse(decoded)).to.deep.equal(message);
  });
});
