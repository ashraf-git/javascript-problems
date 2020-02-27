var marks = [23, 53, 87, 99, 45, 56];
var max = marks[0];
for(i = 0; i < marks.length; i++){
    var element = marks[i];
    if (element > max) {
        max = element;
    }
}
console.log("Hightesgt value is ", max);