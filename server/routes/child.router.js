const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

/**
 * POST route
 */
router.post('/', (req, res) => {
    const newChild = req.body;
    const values=[
                  req.user.id,
                  newChild.firstName, 
                  newChild.lastName, 
                  newChild.Age, 
                  newChild.gender,
                  newChild.Relationship, 
                  newChild.picture]

    console.log(newChild);   
    const query = `INSERT INTO "child" ("user_id","firstname","lastname","age", "gender","Relationship","picture") VALUES ($1,$2,$3,$4,$5,$6,$7)
                   RETURNING id;`;
    pool.query( query, values ).then( ( results ) => {
        res.sendStatus( 201 );

    } ).catch( ( error ) => {
        console.log('ERROR with INSERT ', error);

        res.sendStatus( 500 );
    })//end catch

});

/**
 * GET route
 */
router.get('/', (req, res) => {

    let queryText = `SELECT * FROM "child";`;
    pool.query(queryText)
    .then((result) => {
        res.send(result.rows)
    })
        .catch(error => {
            console.log('Error making SELECT for developmental questions:', error);
            res.sendStatus(500);
        });

});

module.exports = router;