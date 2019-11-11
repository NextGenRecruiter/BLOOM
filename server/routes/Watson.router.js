const express = require('express');
const router = express.Router();
const ask = require('./controller').ask;
const { rejectUnauthenticated } = require('../modules/authentication-middleware');


/**
 * POST route
 */
router.post('/', rejectUnauthenticated, (req, res, next) => {

});

/**
 * GET route
 */
router.get('', rejectUnauthenticated, (req, res) => {  
 

});




module.exports = router;