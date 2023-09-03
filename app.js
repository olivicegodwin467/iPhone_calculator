window.onload = function() {
    let screen = document.getElementById("screen");
    let clear = document.getElementById("clear");
    let del = document.getElementById("del");
    let divide = document.getElementById("divide");
    let seven = document.getElementById("7");
    let eight = document.getElementById("8");
    let nine = document.getElementById("9");
    let mult = document.getElementById("mult");
    let four = document.getElementById("4");
    let five = document.getElementById("5");
    let six = document.getElementById("6");
    let minus = document.getElementById("minus");
    let one = document.getElementById("1");
    let two = document.getElementById("2");
    let three = document.getElementById("3");
    let add = document.getElementById("add");
    let zero = document.getElementById("zero");
    let zeroTwo = document.getElementById("zero-2");
    let dot = document.getElementById("dot");
    let enter = document.getElementById("enter");
    let raise = document.getElementById("raise");

    let currentValue = screen.innerHTML;

    one.onclick = function() {
        let i = currentValue.length;
        if (i == 1 && currentValue[0] == 0)
        {
            currentValue = "1";
            screen.innerHTML = currentValue;
            return;
        }
        currentValue += 1;
        screen.innerHTML = currentValue;
    }
    two.onclick = function() {
        let i = currentValue.length;
        if (i == 1 && currentValue[0] == 0)
        {
            currentValue = "2";
            screen.innerHTML = currentValue;
            return;
        }
        currentValue += 2;
        screen.innerHTML = currentValue;
    }
    three.onclick = function() {
        let i = currentValue.length;
        if (i == 1 && currentValue[0] == 0)
        {
            currentValue = "3";
            screen.innerHTML = currentValue;
            return;
        }
        currentValue += 3;
        screen.innerHTML = currentValue;
    }
    four.onclick = function() {
        let i = currentValue.length;
        if (i == 1 && currentValue[0] == 0)
        {
            currentValue =  "4";
            screen.innerHTML = currentValue;
            return;
        }
        currentValue += 4;
        screen.innerHTML = currentValue;
    }
    five.onclick = function() {
        let i = currentValue.length;
        if (i == 1 && currentValue[0] == 0)
        {
            currentValue = "5";
            screen.innerHTML = currentValue;
            return;
        }
        currentValue += 5;
        screen.innerHTML = currentValue;
    }
    six.onclick = function() {
        let i = currentValue.length;
        if (i == 1 && currentValue[0] == 0)
        {
            currentValue = "6";
            screen.innerHTML = currentValue;
            return;
        }
        currentValue += 6;
        screen.innerHTML = currentValue;
    }
    seven.onclick = function() {
        let i = currentValue.length;
        if (i == 1 && currentValue[0] == 0)
        {
            currentValue = "7";
            screen.innerHTML = currentValue;
            return;
        }
        currentValue += 7;
        screen.innerHTML = currentValue;
    }
    eight.onclick = function() {
        let i = currentValue.length;
        if (i == 1 && currentValue[0] == 0)
        {
            currentValue = "8";
            screen.innerHTML = currentValue;
            return;
        }
        currentValue += 8;
        screen.innerHTML = currentValue;
    }
    nine.onclick = function() {
        let i = currentValue.length;
        if (i == 1 && currentValue[0] == 0)
        {
            currentValue = "9";
            screen.innerHTML = currentValue;
            return;
        }
        currentValue += 9;
        screen.innerHTML = currentValue;
    }
    zero.onclick = function() {
        let i = currentValue.length;
        if (i == 1 && currentValue[0] == 0)
        {
            currentValue = "0";
            screen.innerHTML = currentValue;
            return;
        }
        currentValue += 0;
        screen.innerHTML = currentValue;
    }
    zeroTwo.onclick = function() {
        let i = currentValue.length;
        if (i == 1 && currentValue[0] == 0)
        {
            currentValue = "0";
            screen.innerHTML = currentValue;
            return;
        }
        currentValue += "00";
        screen.innerHTML = currentValue;
    }
    divide.onclick = function() {
        let i = currentValue.length;
        if (currentValue[i - 1] == "÷"
            || currentValue[i - 1] == "x"
            || currentValue[i - 1] == "-"
            || currentValue[i - 1] == "+"
            || currentValue[i - 1] == "."
            || currentValue[i - 1] == "^") {
            return;
        }
        if (i == 1 && currentValue[0] == 0)
        {
            currentValue = "0";
            screen.innerHTML = currentValue;
            return;
        }
        currentValue += "÷";
        screen.innerHTML = currentValue;
    }
    mult.onclick = function() {
        let i = currentValue.length;
        if (currentValue[i - 1] == "÷"
            || currentValue[i - 1] == "x"
            || currentValue[i - 1] == "-"
            || currentValue[i - 1] == "+"
            || currentValue[i - 1] == "."
            || currentValue[i - 1] == "^") {
            return;
        }
        if (i == 1 && currentValue[0] == 0)
        {
            currentValue = "0";
            screen.innerHTML = currentValue;
            return;
        }
        currentValue += "x";
        screen.innerHTML = currentValue;
    }
    minus.onclick = function() {
        let i = currentValue.length;
        if (currentValue[i - 1] == "÷"
            || currentValue[i - 1] == "x"
            || currentValue[i - 1] == "-"
            || currentValue[i - 1] == "+"
            || currentValue[i - 1] == ".") {
            return;
        }
        if (i == 1 && currentValue[0] == 0)
        {
            currentValue = "0";
            screen.innerHTML = currentValue;
            return;
        }
        currentValue += "-";
        screen.innerHTML = currentValue;
    }
    add.onclick = function() {
        let i = currentValue.length;
        if (currentValue[i - 1] == "÷"
            || currentValue[i - 1] == "x"
            || currentValue[i - 1] == "-"
            || currentValue[i - 1] == "+"
            || currentValue[i - 1] == "."
            || currentValue[i - 1] == "^") {
            return;
        }
        if (i == 1 && currentValue[0] == 0)
        {
            currentValue = "0";
            screen.innerHTML = currentValue;
            return;
        }
        currentValue += "+";
        screen.innerHTML = currentValue;
    }
    enter.onclick = function() {
        currentValue = currentValue.replace("^", "**");
        currentValue = currentValue.replace("÷", "/");
        currentValue = currentValue.replace("x", "*");
        screen.innerHTML = eval(currentValue);
        currentValue = "" + eval(currentValue);
    }
    clear.onclick = function() {
        currentValue = "0";
        screen.innerHTML = currentValue;
    }
    dot.onclick = function() {
        let i = currentValue.length;
        if (currentValue[i - 1] == "÷"
            || currentValue[i - 1] == "x"
            || currentValue[i - 1] == "-"
            || currentValue[i - 1] == "+"
            || currentValue[i - 1] == "."
            || currentValue[i - 1] == "^") {
            return;
        }
        if (currentValue[i - 1] == ".") {
            return;
        }
        currentValue += ".";
        screen.innerHTML = currentValue;
    }
    del.onclick = function() {
        let i = currentValue.length;
        if (i == 1 && currentValue[0] == 0)
        {
            currentValue = "0";
            screen.innerHTML = currentValue;
            return;
        }
        else if (i == 1 && currentValue[0] > 0) {
            currentValue = "0";
            screen.innerHTML = currentValue;
            return;
        }
        currentValue = currentValue.slice(0, -1);
        screen.innerHTML = currentValue;
    }
    raise.onclick = function() {
        let i = currentValue.length;
        if (currentValue[i - 1] == "÷"
            || currentValue[i - 1] == "x"
            || currentValue[i - 1] == "-"
            || currentValue[i - 1] == "+"
            || currentValue[i - 1] == "."
            || currentValue[i - 1] == "^") {
            return;
        }
        if (i == 1 && currentValue[0] == 0)
        {
            currentValue = "0";
            screen.innerHTML = currentValue;
            return;
        }
        currentValue += "^";
        screen.innerHTML = currentValue;
    }
}