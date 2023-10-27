const readline = require("readline"); // создает переменную и импортируем туда readline

const rl = readline.createInterface(process.stdin, process.stdout); // создаем процессы ввода ввывода
const fs = require("fs");
const ListProducts = require("./ListProducts.js"); // импорт класса
const openFileFs = require("./openFile.js");
const showMenu = require("./showMenu.js");
const arrayTemporary = new ListProducts(); // Создаем экземпляр класса
// arrayTemporary.lists.push("Молоко"); пуш работает по такому пути
function handleMenuChoice(choice) {
  switch (choice) {
    case "1":
      ArrProduct();
      break;
    case "2":
      RemoteProduct();
      break;
    case "3":
      SearchProduct();
      break;
    case "4":
      console.log(loadFromFile(filePath)); // вставит сюда лист
      showMenu();
      break;
    case "5":
      SortAllProduct();
      break;
    case "6":
      Exit();
      break;
    default:
      console.log("Неверный выбор. Пожалуйста, выберите опцию из меню.");
      showMenu();
      break;
  }
}
function ArrProduct() {
  rl.question("Введите новые продукты через пробел: ", (input) => {
    const newProduct = input.split(" ");
    arrayTemporary.lists.push(newProduct);
    arrayTemporary.addDataFile("list.txt"); //пробываьб применить класс
    openFileFs();
  });
}

function RemoteProduct() {
  rl.question("Введите параметр для удаления: ", (SelDelProduct) => {
    const fileContent = fs.readFileSync("list.txt", "utf8");
    const productsArray = fileContent
      .split("\n")
      .map((product) => product.trim());
    const SelDelProductIndex = productsArray.indexOf(String(SelDelProduct)); // сделать отдельный модуль
    if (SelDelProductIndex !== -1) {
      productsArray.splice(SelDelProductIndex, 1);
    } else {
      console.log("Продукт не найден.", err);
    }
    console.log(productsArray);
    showMenu();
  });
}

// переписать функцию на вывод найденого им элемента return
function SearchProduct() {
  // как вывести файл в масиив и вернуть найденнное
  rl.question("Введите продукт для поиска: ", (SelProduct) => {
    const SelProductIndex = products.indexOf(SerProduct);
    if (SelProductIndex !== -1)
      console.log(`Продукт найден в индексе: ${SelProductIndex}`);
    else console.log("Продукт не найден.");
    showMenu();
  });
}

function SortAllProduct() {
  rl.question("Хотите отсротировать масив от Я до А? (да/нет) ", (SortWhat) => {
    if (String(SortWhat) === "да") {
      products.reverse();
      console.log(products);
    } else {
      console.log(
        "Спасибо за использование системы учета товаров!\nЗакрытие программы...."
      );
      rl.close();
    }
  });
}
function Exit() {
  rl.question("Хотите завершить программу? (да/нет) ", (CloseProgram) => {
    if (String(CloseProgram) === "да") {
      console.log("Программа завершена.");
      rl.close();
    } else {
      showMenu(); // Продолжаем выполнение сортировки
    }
  });
}
console.log("Добро пожаловать в систему учета товаров!");
showMenu();
rl.on("line", (input) => {
  handleMenuChoice(input);
});
