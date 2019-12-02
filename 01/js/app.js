//assign: evaluation
(function () {
    let a = 5;
    let b, c;

    b = a * 5;
    b = c = (b / 2);
})();

//semicolon: error
(function () {
    for (let i = 0; i < 5) {
    }

    console.log("just")
    [1, 2, 3, 4].reverse()

})();

//semicolon: mistake
(function () {
    let a = 12 + 2
        - (2 / 3).toFixed(2)
    console.log(a);
})();

//Number: age
(function () {
    let date = new Date();
    let age = parseInt(prompt("Please input your age"))
    if (isNaN(age)) console.log("Wrong input data")
    else console.log("You burn in ", date.getFullYear() - age)
})();

//Number: temperature
(function () {
    let fahrenheitTemp = parseInt(prompt("Please temperature in fahrenheit"))
    if (isNaN(fahrenheitTemp)) console.log("Wrong input data")
    else console.log(`${fahrenheitTemp}°F in Celsius is ${((fahrenheitTemp - 32) / 1.8).toFixed(1)}°C`)
})();

//Number: divide
(function () {
    let divide = parseInt(prompt("Please input divide value"))
    let divider = parseInt(prompt("Please input divider"))
    if (isNaN(divide) || isNaN(divider)) console.log("Wrong input data")
    else console.log(`${divide} / ${divider} = ${Math.ceil(divide / divider)}`)
})();

//Number: odd
(function () {
    let value = parseInt(prompt("Please input value"))
    if (isNaN(value)) console.log("Выведите четное число или нет")
    else console.log(`${value}`)
})();

//String: greeting
(function () {
    let name = prompt("Please type your name")
    alert(`Hello, ${name}`)
})();

//String: lexics
(function () {
    let text = prompt("Please type your name")
    if (text.includes('bad')) console.log('There is "bad" word')
    else console.log('There is NO "bad" words')
})();

//confirm
(function () {
    let ok = confirm("OK or Cancel?")
    console.log(` type of confirm is ${typeof (ok)}, and value is ${ok}`)
})();

//Boolean && Boolean: if
(function () {
    let sex = confirm("Are you male?")
    if (sex) console.log(`You are male`)
    else console.log(`You are female`)
})();

//Array: booleans
(function () {
    let arr = []
    for (let i = 0; i < 3; i++) {
        arr.push(confirm("Are you male?"))
    }
    console.log(arr);
})();

//Array: plus
(function () {
    let arr = [2, 6]
    arr.push(arr[0] + arr[1])
    console.log(arr);
})();

//Array: plus string
(function () {
    let arr = ["I ", "hate ", "to study"]
    arr.push(arr[0] + arr[1] + arr[2])
    console.log(arr);
})();

//Object: real && Object: change
(function () {
    let phone = {
        color: 'red',
        'display size': 6,
        memory: 128
    }
    console.log(phone);
    phone['display size'] = 5.5
    phone.memory = 256
    phone.battery = 4500
    console.log(phone);
})();

//Comparison if
(function () {
    let age = +prompt("Сколько вам лет?", "");

    if (age <= 0) {
        alert("Еще не родился?");
    }
    else {
        if (age < 18) {
            alert("школьник");
        }
        else {
            if ((age > 18) && (age < 30)) {
                alert("молодеж");
            }
            else {
                if ((age > 30) && (age < 45)) {
                    alert("зрелость");
                }
                else {
                    if ((age > 45) && (age < 60)) {
                        alert("закат");
                    }
                    else {
                        if (age > 60) {
                            alert("как пенсия?");
                        }
                        else {
                            alert("то ли киборг, то ли ошибка");
                        }
                    }
                }
            }
        }
    }
})();

//Comparison: sizes
(function () {
    let shoesSize = parseInt(prompt("Please enter russian size of your shoes"));

    if (shoesSize < 40 || isNaN(shoesSize)) {
        console.log("Size too small or wrong input data");
    }
    else if (shoesSize < 42) {
        console.log("UK size is 8")
    }
    else if (shoesSize < 44) {
        console.log("UK size is 10")
    }
    else if (shoesSize < 46) {
        console.log("UK size is 12")
    }
    else if (shoesSize < 48) {
        console.log("UK size is 14")
    }
    else if (shoesSize < 50) {
        console.log("UK size is 16")
    }
    else if (shoesSize < 52) {
        console.log("UK size is 18")
    }
    else if (shoesSize < 54) {
        console.log("UK size is 20")
    }
    else if (shoesSize < 56) {
        console.log("UK size is 22")
    }
    else console.log("Size too big, no information")
})();

//Comparison: object
(function () {
    let conversationTable = {
        '40': "UK size is 8",
        '42': "UK size is 10",
        '44': "UK size is 12",
        '46': "UK size is 14",
        '48': "UK size is 16",
        '50': "UK size is 18",
        '52': "UK size is 20",
        '54': "UK size is 22",
    }
    console.log(conversationTable[prompt("Please enter russian size of your shoes")] || "There is NO such size in our database");

})();

//Ternary
(function () {
    let sex = confirm("Are you male?")
    sex ? console.log(`You are male`) : console.log(`You are female`)
})();

//Синий пояс Number: flats
(function () {
    let flores = 9, flatOnFlor = 4
    let flatNumber = parseInt(prompt('Please input door number'))
    let flatsInEntrance = flores * flatOnFlor
    let flatEntrance = Math.ceil(flatNumber / flatsInEntrance)
    let flatFlore = Math.ceil((flatNumber -((flatEntrance-1) * flatsInEntrance)) / flatOnFlor)
    console.log(`${flatEntrance} entrance, ${flatFlore} flor`)
})();
