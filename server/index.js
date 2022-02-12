const app = require('./app');
// eslint-disable-next-line no-unused-vars
const db = require('../db/index');

const port = process.env.PORT || 3010;

app.listen(port, () => {
  console.log(`Server listening on port ${port}!`);
});
