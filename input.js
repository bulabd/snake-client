let connection;

const handleUserInput = (key) => {
  if (key === '\u0003') {
    process.exit();
  }
  if (key === 'w') {
    connection.write('Move: up');
  }
  if (key === 'a') {
    connection.write('Move: left');
  }
  if (key === 's') {
    connection.write('Move: down');
  }
  if (key === 'd') {
    connection.write('Move: right');
  }
  if (key === 'z') {
    connection.write('Say: MYFOOD!');
  }
  if (key === 'x') {
    connection.write('Say: YES!');
  }
  if (key === 'c') {
    connection.write('Say: NOOO!');
  }
};

const setupInput = function (conn) {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on('data', handleUserInput);
  return stdin;
};

module.exports = {setupInput};