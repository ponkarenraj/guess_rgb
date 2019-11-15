var numOfSqrs = 6;
var colors = generateRandomColors(numOfSqrs);
var goalColor = colorsPick();
var sqr = document.querySelectorAll(".square");
var colorDP = document.querySelector("#colorDP");
var result = document.querySelector("#result");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var easyBtn = document.querySelector("#easyBtn");
var hardBtn = document.querySelector("#hardBtn");

colorDP.textContent = goalColor;

resetButton.addEventListener("click", function () {
    result.textContent = "";
    resetButton.textContent ="New Colors";
    colors = generateRandomColors(numOfSqrs);
    goalColor = colorsPick();
    colorDP.textContent = goalColor;
    for (var i = 0; i < sqr.length; i++) {
        sqr[i].style.backgroundColor = colors[i];
    }
    h1.style.backgroundColor = "rgb(211, 38, 16)";
})

easyBtn.addEventListener("click", function () {
    easyBtn.classList.add("selected");
    hardBtn.classList.remove("selected");
    numOfSqrs = 3;
    colors = generateRandomColors(numOfSqrs);
    goalColor = colorsPick();
    colorDP.textContent = goalColor;
    for (var i = 0; i < sqr.length; i++) {
        if (colors[i]) {
            sqr[i].style.backgroundColor = colors[i];
        }
        else {
            sqr[i].style.display = "none";
        }
    }
})

hardBtn.addEventListener("click", function () {
    hardBtn.classList.add("selected");
    easyBtn.classList.remove("selected");
    colorDP.textContent = goalColor;
    numOfSqrs = 6;
    colors = generateRandomColors(numOfSqrs);
    goalColor = colorsPick();
    for (var i = 0; i < sqr.length; i++) {
        sqr[i].style.backgroundColor = colors[i];
        sqr[i].style.display = "block";
    }
});

for (var i = 0; i < sqr.length; i++) {
    sqr[i].style.backgroundColor = colors[i];
    sqr[i].addEventListener("click", function () {
        var clickedColor = this.style.backgroundColor;
        if (clickedColor === goalColor) {
            result.textContent = "Correct!";
            changeColors(clickedColor);
            h1.style.backgroundColor = clickedColor;
            resetButton.textContent = "Play Again?!";
        }
        else {
            this.style.backgroundColor = "#232323";
            result.textContent = "Try Again!";
        }
    })
}

function changeColors(colors) {
    for (var i = 0; i < sqr.length; i++) {
        sqr[i].style.backgroundColor = colors;
    }
}

function generateRandomColors(number) {
    var array = [];
    for (var i = 0; i < number; i++) {
        array.push(randomColorGenerator());
    }
    return array;
}

function randomColorGenerator() {
    var r = Math.floor(Math.random() * 256);
    var g = Math.floor(Math.random() * 256);
    var b = Math.floor(Math.random() * 256);
    return "rgb(" + r + ", " + g + ", " + b + ")";
}

function colorsPick() {
    var random = Math.floor(Math.random() * colors.length);
    return colors[random];
}