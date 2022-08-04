var num1, num2, result;
var expresion = "", secExpresion = "";
function multi(num1,num2){return num1*num2;}
function divi(num1,num2){return num1/num2;}
function sum(num1,num2){return num1+num2;}
function rest(num1,num2){return num1-num2;}

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

