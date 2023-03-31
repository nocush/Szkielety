const http = require('http')
const url = require('url')

http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'})
    const q = url.parse(req.url, true).query
    const wynik = (parseFloat(q.a) + parseFloat(q.b) + parseFloat(q.c)) / 2
    //pole 
    const txt = "Pole trojkata to: " +  wynik.toString()
    res.end(txt)
}).listen(3000)
