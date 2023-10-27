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
  //метод для загрузки файла
  // loadFromFile(filePath) {
  //   try {
  //     const fileContent = fs.readFileSync(filePath, "utf8");
  //     this.lists = JSON.parse(fileContent);
  //     if (this.lists == []) console.log("В файле ничего нету!!");
  //   } catch (error) {
  //     console.error("Ошибка при загрузке данных из файла:", error);
  //   }
  // }
  // гаписать метод для добавление написанных в переменную список в файл
  addDataFile(fileName) {
    const dataToSave = this.lists.join("\n");
    fs.appendFileSync(fileName, dataToSave + "\n", "utf8");
  }
}
module.exports = ListProducts; // Экспортируем класс
