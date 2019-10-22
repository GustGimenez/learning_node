const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
    res.status(200).send({
        title: "JuliUS API",
        version: "To be defined"
    });
});

module.exports = router;