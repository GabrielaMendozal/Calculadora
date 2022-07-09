var inicio = document.querySelector("#display");

let value1 = "";
let value2 = "";
let operator = "";
let calcular = "";

function press(element){
    if(operator === ""){
        if(value1 === 0){
            value1 = `${value1}` + `${element}`
        }else{
            value1 = `${value1}` + `${element}`
        }
        inicio.innerText = `${value1}`;
    }else{
        if(value2 === 0){
            value2 = element
        }else{
            value2 = `${value2}` + `${element}`
        }
        inicio.innerText = `${value2}`;
    }
}

function setOP(element) {
    operator = element
}

function calculate() {
    if (operator==="+") {
        calcular= parseFloat(value1)+parseFloat(value2)
    }else if(operator==="-") {
        calcular= parseFloat(value1)-parseFloat(value2)
    }else if(operator==="*") {
        calcular= parseFloat(value1)*parseFloat(value2)
    }else if(operator==="/") {
        calcular= parseFloat(value1)/parseFloat(value2)
    }
    console.log(calcular);
    inicio.innerText =`${calcular}`;
    value1 = calcular
    value2 = 0
}
function clr(){
    value1 = "";
    value2 = "";
    operator ="";
    calcular = 0;
    inicio.innerText =`${calcular}`;
}