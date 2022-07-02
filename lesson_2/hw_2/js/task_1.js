// 1. Среди трех чисел найти среднее арифметическое. Если среди чисел есть равные, вывести сообщение "Ошибка". Числа принять от пользователя.

var firstNumber = Number(prompt("Enter frist number"));

var secondNumber = Number(prompt("Enter second number"));

var thirdNumber = Number(prompt("Enter third number"));

var s;

if (firstNumber === secondNumber || firstNumber === thirdNumber || secondNumber === thirdNumber){
        console.log("Error")
} else {
    s = ((firstNumber + secondNumber + thirdNumber)/3);
    console.log(s);
}