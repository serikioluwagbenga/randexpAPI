const http = require("http");

require("dotenv").config();
var url = require("url");
const PORT = process.env.PORT || 6890;

const server = http.createServer((req, res) => {
  var params = url.parse(req.url, true).query;
  res.setHeader("Content-Type", "application/json");
  if(params.regex){
    res.statusCode = 200;
    res.write(JSON.stringify({ status: res.statusCode, message: getRegex(params.regex) }));
  }else{
    res.statusCode = 404;
    res.write(JSON.stringify({ status: res.statusCode, message: "No regex passed" }));
  }  
  res.end();
});

server.listen(PORT, () => {
  console.log(`Port is on ${PORT}`);
});

function getRegex(regex) {
  const RandExp = require("randexp");
  return new RandExp(regex).gen();
}
