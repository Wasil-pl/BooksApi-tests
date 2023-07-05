const formatFullname = require('../formatFullname.js');
const expect = require('chai').expect;

describe('FormatFullname', () => {
  it('should return an error if "fullName" arg is not a string', () => {
    expect(formatFullname(undefined, 'Doe')).to.equal('Error');
    expect(formatFullname(12, 'Doe')).to.equal('Error');
    expect(formatFullname({}, 'Doe')).to.equal('Error');
    expect(formatFullname([], 'Doe')).to.equal('Error');
    expect(formatFullname(function () {}, 'Doe')).to.equal('Error');
  });

  it('should return an error if "fullName" arg length is 0', () => {
    expect(formatFullname('', 'Doe')).to.equal('Error');
  });

  it('should return an error if "fullName" arg is not in format <firstName> <lastName>', () => {
    expect(formatFullname('John Doe Test', 'Doe')).to.equal('Error');
    expect(formatFullname('John', 'Doe')).to.equal('Error');
  });

  it('shoould return good format "firstName" "lastName" if proper args', () => {
    expect(formatFullname('john doe', 'Doe')).to.equal('John Doe');
    expect(formatFullname('JOHN DOE', 'Doe')).to.equal('John Doe');
    expect(formatFullname('jOhN dOe', 'Doe')).to.equal('John Doe');
  });
});
