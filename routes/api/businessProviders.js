const express = require('express');
const router = express.Router();

router.get('/business', (req, res) => res.json({
    msg: "service Works"
}));

module.exports = router;