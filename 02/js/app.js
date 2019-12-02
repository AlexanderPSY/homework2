//1
(function () {
    let maxNum = parseInt(prompt('Please input max num'))
    let sum = 0
    for (let i = 1; i <= maxNum; i += 2) {
        sum += i
    }
    console.log(sum)
})();

//2
(function () {
    let str = 'abcde'
    console.log(str[0])
    console.log(str[1])
    console.log(str[4])
    for (let i = 0; i < str.length; i++) {
        if (str[i] === 'a' || str[i] === 'b' || str[i] === 'c')
            console.log('Я знаю эту букву', str[i])
    }
})();

//3
(function () {
    let hours = parseInt(prompt('Please input hours'))
    alert(`В ${hours} часах ${hours * 60 * 60} секунд`);
})();

//3.1
(function () {
    let hours = NaN
    while (isNaN(hours)) {
        hours = parseInt(prompt('Please input hours'))
    }
    alert(`В ${hours} часах ${hours * 60 * 60} секунд`);
})();

//4
(function () {
    let num = 1;
    num += 12;
    num -= 14;
    num *= 5;
    num /= 7;
    num++;
    num--;
    alert(num);
})();

//5
(function () {
    let num = 3
    alert(num)
})();

//6
(function () {
    let [a, b] = [10, 2]
    console.log(`a+b=${a + b}, a-b=${a - b}, a*b=${a * b}, a/b=${a / b}`);
})();

//7
(function () {
    let [c, d] = [10, 2]
    let result = c + d;
    console.log('result = ', result)
})();

//8
(function () {
    let str = 'Привет, Мир!'
    let sum = 0;
    for (let i = 0; i < str.length; i++) {
        sum += str.charCodeAt(0)
    }
    console.log('sum = ', sum)
})();

//9
(function () {
    let name = prompt('Type your name')
    alert('Ваше имя ' + name)
})();

//10
(function () {
    let num = parseInt(prompt('Input number'))
    alert(Math.pow(num, 2))
})();

//11
(function () {
    let inputData = prompt("Input amount of hours/days/weeks/month (ex. 10m)")
    switch (inputData[inputData.length - 1]) {
        case 'h':
            console.log(parseInt(inputData) * 60 * 60)
            break;
        case 'd':
            console.log(parseInt(inputData) * 60 * 60 * 24)
            break;
        case 'w':
            console.log(parseInt(inputData) * 60 * 60 * 24 * 7)
            break;
        case 'm':
            console.log(parseInt(inputData) * 60 * 60 * 24 * 30)
            break;
        default:
            alert("Wrong input data")
    }
})();

