var num = prompt('Enter a number');

var result;

if (num < 5) {
    result = "Tiny"
} else if (num < 10) {
    result = "Small"
} else if (num < 15) {
    result = "Medium"
} else if (num < 20) {
    result = "Large"
} else if (num >= 20) {
    result = "Huge"
} else {
    result = 'you have entered incorrect value';
}

console.log(result);