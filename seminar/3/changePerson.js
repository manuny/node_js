/* 1. Создайте файл changePerson.js рядом с файлом writePerson.js
2. Напишите в нем код, который
➜ прочитает файл person.json,
➜ уменьшит возраст на 10
➜ изменит город на “Ekaterinburg”
➜ перезапишет исходный файл person.json
💡 Подсказки:
- Для преобразования текста в объект, необходимо использовать
функцию JSON.parse()
- Также не забывайте, что путь к файлу необходимо формировать
с помощью path.join() и __dirname
- Используйте синхронные методы чтения и записи*/
const fs = require("fs");
const path = require("path");
const jsonPath = path.join(__dirname, "person.json");
const person = JSON.parse(fs.readFileSync(jsonPath, "utf8"));
person.age = person.age - 10;
person.city = "Ekaterinburg";
fs.writeFileSync(jsonPath, JSON.stringify(person));
