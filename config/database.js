const pgp = require('pg-promise')();
let _pgp;

const db = (connStr) => {
  if (!_pgp) {
    _pgp = pgp({
      connectionString: connStr
    });
  }
  return _pgp;
}

module.exports = {
  db
};