/* Задание №4
1. Инициализируйте проект NPM.
2. Установите библиотеку express.
3. Создайте файл index.js.
4. В файле напишите код который реализует два обработчика по URL “/” и URL
“/about”.
5. В каждом обработчике верните HTML код, в котором есть заголовок и ссылка
на соседнюю страницу.*/
const express = require("express");
const app = express();
app.use(express.static("static"));

/*app.get("/", (req, res) => {
  res.send(`<h1>Welcome!</h1> <a href = "/adout">Link</a>`);
});
app.get("/about", (req, res) => {
  res.send(`<h1>Welcome about</h1> <a href = "/">Link</a>1`);
});*/

app.listen("3000");
