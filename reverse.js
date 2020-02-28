function reverseString(str){
    var rever = "";
    for(var i = 0; i<str.length; i++){
        var cahr = str[i];
        rever = cahr + rever;
    }
    return rever;
}
var statement = "ami bat khaobo";
console.log(reverseString(statement));

console.log(reverseString("ami tomake balobasi"));