// routing request js

const http = require("http");
const server = http.createServer((req, res) => {
  const url = req.url;
  // console.log("what is" + url);

  const urlfunction = (text) => {
    const text1 = text;

    res.setHeader("Cotent-Type", "Text/html");
    res.write("<!DOCTYPE html>");
    res.write("<head><title> hello this is test from node </title>");
    res.write("</head>");
    res.write("<body>");
    res.write(`<header>The second is ${text1}</header>`);
    res.write("</body>");
    res.write("</html>");
    return res.end();
  };
  // console.log(url);
    if (url == "/") {
        res.setHeader("Cotent-Type", "Text/html");
        res.write("<!DOCTYPE html>");
        res.write("<head><title> hello this is test from node </title>");
        res.write("</head>");
        res.write("<body>");
        res.write(
            '<form action="/message" method="POST">     <input type="text" name="text"> <button type="submit"> Click </button> </form> '
        );

        res.write("</body>");
        res.write("</html>");
        return res.end();
    }
    // else {
//       console.log("This is second "+ url + "url")
//   }
  // console.log(req);
  // console.log(req.url , req.method , req.headers)
  res.setHeader("Cotent-Type", "Text/html");
  res.write("<!DOCTYPE html>");
  // res.write('html lang="en"')
  res.write("<head><title> hello this is test from node </title>");
  res.write("</head>");
  res.write(
    '<body> <header>hello world this is last </header> '
  );
  res.write("</body>");
  res.write("</html>");
  res.end();
});

server.listen(5000);
