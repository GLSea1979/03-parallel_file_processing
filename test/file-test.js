'use strict';

const expect = require('chai').expect;
const fileReader = require('../lib/file-reader.js');

describe('File reading module', function() {
  describe('with an improper path', function() {
    it('should return with an error', function(done) {
      fileReader(`${__dirname}/not-a-file.text`, function(err) {
        expect(err).to.be.an(Error);
        done();
      });
    });
  });
});