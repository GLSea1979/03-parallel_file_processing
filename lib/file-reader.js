'use strict';

const fs = require('fs');

const fileReader = module.exports = function(file, callback) {
  fs.readFile(`${__dirname}/data/one.txt`, function(err, data) {
    if(err) throw err;
    console.log('content of file one.txt written in hex', data.toString('hex', 0, 8));
  });

  fs.readFile(`${__dirname}/data/two.txt`, function(err, data) {
    if(err) throw err;
    console.log('content of file two.txt written in hex', data.toString('hex', 0, 8));
  });

  fs.readFile(`${__dirname}/data/three.txt`, function(err, data) {
    if(err) throw err;
    console.log('content of file three.txt written in hex', data.toString('hex', 0, 8));
  });
};