var a = require("readline-sync");
var number = a.questionInt("Enter any number");
var empaty={};
for(i=1; i<=number; i++){
    empaty[i]=i*i
}console.log(empaty);