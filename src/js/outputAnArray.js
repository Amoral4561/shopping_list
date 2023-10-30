const fs = require("fs");
function outputAnArray() {
  const fileContent = fs.readFileSync("list.txt", "utf8");
  const productsArray = fileContent
    .split("\n")
    .map((product) => product.trim());
  return productsArray;
}
module.exports = outputAnArray; // Экспортируем класс
