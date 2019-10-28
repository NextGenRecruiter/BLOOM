const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const { rejectUnauthenticated } = require('../modules/authentication-middleware');


/**
 * POST route
 */
router.post('/', rejectUnauthenticated, (req, res, next) => {
    const answer = req.body;
    console.log(answer.answers);
    const child = answer.child_id[0].id;
    for (let i = 0; i < answer.answers.length; i++) {
        const values = [
            child,
            answer.answers[i].milestone,
            answer.answers[i].type,
            answer.answers[i].question,
            answer.answers[i].answer,
        ]
        console.log(values);

        const query = `INSERT INTO "answer" ("child_id","milestone", "question_type", "question", "answer") VALUES ($1,$2,$3,$4,$5);`;
        pool.query(query, values).then((results) => {

            // res.sendStatus(201);

        }).catch((error) => {
            console.log('ERROR with INSERT ', error);

            res.sendStatus(500);
        })
    }


});

/**
 * GET route
 */
router.get('/:type', rejectUnauthenticated, (req, res) => {  
    console.log(req.params.type);
    
    if(req.params.type == 'milestone'){
        let queryText = `SELECT * FROM "answer";`;
    pool.query(queryText)
    .then((result) => {
        res.send(result.rows)
        console.log(result.rows);
        
    })
        .catch(error => {
            console.log('Error making SELECT for developmental answers:', error);
            res.sendStatus(500);
        });
    }else{

    let queryText = `SELECT * FROM "answer" WHERE milestone=$1;`;
    pool.query(queryText, [req.params.type])
    .then((result) => {
        res.send(result.rows)
        console.log(result.rows);
        
    })
        .catch(error => {
            console.log('Error making SELECT for developmental answers:', error);
            res.sendStatus(500);
        });
    }

});
//DELETE answer route
router.delete('/', rejectUnauthenticated, (req, res) => { 
    const answer = req.body; 
    console.log('in delete', answer.EdittedAnswer);

    for (let i = 0; i < answer.EdittedAnswer.length; i++) {
        
        const query = `DELETE FROM "answer" WHERE "milestone"=$1;`;

        pool.query(query).then((results) => {

            // res.sendStatus(201);

        }).catch((error) => {
            console.log('ERROR with DELETE ', error);

            res.sendStatus(500);
        })
    }


});//end DELETE router

// PUT
router.put('/', rejectUnauthenticated, (req, res) => {
    let update = req.body;
    
    let queryText = `UPDATE "answer" SET "answer" = $1 WHERE "id" = $2;`;
    pool.query(queryText, [update.questions, update.id])
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