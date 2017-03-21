var str = "id,created,employee(id,firstname,employeeType(id),lastname),location";
var formatted = '';
var indentCount = 0;
var chars = str.split('');
chars.forEach(function(char) {
  char === '(' && increment();
  char === ')' && decrement();
  (char === ',' || char === '(') ? addDash() : printChar(char);
  document.getElementById("demo").innerHTML = formatted;
});

function increment() {
  return indentCount ++;
}

function decrement() {
  return indentCount --;
}

function addDash(){
  formatted = formatted.concat('<br/>')
  for (var i = 0; i < indentCount; i++ ) {
    formatted = formatted.concat('-');
  }
}

function printChar(char){
  char !== ')' && (formatted = formatted.concat(char));
}

