/*

First level: Напишите функцию, которая будет проверять тип данных (typeof someValue) и если
это будет строка, то проверять сколько в ней символов, возвращать (return) результат (количество
символов в строке - число).


Количество символов в строке можно узнать применив к строке свойство length через точку. 
Например выражение 'Hello'.length вернет число 5, если вы вызовите его через консоль,
аналогично и для переменной, которая содержит строку. Например:


let someString = 'Hello';
console.log(someString.length) // 5


если это значение присланное в функцию будет число, то его нужно переводить в строку 
(String(someValue)) и возвращать из функции количество символов в этой преобразованной из 
числа строке.


если это значение присланное в функцию будет boolean - true или false, то его нужно переводить 
в строку (String(someValue)) и возвращать из функции количество символов в этой преобразованном 
из boolean значения строке.


если тип данных не строка и не число и не boolean, то функция должена вернуть строку  'неверный 
тип данных'

*/



let getLength = function(val) {
    if(typeof val === 'string'){
        return val.length;
    }else if(typeof val === 'number' || typeof val === 'boolean'){
        val = String(val);
        return val.length;
    }

    return 'неверный тип данных';
}

/*
Second level: Реализуйте функцию из первой задачи во всех трех синтаксисах функций - декларативно, 
как выражение и как стрелочную функцию.


Прокомментируйте аргументированно почему на Ваш взгляд один из способов описания функции предпочтительнее.
*/

let getLength2 = (val) => {
    if(typeof val === 'string'){
        return val.length;
    }else if(typeof val === 'number' || typeof val === 'boolean'){
        val = String(val);
        return val.length;
    }

    return 'неверный тип данных';
}
