/*  Напишите функцию camelize(str), которая преобразует строки вида «my-short-string» в «myShortString».
    То есть дефисы удаляются, а все слова после них получают заглавную букву.
    Примеры:
    camelize("background-color") == 'backgroundColor';
    camelize("list-style-image") == 'listStyleImage';
    camelize("-webkit-transition") == 'WebkitTransition'; */


function camelize(str) {
    let arr = str.split('-');
     for (let i = 1; i < arr.length; i++) {
     arr[ i] = arr[ i].charAt(0).toUpperCase() + arr[ i].slice(1);}
     return arr.join('');
    }

console.log(camelize('background-color'));
console.log(camelize('list-style-image'));
console.log(camelize('-webkit-transition'));


/* написать функцию, принимающую массив чисел
    и возвращающую сумму всех его положительных элементов и отрицательных 
    чисел отдельно в виде нового массива

    например функция принимает как аргумент следующий массив
    arr = [1, -2, 3, 4, -9, 6] */


let arr = [1, -2, 3, 4, -9, 6];
let max = 0, min = 0;
for (let i = 0; i < arr.length; i++) {
    if (arr[i] < 0)
       min += arr[i];
    else
       max += arr[i];
    }

console.log([max , min]);