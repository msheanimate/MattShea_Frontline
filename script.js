var stringFormatter = function(string) {
  var str = string 
  var dom = '';
  var indentCount = 0;
  var charArray = str.split('');

for (var char of charArray) {
  if (char == '(') {
      indentCount++;
    } else if (char == ')') {
      indentCount--;
    }
    if (char == ',' || char == '(') {
      dom = dom.concat('<br/>');
      for (var i = 0; i < indentCount; i++ ) {
        dom = dom.concat('-');
      }
    } else if (char != '(' && char != ')') {
      dom = dom.concat(char);
    }
}
  document.getElementById("demo").innerHTML = dom;
}
var str = "id,created,employee(id,firstname,employeeType(id),lastname),location"; 
stringFormatter(str);