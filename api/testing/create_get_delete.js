var request = require('supertest');
require('dotenv').config()
describe('loading express', function () {
  var server;
  beforeEach(function () {
      console.log(process.cwd())
      server = require(process.cwd()+ '/app');
  });
  afterEach(function () {
      setTimeout(done, 1000);
  });
  it('Response to getTimeline', function getTimeline(done) {
    request(server)
       .get('/routes/getTimeline')
       .expect(200, done);
  });
  it('Response to addTweet', function addTweet(done) {
    request(server)
      .get('/routes/addTweet')
      .expect(200, done);
  });
  it('Response to deleteTweet', function deleteTweet(done) {
    request(server)
      .get('/routes/deleteTweet')
      .expect(200, done);
  });
});