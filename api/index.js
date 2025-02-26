const express = require('express');
const cors = require('cors');
const { flags, randomQuestion } = require('./flags');
const app = express();

// Настройка CORS
app.use(cors());

// Обработчик маршрута для /api/flags
app.get("/api/flags", (req, res) => {
  const count = parseInt(req.query.count) || 5;

  if (count > flags.length) {
    return res.status(400).json({ error: 'Not enough flags available' });
  }

  const selectedFlags = randomQuestion(count);
  res.json(selectedFlags);
});

const port = 3000;

app.listen(port, () => {
  console.log(`App is running on port ${port}`);
});
