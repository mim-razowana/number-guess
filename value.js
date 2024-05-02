const number1 = document.getElementById('number');
const btn1 = document.getElementById('btn');
const display = document.getElementById('display');

function result() {
    const number = parseInt(number1.value);
    console.log(typeof number);

    if (number === 23) {
        display.innerHTML = '<h1>Congratulations! You guessed the right number.</h1>';
    }else{
        display.innerHTML = "Sorry, try again!";
    }
};

btn1.addEventListener('click', result);
