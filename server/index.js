// const chalk = require('chalk');
// const { blueBright } = chalk;

const PORT = process.env.PORT || 8080;
const app = require('./app');
const db = require('./db');

const init = async () => {
  await db.syncAndSeed();
  app.listen(PORT, () =>
    // console.log(blueBright(`Listening at http://localhost:${PORT}`))
    console.log(`Listening at http://localhost:${PORT}`)
  );
};

init();
