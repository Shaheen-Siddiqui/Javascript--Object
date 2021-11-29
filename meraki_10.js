
empaty={}
for(i=0; i<3; i++){

var b = require("readline-sync");
var name=b.question("Enter your name:-");

      var c = require("readline-sync")
      var marks=c.questionInt("Enter your marks");
                
      

            empaty[name]=marks
}
console.log(empaty);