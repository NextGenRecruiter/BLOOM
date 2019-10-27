const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

router.get('/:type', (req, res) => {
    let queryText = `SELECT * FROM "question"
                     WHERE "milestone"=$1;`;
    pool.query(queryText, [req.params.type])
    .then((result) => {
        res.send(result.rows)
    })
        .catch(error => {
            console.log('Error making SELECT for developmental questions:', error);
            res.sendStatus(500);
        });

});

module.exports = router;