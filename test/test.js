const request = require('supertest');
const express = require('express');

const app = express();
app.get('/', (req, res) => {
  res.send('Hello World!');
});

describe('GET /', function() {
  it('responds with Hello World!', function(done) {
    request(app)
      .get('/')
      .expect('Hello World!', done);
  });
});
