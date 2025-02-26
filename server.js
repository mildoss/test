const express = require('express');
const app = express();
const port = process.env.PORT || 3000; // Используем порт из окружения, если он есть, иначе 3000

// Обработчик GET-запроса на корень
app.get('/', (req, res) => {
  res.json({
    message: 'Hello, World!',
    status: 'API is working'
  });
});

// Запуск сервера
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
