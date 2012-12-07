var http = require('http');
var fs = require('fs');


http.createServer(function (req, resp) {
    var headers = {};
        headers["Access-Control-Allow-Origin"] = "*";
        headers["Access-Control-Allow-Methods"] = "GET, PUT";
        //'Access-Control-Allow-Headers', 'Content-Type'
        headers["Access-Control-Allow-Headers"] = "Content-Type";
        resp.writeHead(200, headers);

  if (req.url === '/contacts.json') {

    if (req.method === 'PUT') {

        console.log('put');
        req.pipe(fs.createWriteStream(__dirname+'/public/contacts.json'));

        resp.end();

    } else if (req.method === 'GET' || req.method === 'HEAD') {

        console.log('get');
        fs.createReadStream(__dirname+'/public/contacts.json').pipe(resp);
    }else{
        resp.end();
    }
  }
}).listen(3000);