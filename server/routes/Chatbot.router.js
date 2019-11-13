const express = require('express');
const router = express.Router();
const processMessage = require('../../processMessage');
const { rejectUnauthenticated } = require('../modules/authentication-middleware');


/**
 * POST route
 */
router.post('/', (req, res) => {
    const { message } = req.body;
    processMessage(message)
 });

/**
 * GET route
 */
router.get('', rejectUnauthenticated, (req, res) => {  
 

});




module.exports = router;