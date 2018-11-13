var Fcalc = document.calc;
var Currents = 0;
var result = "";
var result1="";

var leftOperand = null;
var rightOperand = null;
var inputOperandLeft = true;
var operator = null;
var isFloat = false;

var memory = null;

function updateField() {
	
	if (inputOperandLeft){//на левый операнд
		if (isFloat){
			if (leftOperand.indexOf('.') == -1)
				leftOperand += ".";
		var buf = leftOperand.substring(0, leftOperand.indexOf('.'));
		buf = parseFloat(buf) || 0;
		buf += ".";
		buf += leftOperand.substring(leftOperand.indexOf('.')+1, leftOperand.length);
		Fcalc.ans.value = buf;
	}
	else
		Fcalc.ans.value = parseFloat(leftOperand) || 0;
	}
	else{
		if (isFloat){
			if (rightOperand.indexOf('.') == -1)
				rightOperand += ".";
		var buf = rightOperand.substring(0, rightOperand.indexOf('.'));
		buf = parseFloat(buf) || 0;
		buf += ".";
		buf += rightOperand.substring(rightOperand.indexOf('.')+1, rightOperand.length);
		Fcalc.ans.value = buf;
	}
	else
		Fcalc.ans.value = parseFloat(rightOperand) || 0;
	}
};
 
function NumPressed(num) {
    result += num;
	if (operator === null){//на левый операнд
		if (!parseFloat(leftOperand) && leftOperand !=0)
			leftOperand = num+"";
		else{
			if (isFloat){
				if (leftOperand.indexOf('.') === -1)
					leftOperand += '.';
			}
			leftOperand = leftOperand + num;
		}
	}
	else{
		if (!parseFloat(rightOperand) && rightOperand !=0){
			inputOperandLeft = false;
			rightOperand = num+"";
		}
		else{
			if (isFloat){
				if (rightOperand.indexOf('.') === -1)
					rightOperand += '.';
			}
			rightOperand = rightOperand + num;
		}
	}

	updateField();
}


function calc() {
	switch(operator){
		case "+":
			leftOperand = (parseFloat(leftOperand) + parseFloat(rightOperand)) + "";
		break;

		case "-":
			leftOperand = (parseFloat(leftOperand) - parseFloat(rightOperand)) + "";
		break;

		case "*":
			leftOperand = (parseFloat(leftOperand) * parseFloat(rightOperand)) + "";
		break;

		case "/":
			leftOperand = (parseFloat(leftOperand) / parseFloat(rightOperand)) + "";
			if (rightOperand === "0"){
					err("Делить на ноль нельзя");
						document.getElementById('backspace').disabled = true;
						document.getElementById('seven').disabled = true;
						document.getElementById('eight').disabled = true;
						document.getElementById('nine').disabled = true;
						document.getElementById('devide').disabled = true;
						document.getElementById('four').disabled = true;
						document.getElementById('five').disabled = true;
						document.getElementById('six').disabled = true;
						document.getElementById('multiply').disabled = true;
						document.getElementById('one').disabled = true;
						document.getElementById('two').disabled = true;
						document.getElementById('three').disabled = true;
						document.getElementById('minus').disabled = true;
						document.getElementById('zero').disabled = true;
						document.getElementById('dot').disabled = true;
						document.getElementById('plus').disabled = true;
						document.getElementById('equal').disabled = true;
						return;
					}
		break;
	}
	rightOperand = null;
	inputOperandLeft = true;
	updateField();
	operator = null;

}


function Operation(op) {
    result += op;
	if (!leftOperand)
		leftOperand = "0";

		switch(op){
			case "=":
			if (!rightOperand)			
				rightOperand = leftOperand;
			calc();

            
            result1=result+(eval(result.substring(0,result.length-1))).toFixed(2);
            addList(result1);
            result="";

			operator = null;
			inputOperandLeft = true;
			
			break;

			case "+":
			if (rightOperand)
					calc();

			operator = '+';
			inputOperandLeft = false;
			isFloat = false;
			break;

			case "-":
			if (rightOperand)
					calc();

			operator = '-';
			inputOperandLeft = false;
			isFloat = false;
			break;

			case "*":
			if (rightOperand)
					calc();

			operator = '*';
			inputOperandLeft = false;
			isFloat = false;
			break;


			case "/":
			if (rightOperand)
					calc();

			operator = '/';
			inputOperandLeft = false;
			isFloat = false;
			break

			
		}
}
function Clear(){
	leftOperand = null;
	rightOperand = null;
	inputOperandLeft = true;
	operator = null;
	isFloat = false;
	updateField();
							document.getElementById('backspace').disabled = false;
							document.getElementById('seven').disabled = false;
							document.getElementById('eight').disabled = false;
							document.getElementById('nine').disabled = false;
							document.getElementById('devide').disabled = false;
							document.getElementById('four').disabled = false;
							document.getElementById('five').disabled = false;
							document.getElementById('six').disabled = false;
							document.getElementById('multiply').disabled = false;
							document.getElementById('one').disabled = false;
							document.getElementById('two').disabled = false;
							document.getElementById('three').disabled = false;
							document.getElementById('minus').disabled = false;
							document.getElementById('zero').disabled = false;
							document.getElementById('dot').disabled = false;
							document.getElementById('plus').disabled = false;
							document.getElementById('equal').disabled = false;
}

function backspace(){
	if (operator === null) {
		if (leftOperand[leftOperand.length - 1] === '.')
			isFloat = false;
		leftOperand = leftOperand.substring(0, leftOperand.length - 1);
	}
	else {
		if (rightOperand[rightOperand.length - 1] === '.')
			isFloat = false;
		rightOperand = rightOperand.substring(0, rightOperand.length - 1);
	}
	updateField();
}

function toFloat(){
	isFloat = true;
	updateField();
}

function err(error){
	Fcalc.ans.value = error;
}
function addList(str) {
    window.document.getElementById("window").innerText += "\n" + str;
}