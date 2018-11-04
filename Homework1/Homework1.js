//-------------------------------------------------Task1
var a = 2, b = 1;
function checkNumber(a,b) {
    if(a > b) {
       return true;
    }
    else
       return false;
}
checkNumber(a,b);

//-------------------------------------------------Task2

var a = 'RARE';
function addString(a) {
       return "Вы ввели: " + a  ;
}
addString(a);

//-------------------------------------------------Task3

var f;
function checkType(f){
if (f === null){
return null;
}
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

var a = 20;
function allNumbers(a){
var c = "0";
for(var i = 1; i <= a; i++) {
  c += i;
}
console.log(c);
}
allNumbers(a);