//Задание 1
// Выведите числа от 1 до 10 в консоль

for (let i = 1; i <=10; i ++) {
    console.log(i);
}
//Задание 2
// Выведите чётные числа от 1 до 20 в консоль
for (let i = 2; i <= 20; i += 2) {
    console.log(i);
}

//Задание 3
// Выведите числа от 10 до 1 в консоль в обратном порядке
for (let i = 10; i>=1; i--) {
    console.log(i);
}
//Задание 4
// Выведите таблицу умножения на 5 от 1 до 10
for (let i = 1; i<=10; i++) {
    let result = 5 * i;
    console.log(result);
}
//Задание 5
// Вычислить сумму чисел от 1 до 100 и вывести значение в консоль
let sum = 0;
for (let i = 1; i<=100; i++) {
    sum += i;
}
console.log(`Сумма чисел от 1 до 100: ${sum}`);
//Задание 6
// Выведите все элементы массива в консоль используя цикл for
const array = [1, 2, 3, 4, 5];
for (let i = 0; i < array.length; i++) {
    console.log(array[i]);
}

//Задание 7
// Выведите сумму всех элементов массива используя цикл for
const numbers = [1, 2, 3, 4, 5];
for (let i = 0; i < numbers.length; i++) {
    console.log(numbers[i]);
}
//Задание 8
// Напишите цикл for, который изменяет массив животных, делая их прекрасными! Например, если есть следующий массив: let animals = ["Кот", "Рыба", "Лемур"]; цикл должен сделать его таким: ["Кот - прекрасное животное", "Рыба - прекрасное животное", "Лемур - прекрасное животное"]
// Подсказка: вам понадобится переприсвоить значения для каждого индекса, то есть присвоить новые значения уже суще- ствующим элементам: animals[0] = animals[0] + " - прекрасное животное";
let animals = ["Кот", "Рыба", "Лемур"];
for (let i = 0; i < animals.length; i++) {
    animals[i] = animals[i] + " - прекрасное животное";
}
console.log(animals);
//Задание 9
// Выведите символы в строке в консоль
const str = 'Hello';
for (let symbol of str) {
    console.log(symbol);

}
//Задание 10
// Выведите все элементы массива в консоль используя цикл for...of. Массив array объявлен в Задании 6
for (let num of array) {
    console.log(num);
}
//Задание 11
// Выведите каждое слово из массива строк в консоль
// Подсказка: вам понадобится метод массивов split
const sentences = ['Hello, world!', 'How are you?'];
for (let i = 0; i < sentences.length; i++) {
    const words = sentences[i].split(' ');
    for (let a = 0; a < words.length; a++) {
        console.log(words[a]);
    }
}

//Задание 12
// Выведите сумму всех элементов массива используя цикл for..of. Массив numbers объявлен в Задании 7
let amount = 0;
for (let number of numbers) {
    amount += number;
}
console.log(amount);
//Задание 13
// Выведите длину каждого слова из массива строк в консоль
const list = ['apple', 'banana', 'cherry'];
for (let word of list) {
    console.log(word.length);
} 
//Задание 14
// Преобразуйте массив каждый элемент массива words в верхний регистр
const words = ['Hello', 'world', '!'];
const uppercaseWords = words.map(word => word.toUpperCase());

console.log(uppercaseWords);

//Задание 15
// Подсчитайте количество гласных букв в строке
// Подсказка: вам понадобится метод includes
const greeting = 'Hello, world!';
let vowelCount = 0;
const vowels = ['a', 'e', 'i', 'o', 'u'];
for (let letters of greeting) {
    if (vowels.includes(letters)) {
        vowelCount++;
    }
}
console.log(vowelCount);
//Задание 16
// Объедините все строки массива в одну строку с пробелами между ними
//const words = ['Hello', 'world', '!'];
const joinWords = words.join(' ');
console.log(joinWords);

// const words = ['Hello', 'world', '!'];
// let combinedString = '';

// for (let i = 0; i < words.length; i++) {
//     combinedString += words[i];


//     if (i < words.length - 1) {
//         combinedString += ' ';
//     }
// }

// console.log(combinedString);

//Задание 17
// Выведите числа от 1 до 10 в консоль используя цикл while
let numbs = 1;
while(numbs <= 10) {
    console.log(numbs);
    numbs++;
}
//Задание 18
// Выведите числа от 1 до 10 в консоль в обратном порядке используя цикл while
let nums = 10;
while(nums >=1) {
    console.log(nums);
    nums++;
}
//Задание 19
// Проверьте, все ли элементы массива являются положительными числами используя цикл while
// Подсказка: используйте директиву break
const allNumbers = [1, 2, 3, -4, 5];
let allPositive = true;

let i = 0;
while (i < allNumbers.length && allPositive) {
    if (allNumbers[i] <= 0) {
        allPositive = false;
    }
    i++;
}

if (allPositive) {
    console.log("Все элементы массива являются положительными числами.");
} else {
    console.log("Есть отрицательные числа в массиве.");
}



//Задание 20
// Выведите значения элементов массива до первого отрицательного числа используя цикл do...while
const random = [2, 4, 6, -3, 8, 10];

let n = 0;
do {
    console.log(random[n]);
    n++;
} while (n < random.length && random[n]>=0);
//Задание 21
// Выведите числа от 1 до 100, пропуская числа, которые делятся на 3 используя цикл do...while
let c = 1;
do {
    if (c % 3 !==0) {
        console.log(c);
    }
    c++;
} while (c<=100);
//Задание 22
// Запросить у пользователя числа, пока сумма введенных чисел не станет больше 100
sum = 0;
while (sum <=100) {
    let number = parseFloat(prompt("Введите число: "))
    if (isNaN(number)) {
        alert("Пожалуйста, введите правильное число.");
        continue;
    }
    sum += number;
}
console.log(`Сумма превысила 100. Сумма равна ${sum}`);
//Задание 23
// Напишите функцию, которая изменит фоновый цвет всех элементов <h4> на странице на синий цвет
function changeColour() {
    let titleElement = document.getElementsByTagName('h4');
    for (let i = 0; i < titleElement.length; i++) {
    titleElement[i].style.backgroundColor = 'blue';
}
} 
changeColour();
//Задание 24
// Напишите генератор случайных строк до 6 символов
// Подсказка: используйте методы объекта Math и длину массива alphabet
let alphabet = 'абвгдеёжзийклмнопрстуфхцчшщъыьэюя';
let randomString = '';
function generateRandomString (length) {
    let result = ' ';
    for (let i = 0; i < length; i++) {
        let random = Math.floor(Math.random() * alphabet.length);
        result += alphabet.charAt(random);
    }
    return result;
}
randomString = generateRandomString(6);
console.log(randomString);