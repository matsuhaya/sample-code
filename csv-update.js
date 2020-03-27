const fs = require('fs');
const Pool = require('pg').Pool;
const fastcsv = require('fast-csv');

let stream = fs.createReadStream('sample.csv');
let csvData = [];
let csvStream = fastcsv
  .parse()
  .on('data', data => {
    csvData.push(data);
  })
  .on('end', () => {
    csvData.shift();

    // connect to the PostgreSQL database
    const pool = new Pool({
      host: 'localhost',
      database: 'testdb',
      port: 5432
    });

    const query =
      'UPDATE items SET name= (CASE WHEN $2 != name THEN $2 ELSE name END), price=(CASE WHEN $3 != price THEN $3 ELSE price END) WHERE id=$1;';

    pool.connect((err, client, done) => {
      if (err) throw err;
      try {
        csvData.forEach(row => {
          client.query(query, row, (err, res) => {
            if (err) {
              console.log(err.stack);
            } else {
              console.log('inserted' + res.rowCount + ' row:', row);
            }
          });
        });
      } finally {
        done();
      }
    });
  });

stream.pipe(csvStream);
