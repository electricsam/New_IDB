import { expect } from 'chai';
import { oddEven, camelToPascal, encodeQueryString, decodeQueryString } from './helperFunctions'

describe("oddEven() helper function", ()=>{
  it("should return a string", ()=>{
    let num = 2;
    expect(typeof oddEven(num) === "string").to.be.true;
  })

  it("should return 'even' when passed an even integer", ()=>{
    expect(oddEven(10)).to.deep.equal('even');
  })

  it("should return 'odd' when passed an odd integer", ()=>{
    expect(oddEven(5)).to.deep.equal('odd');
  })

  it("should throw a new error when invalid input is given", ()=>{
    expect(oddEven('string')).to.deep.equal('whoops');
    expect(oddEven(4.5)).to.deep.equal('whoops');
  })
})

describe("camelToPascal()", ()=>{
  it("should, when given a camel cased string, return the same string in Pascal Case", ()=>{
    expect(camelToPascal('firstName')).to.deep.equal('First Name');
  })
  it("should return a Pascal Cased string when given a Pascal Cased String", ()=>{
    expect(camelToPascal('HelloWorld')).to.deep.equal('Hello World');
  })
  it("should throw a new error when invalid input is given", ()=>{
        expect(camelToPascal(4)).to.deep.equal('whoops');
  })
})

describe("encodeQueryString() and decodeQueryString() functions", () => {
  it("should hash and encode query string then decode it", () => {
    let message = 'testing 123';
    let encoded = encodeQueryString(message);
    let decoded = decodeQueryString(encoded);
    expect(decoded).to.equal(message);
  })

  it("should hash, endcode, and decode queryString that is a JS Object", () => {
    let message = {test: 123};
    let encoded = encodeQueryString(JSON.stringify(message));
    let decoded = decodeQueryString(encoded);
    expect(JSON.parse(decoded)).to.deep.equal(message);
  })
})