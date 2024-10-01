const inp1 = document.querySelector('#inp1');
const inp2 = document.querySelector('#inp2');
const plusBtn = document.querySelector('#plus');
const minusBtn = document.querySelector('#minus');
const multBtn = document.querySelector('#mult');
const divisionBtn = document.querySelector('#division');
const resultBtn = document.querySelector('#result');
const resultText = document.querySelector('#resultText');
let action;

plusBtn.onclick = () => {
    action = '+'
    console.log(action);
}

minusBtn.onclick = () => {
    action = '-'
    console.log(action);
}

multBtn.onclick = () => {
    action = '*'
    console.log(action);
}

divisionBtn.onclick = () => {
    action = '/'
    console.log(action);
}
resultBtn.addEventListener('click', printResult)


function actionSymbol(val1, val2, actionSymbol) {
    let num1 = Number(val1.value);
    let num2 = Number(val2.value);

    if (actionSymbol === '+') {
        return num1 + num2
    } else if (actionSymbol === '-') {
        return num1 - num2
    } else if (actionSymbol === '*') {
        return num1 * num2
    } else {
        return num1 / num2
    }

}
function printResult() {
    let result = actionSymbol(inp1, inp2, action)

    if (result > 0) {
        resultText.style.color = 'green'
    } else if (result === 0) {
        resultText.style.color = 'blueviolet'
    } else {
        resultText.style.color = 'red'
    }

    resultText.textContent = result.toFixed(2)
    
}




