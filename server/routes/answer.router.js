const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

/**
 * POST route
 */
router.post('/', (req, res) => {
    const answer = req.body;

    const values=[
        req.body.child.id,
        req.params.id,
        req.body.answer
        ]

console.log(answer);   
const query = `INSERT INTO "answer" ("child_id","question_id","answer") VALUES ($1,$2,$3);`;
pool.query( query, values ).then( ( results ) => {
res.sendStatus( 201 );

} ).catch( ( error ) => {
console.log('ERROR with INSERT ', error);

res.sendStatus( 500 );
})//end catch


    // pool.query( 'SELECT * FROM question' ).then( (result)=>{
    //     for( let i=0; i<result.rows.length; i++){
    //         let values=[
    //             req.params.id,
    //             result.rows[i].id, 
    //             false
    //         ]  
    //         const query1 = `INSERT INTO "answer" ("child_id","question_id", "answer" ) VALUES ($1,$2,$3);`;
    //         console.log( '-------->', values1 );
    //         pool.query( query, values ).then( ( results ) => {
    //             console.log( 'added:', values1[1] )
    //         } ).catch( ( error ) => {
    //         console.log('ERROR with INSERT ', error);
    //         })//end catch
    //     }
    //     res.send( 200 );
    // } )
    
});

/**
 * GET route
 */
router.get('/', (req, res) => {

    // let queryText = `SELECT * FROM "answer";`;
    // pool.query(queryText)
    // .then((result) => {
    //     res.send(result.rows)
    // })
    //     .catch(error => {
    //         console.log('Error making SELECT for developmental answers:', error);
    //         res.sendStatus(500);
    //     });



});


module.exports = router;