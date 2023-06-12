const http = require('http');

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.end('welcome to uour home page')
    }
    else if (req.url === '/about') {
        res.end('here is our short history in the about section')
    }
    else {
        res.end(
            `<h1>OOPS!</h1>
        <p>we cant seem to find a page , maybe you want to go back</p>
        <a href = "/">Home </a>`
        )
    }
})

// make sure the path is not already in use , otherwise enter some other path
server.listen(3000)




// a package is a folder that containes javascript code 