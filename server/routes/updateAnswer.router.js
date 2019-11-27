const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const { rejectUnauthenticated } = require('../modules/authentication-middleware');

// PUT
router.put('/', rejectUnauthenticated, (req, res) => {
    let update = req.body;        
    // for(let i=0; i<update.length; i++){
    //     const values = [
    //         update.id,
    //         update.answer,
    //     ]
    let queryText = `UPDATE "answer" SET "answer" = $1 WHERE "id" = $2;`;
    pool.query(queryText, [req.params.id, update.answer])
        .then(results => {
            console.log('In update', update);
            res.sendStatus(201);
        })
        .catch(error => {
            console.log(error);
            res.sendStatus(500);
        })
    
}); // end router.PUT

module.exports = router;