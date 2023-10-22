const readline = require('readline');// создает переменную и импортируем туда readline

const rl = readline.createInterface(process.stdin, process.stdout);// создаем процессы ввода ввывода

const products = ['Молоко', 'Кофе'];// база данный в переменной
function showMenu() {
  console.log('\n=== Меню ===');
  console.log('1. Добавить продукт');
  console.log('2. Удалить продукт');
  console.log('3. Найти продукт');
  console.log('4. Вывести список продуктов');
  console.log('5. Сортировать массив');
  console.log('6. Выйти');
}
function handleMenuChoice(choice) {
  switch (choice) {
    case '1':
      ArrProduct();
      break;
    case '2':
      RemoteProduct();
      break;
    case '3':
      SearchProduct();
      break;
    case '4':
      console.log(products);
      showMenu();
      break;
    case '5':
      SortAllProduct();
      break;
    case '6':
      Exit();
      break;
    default:
      console.log('Неверный выбор. Пожалуйста, выберите опцию из меню.');
      showMenu();
      break;
  }
}

function ArrProduct() {
  rl.question('Введите новые продукты через пробел: ', (input) => {
    const newProducts = input.split(' '); // Разбиваем строку на отдельные продукты
    products.push(...newProducts); // Добавляем каждый продукт из массива newProducts
    console.log(products);
    showMenu();
  });
}

function RemoteProduct() {
  rl.question('Введите параметр для удаления: ', (DelProduct) => {
    const index = products.indexOf(String(DelProduct));
    if (index !== -1) {
      products.splice(index, 1);
    } else {
      console.log('Продукт не найден.');
    }
    console.log(products);
    showMenu();
  });
}

function SearchProduct() {
  rl.question('Введите продукт для поиска: ', (SerProduct) => {
    const index = products.indexOf(SerProduct);
    if (index !== -1) {
      console.log(`Продукт найден в индексе: ${index}`);
    } else {
      console.log('Продукт не найден.');
    }
    showMenu();
  });
}

function SortAllProduct() {
  rl.question('Хотите отсротировать масив от Я до А? (да/нет) ', (SortWhat) => {
    if (String(SortWhat) === 'да') {
      products.reverse();
      console.log(products);
    } else {
      console.log('Спасибо за использование системы учета товаров!\nЗакрытие программы....');
      rl.close();
    }
  });
}
function Exit() {
  rl.question('Хотите завершить программу? (да/нет) ', (CloseProgram) => {
    if (String(CloseProgram) === 'да') {
      console.log('Программа завершена.');
      rl.close();
    } else {
      showMenu(); // Продолжаем выполнение сортировки
    }
  });
}
console.log('Добро пожаловать в систему учета товаров!');
showMenu();
rl.on('line', (input) => {
  handleMenuChoice(input);
});
