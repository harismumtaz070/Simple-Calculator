const balanceElement = document.getElementById("balance");
const incomeElement = document.getElementById("plus");
const expenseElement = document.getElementById("minus");
const descriptionInput = document.getElementById("Description");
const amountInput = document.querySelector(".amount");
const incomeButton = document.querySelector(".btn1");
const expenseButton = document.querySelector(".btn2");

let input = document.getElementById('inputBox');
let buttons = document.querySelectorAll('button');

let string = "";
let arr = Array.from(buttons);
arr.forEach(button => {
    button.addEventListener('click', (e) =>{
        if(e.target.innerHTML == '='){
            string = eval(string);
            input.value = string;
        }

        else if(e.target.innerHTML == 'AC'){
            string = "";
            input.value = string;
        }
        else if(e.target.innerHTML == 'DEL'){
            string = string.substring(0, string.length-1);
            input.value = string;
        }
        else{
            string += e.target.innerHTML;
            input.value = string;
        }
        
    })
})