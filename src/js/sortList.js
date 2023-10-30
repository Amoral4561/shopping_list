const fs = require("fs");
function sortList() {
  try {
    // Чтение содержимого файла
    const fileContent = fs.readFileSync("list.txt", "utf8");
    // Разбивка содержимого файла на строки и сортировка их
    const sortedContent = fileContent.split("\n").sort().join("\n");
    // Запись отсортированных данных обратно в файл
    fs.writeFileSync("list.txt", sortedContent, "utf8");
    console.log("Данные в файле отсортированы.\n");
  } catch (err) {
    console.error("Ошибка при сортировке данных:", err);
  }
}
module.exports = sortList;
