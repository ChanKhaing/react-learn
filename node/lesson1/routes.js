const reqhandler = (req,res) => {
       console.log(req.url);
       console.log(req.method);
       // console.log(res);
       res.setHeader("Content-Type", "Text/html");
       res.write("<!DOCTYPE html>");
       res.write("<head><title> hello this is test from node </title>");
       res.write("</head>");
       res.write("<body>");
       // res.write( '<form action="/message" method="POST">     <input type="text" name="text"> <button type="submit"> Click </button> </form> ' );
       res.write("<h1>Hello bearing chankhine</h1>");
       res.write("</body>");
       res.write("</html>");
      return res.end();
}
// export default reqhandler;

module.exports = reqhandler;