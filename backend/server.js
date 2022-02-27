const http = require('http');

//  CREATE NODE SERVER
const server = http.createServer(function(req, res) {

    //  BROWSER HEADER
    res.writeHead(200, {'Content-Type': 'text/plain'});

    //  OUTPUT MESSAGE TO BROWSER
    const message = 'Node SERVER\n',


    version = 'NodeJS ' + process.versions.node + '\n',
    response = [message, version].join('\n');
    res.end(response);
});
server.listen();