const fs = require("fs");
const showMenu = require("./showMenu.js");
function openFileFs() {
  try {
    const fileContent = fs.readFileSync("list.txt", "utf8"); // сделать вывод более приятным для апользователячы
    if (fileContent.length !== 0) console.log(fileContent);
    else console.log("Файл пуст");
  } catch (err) {
    console.error("Ошибка при чтении файла:", err);
  }
}
module.exports = openFileFs; // Экспортируем класс
