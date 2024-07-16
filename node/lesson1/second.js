// routing request js

const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
  const url = req.url;
  const method = req.method;

  // console.log("what is" + url);

    const urlfunction = (text) => {
      const text1 = text;

      res.setHeader("Cotent-Type", "Text/html");
      res.write("<!DOCTYPE html>");
      res.write("<head><title> hello this is test from node </title>");
      res.write("</head>");
      res.write("<body>");
      res.write(`<header> ${text1}</header>`);
      res.write("</body>");
      res.write("</html>");
      return res.end();
    };
  //   // console.log(url);
  if (url == "/") {
    res.setHeader("Cotent-Type", "Text/html");
    res.write("<!DOCTYPE html>");
    res.write("<head><title> hello this is test from node </title>");
    res.write("</head>");
    res.write("<body>");
    res.write( '<form action="/message" method="POST">     <input type="text" name="text"> <button type="submit"> Click </button> </form> ' );

    res.write("</body>");
      res.write("</html>");
    
    return res.end();
  }
  
  // else if (url == "/message" && method == "POST") {
  //   res.statusCode = 303;
  //   res.setHeader("location","/");
  //   return res.end();
  // }

  //
  else if (url == "/message" && method == "POST") {
      const body = [];
      req.on('data', (chunk) => {
          // console.log(chunk);
        body.push(chunk)
        // console.log(body);
      });
    return  req.on('end', () => {
          const parseBody = Buffer.concat(body).toString();
        const reqdata = parseBody.split('=')[1];
        fs.writeFile("past.txt", reqdata, err => {
          if (!err) {
            res.statusCode = 302;
            res.setHeader("location", "/");
            return res.end();
          }
          throw err
        })
         
      
      })
      
    // fs.writeFileSync("text.txt", "yummy");
    // res.statusCode = 302;
      // res.setHeader("location", "/");
      //  return res.end();
      // console.log("Morning Chan Khine");
    //  urlfunction(`This is the second and your url is ${req.url}`);
  }
  //
  // console.log(req);
  // console.log(req.url , req.method , req.headers)

  //   res.setHeader("Cotent-Type", "Text/html");
  //   res.write("<!DOCTYPE html>");
  //   // res.write('html lang="en"')
  //   res.write("<head><title> hello this is test from node </title>");
  //   res.write("</head>");
  //   res.write(
  //     '<body> <header>hello world this is last </header> '
  //   );
  //   res.write("</body>");
  //   res.write("</html>");
    // res.end();

  urlfunction(`This is the last and your url is ${req.url}`)
});

server.listen(5000);
