

// var numbers = [43, 53, 64, 30, 44, 56];
// var sum = 0;
// for(var i = 0; i < numbers.length; i++){
//     var element = numbers[i];
//     var sum = sum + element;
// }
// console.log("total number is: ", sum);
function getArraySum(numbers){
        var sum = 0;
        for(var i = 0; i < numbers.length; i++){
            var element = numbers[i];
            var sum = sum + element;        
    }
    return sum;
}
var numbers = [43, 53, 64, 30, 44, 56];
var results = getArraySum(numbers);
var total = getArraySum([34,35,54,564,646,645]);
console.log("total number is: ", results);
console.log("shasf", total);


