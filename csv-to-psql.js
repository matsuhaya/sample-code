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

    const query = 'INSERT INTO items (id, name, price) VALUES ($1, $2, $3)';

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
