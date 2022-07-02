var login = "admin";
var enteredLogin = prompt("Enter your login");

if (enteredLogin === login) {
    var password = 'main';
    var enteredPassword = prompt("Enter your password");
    if (enteredPassword === password) {
        alert("Hello");
    } else if (enteredPassword === null || enteredPassword === '') {
        alert("Canceled");
    } else if (enteredPassword !== password) {
        alert('incorrect password')
    }
} else {
    alert("Unknown login");
}