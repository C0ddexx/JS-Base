var userName = prompt("Please enter user name");
var secondName = prompt("Please enter second name");
var userAge = prompt("Please enter your age");

if (Number.isNaN(Number(userAge))) {
    alert("Please enter only digits");
    var userAge = prompt("Please enter your age");
}

var userAgeInTenYears = Number(userAge) + 10;

console.log("Пользователь с именем " + userName + " и фамилией " + secondName + " и его возраст через 10 лет будет " + userAgeInTenYears);