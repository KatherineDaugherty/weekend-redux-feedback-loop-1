const express = require('express');
const router = express.Router();
const pool = require('../modules/pool');


// POST feedback
router.post('/', (req, res) => {
    console.log(req.body);
    const feedbackToSend = req.body
    const queryText = `INSERT INTO "feedback" ("feeling", "understanding", "support", "comments") VALUES ($1, $2, $3, $4 )`;

    pool.query(queryText, [feedbackToSend.feeling, feedbackToSend.understanding, feedbackToSend.support, feedbackToSend.comments])
        .then((result) => {
            res.sendStatus(201);
        })
        .catch((error) => {
            console.log(`Error making database query ${queryText}`, error);
            res.sendStatus(500);
        });
});

module.exports = router;