const num1 = document.getElementById('input1');
const num2 = document.getElementById('input2');
const result = document.getElementById('result');
const btnCalculate = document.getElementById('btnCalculate');
const form = document.getElementById('myForm');


form.addEventListener('submit', onclickCalculate);


function onclickCalculate(event){   
    console.log({event});
    event.preventDefault(); //blocks the default behavior of the form (submit and reload the page)
    
    // result.innerText = 'Resultado: ' + String(parseFloat(num1.value) + parseFloat(num2.value));
    result.innerText = 'Resultado: ' + String(Number(num1.value) + Number(num2.value));
}


