const server = require("./api/server.js");

// make the port be assigned by the Server
// heroku will plact the .PORT environment value on their server
const port = process.env.PORT || 5000;
server.listen(port, () => {
  console.log(`\n*** Server Running on http://localhost:${port} ***\n`);
});
