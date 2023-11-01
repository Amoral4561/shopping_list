const fs = require("fs");
class ListProducts {
  constructor() {
    this.lists = []; // Массив, в котором будут храниться списки покупок.
  }
  // Метод для добавления нового списка покупок. на будуюзее
  addList(newList) {
    this.lists.push(newList);
  }

  // Метод для объединения всех списков в один.
  mergeLists() {
    return this.lists.reduce((merged, currentList) => {
      return merged.concat(currentList);
    }, []);
  }
  //метод сохранения файла
  saveFile() {
    const dataToSave = JSON.stringify(this.lists);
    fs.writeFileSync(filePath, JSON.stringify(data, null, 2), "utf8");
  }
  addDataFile(fileName) {
    const dataToSave = this.lists.join("\n");
    fs.appendFileSync(fileName, dataToSave + "\n", "utf8");
  }
  cleaningArray(Array) {
    Array.splice(0, Array.length);
  }
}
module.exports = ListProducts; // Экспортируем класс
