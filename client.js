// establishes a connection with the game server
const { IP, PORT, name } = require('./constants');
const net = require("net");
const connect = function () {
  const conn = net.createConnection({
    host: IP,
    port: PORT
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");

  conn.on('connect', () => {
    console.log('Connected successfully!');
    conn.write(name);
  });

  conn.on('data', (data) => {
    console.log(data);
  });

  return conn;
};

module.exports = {connect};