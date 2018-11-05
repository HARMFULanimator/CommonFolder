//-------------------------------------------------Task1
var a = prompt("Введите a");
var b = prompt("Введите b");
function checkNumber(a, b) {
    if(a > b) {
       return true;
    }
    else
       return false;
}
checkNumber(a,b);

//or other variant----------------------------------Task1

var a = prompt("Введите a");
var b = prompt("Введите b");
var myFunction = new Function("a", "b", "return a > b");
myFunction(a,b);

//-------------------------------------------------Task2

var a = 'RARE';
function addString(a) {
       return "Вы ввели: " + a;
}
addString(a);

//-------------------------------------------------Task3

var f;
function checkType(f){
if (f === null){
return null;
} else
if (f === undefined) {
return undefined;
}
else return false;
}
checkType(f);

//-------------------------------------------------Task4

var Obj = {};
function checkObj(Obj){
Obj.checked = true;
console.log(Obj.checked);
}
checkObj(Obj);

//-------------------------------------------------Task5

var number = prompt("Введите number");
function allNumbers(number) {
	for(var i = number; i >= 0; i--) {
		console.log(i);
	}
	for(i = 1; i <= number; i++) {
		console.log(i);
	}
}
console.log(allNumbers(number));