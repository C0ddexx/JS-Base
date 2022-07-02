// 10. Сумма введённых чисел

// 		Создайте массив
// 		Через цикл запрашивайте у пользователя цифры
// 		Заканчивайте запрашивать значения, когда пользователь введёт не числовое значение, пустую строку или нажмёт «Отмена».
// 		Подсчитайте и верните сумму элементов массива.
// 		P.S. Ноль 0 – считается числом, не останавливайте ввод значений при вводе «0».

var myArray = [];

var number;

var sum = 0;

while(true){
    number = Number(prompt('Enter number'));
    if (number === '' || number === null){
        alert('Wrong!');
        break;
    }

    if (isNaN(number)){
        alert('Wrong!');
        break;
    }
    myArray.push(number);
    sum += number;
}

console.log(myArray);
console.log(sum);