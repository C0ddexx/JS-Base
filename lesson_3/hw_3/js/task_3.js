// 3. Создать многомерный массив, размер массива получить от пользователя. Каждый нечётный элемент массива заполнить подмассивом со значением 'odd', а чётный - 'even'. 
//     Размер каждого вложенного массива - 3.

//     Для массива размером 3
//     ['odd', 'odd', 'odd']       // 1й элемент
//     ['even', 'even', 'even']    // 2й элемент
//     ['odd', 'odd', 'odd']       // 3й элемент

//     let arr = [
//         ['odd', 'odd', 'odd'],
//         ['even', 'even', 'even'],
//         ['odd', 'odd', 'odd']
//     ]

var arrLenght = Number(prompt("Enter lenght of arr"));

const arr = new Array(arrLenght);

for (var i = 0; i < arr.length; i++){
    if(i % 2 === 0){
        arr[i] = ['odd', 'odd', 'odd']; 
    } else if (i % 2 != 0){
        arr[i] = ['even', 'even', 'even'];
    }
    
}

console.log(arr);
