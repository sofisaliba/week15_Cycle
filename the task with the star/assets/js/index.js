
// Создаю пустой массив:
let numbers = [];

// Заполняю массив целыми числами от -10 до 10, используя цикл:
for (let i = -10; i <= 10; i++) {
    numbers.push(i);
}

// Удаляю все отрицательные числа из массива:
numbers = numbers.filter(num => num >= 0);

// Возвожу каждое число в квадрат:
numbers = numbers.map(num => num * num);

// Сортирую числа с порядке убывания:
numbers.sort((a, b) => b - a);

// Вывожу полученный масив в консоль:
console.log(numbers);
