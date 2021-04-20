const { Router } = require('express');

const LogEntry = require('../models/LogEntry');

const router = Router();

router.get('/', (req, res) => {
  res.json({
    message: '🌎',
  });
});

router.post('/', async (req, res) => {
  try {
    const logEntry = new LogEntry(req.body).save();
  } catch (err) {}
  console.log(req.body);
});

module.exports = router;
