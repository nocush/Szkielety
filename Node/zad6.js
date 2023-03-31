const http = require("http")
const hostname = "localhost"
const port = 3000
const server = http.createServer((req, res) => {
    res.statusCode = 200
    res.setHeader("Content-Type", "text/html")
    var text
    switch (req.url) {
        case "/home":
            text = "<h1>Strona glowna</h1>"
            break
        case "/about":
            text = "<h1>O nas</h1>"
            break
        default:
            text = "<h1>Nie znaleziono</h1>"
            break
        }
    res.end(text)
})
server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`)
})