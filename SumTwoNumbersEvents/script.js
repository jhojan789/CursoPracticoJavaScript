const num1 = document.getElementById('input1');
const num2 = document.getElementById('input2');
const result = document.getElementById('result');




function onclickCalculate(){    
    // result.innerText = 'Resultado: ' + String(parseFloat(num1.value) + parseFloat(num2.value));
    result.innerText = 'Resultado: ' + String(Number(num1.value) + Number(num2.value));
}