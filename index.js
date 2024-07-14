//Создаем сервер экспресс:
//Запускаем:
//npm run serve 
//node index.js

import express from 'express';
import path from 'path';

const __dirname = path.resolve();
const PORT = process.env.PORT ?? 3002;
const app = express();

//Берем всю папку для открытия:
app.use(express.static(path.resolve(__dirname, 'public/static')));

//создаем гет запрос с двумя параметрами(запрос и ответ):
// app.get('/', (req, res) => {
//     res.sendFile(path.resolve(__dirname, 'static', 'main.html'))
// })

app.listen(PORT, () => {
    console.log(`Сервер запущен: http://localhost:${PORT}/main.html...`);
})

