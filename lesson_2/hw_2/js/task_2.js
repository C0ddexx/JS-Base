// 2. Построить прямоугольный треугольник состоящий из символа "*".
//     Запросить у пользователя число, к примеру - 4


var num = Number(prompt("Enter number"));

var str = " ";
var star = "*";

for (let i = 0; i <= num; i++){
    str += star;
  console.log(str);
}