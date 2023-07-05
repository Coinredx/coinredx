/* eslint-env node */
const nodeStatic = require('node-static');
const file = new nodeStatic.Server('https://coinredx.com/public');

require('https')
  .createServer(function (request, response) {
    request
      .addListener('event', function () {
        file.serve(request, response);
      })
      .resume();
  })
  .listen();

console.log();
