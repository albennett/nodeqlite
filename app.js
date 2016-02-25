'use strict';

const sqlite3 = require('sqlite3');
const db = new sqlite3.Database('./db/chinook.sqlite');


console.log("# of invoices per country");
db.all(`
  SELECT      COUNT(*) as count,
              BillingCountry AS country
  FROM        Invoice
  GROUP BY
              BillingCountry
  ORDER BY
              count DESC`,
  (err, res) => {
    if (err) throw err;
    console.log("res", res);
});
