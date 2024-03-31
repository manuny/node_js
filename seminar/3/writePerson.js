/* 1. Создайте файл writePerson.js
2. Напишите код, который создаст файл person.json в директории
запускаемого скрипта и запишет в файл следующий объект:
{
	"name":"Ivan"
	"surname":"Ivanov"
	"age":"30"
	"city": "Moscow"
}
💡 Подсказки:
- Для преобразования объекта в текст используйте функцию JSON.stringify()
- Для определения пути к файлу, используйте модуль path и его метод .join(),
а также глобальное свойство __dirname
- Используйте синхронный метод записи в файл */
const path = require("path");
const perst = {
  name: "Ivan",
  surname: "Ivanov",
  age: 30,
  city: "Moscow",
};
const jsonPast = path.join(__dirname, "person.json");
console.log(jsonPast);
fs.writeFileSync(jsonPast, JSON.stringify(perst));
