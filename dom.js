console.log("Hola a todos in this world");
//console.log(document.querySelectorAll(".large"));
//console.log(document.getElementById("result"));

//console.log(document.documentElement.getAttribute("lang"));
//console.log(document.querySelector("input").getAttribute("class"));
//console.log(document.querySelectorAll("input")[2].getAttribute("class"));

var num1, num2, result;
var expresion = "", secExpresion = "";
function multi(num1,num2){return num1*num2;}
function divi(num1,num2){return num1/num2;}
function sum(num1,num2){return num1+num2;}
function rest(num1,num2){return num1-num2;}

/*num1 =Number (document.querySelectorAll("input")[3].getAttribute("value"));
num2 = Number(document.querySelectorAll("input")[5].getAttribute("value"));
console.log(multi(num1,num2));*/


/*const $button= document.querySelectorAll("input")[3];
function comprobacion(){
    num1 = Number($button.getAttribute("value"));
    num2 = 15;
    console.log(sum(num1,num2));
    console.log(event.type);
    console.log(event.target);
}
$button.addEventListener("click",comprobacion);
*/

//document.querySelector("input").setAttribute("name","1st input");

/*----------------------------*/
const $button = document.querySelectorAll("input");
function showInScreen(result) {
    document.getElementById("result").textContent = result;
}
function numbersEvents(){
    if(this.getAttribute("value")=='='){
        secExpresion= expresion;
        for (let i = 0; i < expresion.length; i++) {
            switch (expresion.charAt(i)) {
                case '+':
                    num1 = expresion.split('+',1).join('');
                    num2 = secExpresion.slice(-1*(secExpresion.length-num1.length-1));
                    num1 = Number(num1);
                    num2 = Number(num2);
                    showInScreen(sum(num1,num2));                
                    break;
                 case '-':
                    num1 = expresion.split('-',1).join('');
                    num2 = secExpresion.slice(-1*(secExpresion.length-num1.length-1));
                    num1 = Number(num1);
                    num2 = Number(num2);
                    showInScreen(rest(num1,num2));                
                    break;
                case 'x':
                    num1 = expresion.split('x',1).join('');
                    num2 = secExpresion.slice(-1*(secExpresion.length-num1.length-1));
                    num1 = Number(num1);
                    num2 = Number(num2);
                    showInScreen(multi(num1,num2));                
                    break;
                case '/':
                    num1 = expresion.split('/',1).join('');
                    num2 = secExpresion.slice(-1*(secExpresion.length-num1.length-1));
                    num1 = Number(num1);
                    num2 = Number(num2);
                    showInScreen(divi(num1,num2));                
                    break;
                default:
                    break;
            }            
        }        
    }
    else if(this.getAttribute("value")=='AC'){
        expresion='';
        showInScreen(expresion);
    } 
        else{
            expresion += this.getAttribute("value");
            showInScreen(expresion);
        }
}
$button.forEach(input =>{
    input.addEventListener("click", numbersEvents);
});



/*---------insert button---------*/
/*const $elemenInput = document.createElement("input");
$elemenInput.setAttribute("type","button");
$elemenInput.setAttribute("name","");
$elemenInput.setAttribute("value","10");

const $fragment = document.createDocumentFragment();
$fragment.appendChild($elemenInput);
const $datos = document.querySelector(".data");
$datos.appendChild($elemenInput);*/
/*
innerHTML    --> inyecta codigo HTML
textContent  --> inyecta SOLO texto
outerHTML    --> remplaza la etiqueta por un nuevo codigo HTML
*/