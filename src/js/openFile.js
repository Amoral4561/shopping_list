const fs = require("fs");
const showMenu = require("./showMenu.js");
function openFileFs() {
  try {
    const fileContent = fs.readFileSync("list.txt", "utf8"); // сделать вывод более приятным для апользователячы
    console.log(fileContent);
  } catch (err) {
    console.error("Ошибка при чтении файла:", err);
  }
  setTimeout(showMenu, 1000);
}
module.exports = openFileFs; // Экспортируем класс
