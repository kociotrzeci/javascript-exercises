const helloWorld = require('./helloWorld');

describe('Hello World', function() {
  test.skip('says "Hello, World!"', function() {
    expect(helloWorld()).toEqual('Hello, World!');
  });
});
