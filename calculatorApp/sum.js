const resultHandler = (req, res) => {
  const body = [];
  req.on("data", (chunk) => {
    // console.log(chunk);
    body.push(chunk);
  });
  req.on("end", () => {
    bodyStr = Buffer.concat(body).toString();
    const params = new URLSearchParams(bodyStr);
    bodyObj = Object.fromEntries(params);
    const result = Number(bodyObj.num1) + Number(bodyObj.num2);
    console.log(result);
    res.setHeader("Content-Type", "text/html");
    res.write("<html>");
    res.write("<body>");
    res.write(`<h1>Your Result : ${result}</h1>`);
    res.write("</body>");
    res.write("</html>");

    return res.end();

    // res.statusCode = 302;
    // // res.setHeader("Location", "/calculate-result");
    // res.write(`<h1>your Result is : ${finalobj} </h1>`);
    // return res.end();
  });
};
exports.resultHandler = resultHandler;
