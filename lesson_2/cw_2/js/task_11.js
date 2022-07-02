// var number = prompt("Enter number over 100")

// loop1: if (number > 100){
//     console.log(number);
// }

// if(number < 100 || number === ''){
//     number = prompt("Enter one more");
//     continue loop1;
    
// } else if (number === null){
//     alert("Canceled");
// }

do {
    number = prompt("Введите число больше 100?", 0);
  } while (number <= 100 && number);

  if (number > 100){
    console.log(number);
} else if (number === null){
    console.log("Canceled")
}