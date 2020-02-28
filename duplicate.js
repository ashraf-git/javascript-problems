var name = [3, 5, 74, 84, 7, 4, 6, 4, 4, 3];
var uniqueName = [];
for( var i = 0; i < name.length; i ++){
    var element = name[i];
    var index = uniqueName.indexOf(element);
    if(index == -1){
        uniqueName.push(element);
    }
}
console.log(uniqueName);