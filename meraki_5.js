
dict={"name":"Raju", "marks":56, "class":7, "gender":"male"}
var a = require("readline-sync");
var user= a.question("Enter any number");

for(key in dict){
    if(user<=key){

    console.log("yes");
    break
    }
    else{

console.log("no");
break
    }
}