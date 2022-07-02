// Определить какое из трех, введенных пользователем, чисел максимальное и вывести его на экран.

var a = Number(prompt("Enter first Number"));

var b = Number(prompt("Enter second Number"));

var c = Number(prompt("Enter third Number"));



if (a > b && a > c){
    console.log(a);
} else if (b > a && b > c){
    console.log(b);
} else if (c > a && c > b){
    console.log(c);
} else if (a === b && a === c){
    console.log(a);
}