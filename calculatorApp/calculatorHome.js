const { resultHandler } = require("./sum");
const calculatorHome = (req, res) => {
  if (req.url === "/") {
    res.setHeader("Content-Type", "text/html");
    res.write("<html>");
    res.write("<body>");
    res.write("<h1>welcome to calculator</h1>");

    res.write('<a href="/calculator">Go to Calculator</a>');
    res.write("</body>");
    res.write("</html>");

    return res.end();
  } else if (req.url.toLowerCase() === "/calculator") {
    res.setHeader("Content-Type", "text/html");
    res.write("<html>");

    res.write("<body><h1>Calculate here</h1>");
    res.write('<form action="/calculate-result"" method="POST">');
    res.write(
      '<input type="text" name="num1"  placeholder="Enter number"><br></br></input>'
    );
    res.write(
      '<input type="text" name="num2"  placeholder="Enter number"><br></br></input>'
    );

    res.write('<input type="submit" value="Sum"/>');

    res.write("</form>");
    res.write(" </body>");
    res.write("</html>");
    return res.end();
  } else if (req.url === "/calculate-result" && req.method === "POST") {
    return resultHandler(req, res);
  }
  res.setHeader("Content-Type", "text/html");
  res.write("<html>");
  res.write("<body>");
  res.write("<h1>404 Page Does not exist</h1>");
  res.write('<a href="/">Go to Home</a>');
  res.write("</body>");
  res.write("</html>");
};

module.exports = calculatorHome;
