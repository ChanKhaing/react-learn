const http = require('http');


const server = http.createServer((req,res)  => {
    console.log(req.headers);
    // console.log(req.url)
    // console.log(req.method)
    console.log(res);
    res.setHeader("Content-Type", "Text/html");
    res.write("<!DOCTYPE html>");
    res.write("<head><title> hello this is test from node </title>");
    res.write("</head>");
    res.write("<body>");
    // res.write( '<form action="/message" method="POST">     <input type="text" name="text"> <button type="submit"> Click </button> </form> ' );
    res.write("<h1>Hello samarong</h1>")
    res.write("</body>");
    res.write("</html>");
    res.end();
    // res.end();
    
})


server.listen(5000);